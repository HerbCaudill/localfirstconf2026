---
source: local-first-conf-recording
title: "Frontier LLM results, on device"
date: 2026-07-12
speakers:
  - "RL Nabors"
source_recording: "../../recordings/2026-07-12 - RL Nabors - Frontier LLM results, on device.m4a"
schedule_url: "https://app-2026.localfirstconf.com/schedule/day-1/1415-frontier-llm-results-on-device"
source_transcript: "../raw/2026-07-12 - RL Nabors - Frontier LLM results, on device.md"
cleaned_transcript: "../cleaned/2026-07-12 - RL Nabors - Frontier LLM results, on device.md"
artifact_type: talk_summary
transcription_model: large-v3-turbo-q5_0
---

# Frontier LLM results, on device

**RL Nabors · Local-First Conf 2026 · 2026-07-12**

[Official schedule](https://app-2026.localfirstconf.com/schedule/day-1/1415-frontier-llm-results-on-device) · [Raw transcript](../raw/2026-07-12%20-%20RL%20Nabors%20-%20Frontier%20LLM%20results%2C%20on%20device.md) · [Cleaned transcript](../cleaned/2026-07-12%20-%20RL%20Nabors%20-%20Frontier%20LLM%20results%2C%20on%20device.md)

## Overview

RL Nabors presents a measurement-driven process for replacing a server-hosted frontier language model with a smaller model that can run privately on a user's device. Using the thread-summarization feature in their local social client Mima, Nabors builds a golden dataset from Claude Sonnet outputs, evaluates several small language models for validity, factual consistency, reference accuracy, length, and latency, and selects Llama 3.2 before improving it through few-shot prompting and post-processing. The central takeaway is to “prototype big, deploy small”: prove the capability with a strong foundation model, define measurable success, test progressively smaller candidates, and choose the smallest good-enough edge model.

## Detailed notes

### The need for a private, on-device model

Nabors begins by asking how many audience members use frontier models in production and how many would like to but hesitate to send data to someone else's servers. They introduce their background in open source, FAANG, the React team, and consulting for AI startups, then present Mima, a social client built around atproto and X. Mima is intended to remain entirely on the user's device without a supporting server.

Some Mima features nevertheless require language models. Nabors uses the example of waking up to a long social thread and receiving a concise summary instead of reading the entire exchange. Full-scale LLMs are generally too large for this on-device use, so the task calls for a small language model, or SLM, with millions to billions rather than billions to trillions of parameters.

The number of available small models creates a selection problem. Nabors introduces a framework developed with Google and published on web.dev: “prototype big, deploy small.” A developer should first use a capable foundation model to establish that the desired behavior is possible, then find the smallest model that produces equivalent or acceptably good results. Nabors calls this the edge model and insists that selecting it requires explicit measurements rather than intuition.

### Proving the capability and defining success

The process begins by testing the task with the largest suitable model. Mima initially allowed a user to supply an API key for Claude Sonnet. Nabors shows it producing a meaningful summary of an extended conversation rather than merely repeating its final post, proving that model-based thread summarization works.

They collect public conversation threads and Claude Sonnet summaries that they manually judge to be adequate and non-hallucinatory. These input-output pairs form a golden dataset: a curated collection of what a model should return for each input. Nabors says this dataset should persist throughout the project and expand as new edge cases appear. Their initial dataset contains 14 threads and the expected summaries and annotations.

Nabors defines several evaluation dimensions. Output validity checks whether the response is parseable JSON that Mima's Electron and React interface can consume. Reference structural validity checks that a summary's supporting references correspond to actual posts in the thread. Factual consistency detects invented or altered claims. Length compliance enforces the roughly 90-character summaries required by the interface, a task that small models find surprisingly difficult.

They also measure P50 and P95 latency to capture both typical performance and poor user experiences, warning against relying on averages alone. Nabors cites a VR interaction scenario in which users disengaged when AI-generated results took more than four seconds, and uses four seconds as a rough upper bound for acceptable response time.

### Evaluating the candidate models

The third step is to test candidates from smallest to largest until one approaches the foundation-model baseline. Nabors selects Qwen 2.5 Instruct, Qwen 3, Gemma 4, and Llama 3.2. Gemma has enthusiastic recommendations but is comparatively large at five billion parameters and 3.1 gigabytes. Claude itself recommends including Llama 3.2.

For local evaluation and observability, Nabors chooses the open-source Phoenix library, which can eventually become part of Mima's local CI/CD process. They construct a capability evaluation that runs the same golden dataset through Claude Sonnet and the smaller candidates, typically repeating a run three times. Claude performs well on JSON, length, reference accuracy, and semantic similarity, but each evaluation costs 22 cents. Nabors estimates that using it for an average user could cost roughly a dollar per day.

The fourth step is choosing the smallest good-enough model. A chart plots accuracy against latency. Claude Sonnet establishes the quality ceiling with a P50 near three seconds. Gemma takes about eight seconds even on Nabors's MacBook Pro, making it unsuitable for users with more modest devices. Qwen responds in about one second, but its accuracy is low enough that rerunning it to obtain a correct response would erase much of that advantage.

Reading the actual outputs reveals Llama 3.2 as the best choice. Its summary of a conversation with Sunil closely matches Claude's and, unlike Gemma's, captures the joke in the exchange. It is also faster. Nabors observes that a model developed by a social-media company being effective at conversation summaries makes sense in retrospect, but treats the unexpected result as another reason to rely on evaluation rather than assumptions.

### Improving the smaller model

Llama 3.2 does not initially match Claude Sonnet perfectly, so Nabors turns to prompt engineering. This is also useful when a development team has already standardized on one model or when downloading several multi-gigabyte models onto users' devices would be unacceptable. The MVP's essential measures are narrowed to JSON validity, factual consistency, P50 latency, and P95 latency.

They test one prompt variable at a time. Candidate approaches include formatting input as a numbered list, adding a few examples of Claude's desired output, imposing strict rules such as the 90-character limit, and requesting chain-of-thought reasoning. The strict-teacher style hurts Llama's performance across the measured dimensions. Few-shot prompting, by contrast, provides a meaningful improvement for only about 200 milliseconds of additional latency. The resulting Llama configuration remains under four seconds even in the slower case.

Nabors investigates remaining disagreements in factual-correctness scores rather than accepting the aggregate numbers. Claude Opus, used as the judge, sometimes prefers Claude Sonnet's wording or choice of emphasis even when Llama's alternative is substantively similar. Nabors concludes that evaluators from the same model family may favor one another and says a neutral third model such as ChatGPT should have been included. Human inspection remains necessary to distinguish meaningful factual errors from differences such as describing the same dress as “atrocious” versus “inappropriate.”

Some requirements, including reference consistency and length, can also be enforced through post-processing in the application harness rather than left entirely to the model. Combining the chosen model, few-shot prompting, and post-processing lets Nabors report results that beat the Claude configuration on P50 and P95 latency while running locally in a roughly two-gigabyte model without per-request cost.

### Maintaining the system

Nabors notes that prompts and models will change, so the evaluation framework must also support regression evaluations. These preserve the desired behavior when the prompt is edited or the model upgraded; Nabors plans to work on that part during the conference's workshop day.

They close by restating the four steps for right-sizing a model: prove the capability with a large model, define measurable success, test candidate models, and select the edge model. Prompt engineering can then close part of the remaining quality gap. Nabors challenges the audience to find the smallest good-enough models for their own use cases and points them to the evaluation library and a preview of Mima.

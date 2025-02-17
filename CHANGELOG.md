# Changelog

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

### [1.0.5](https://github.com/pandapro-project/stagehand/compare/v1.0.4...v1.0.5) (2025-02-17)


### Features

* add default browser width ([d3c9356](https://github.com/pandapro-project/stagehand/commit/d3c93566087ef0e48373622c2ad73f3532a6adb2))
* use playground ([ff922a8](https://github.com/pandapro-project/stagehand/commit/ff922a83fc40b160f0c9da08a008968b6dc4d894))

### [1.0.4](https://github.com/pandapro-project/stagehand/compare/v1.0.3...v1.0.4) (2025-02-13)


### Bug Fixes

* handle connect browser failed ([55d581d](https://github.com/pandapro-project/stagehand/commit/55d581d4693ef0ff63695017c19cdd9b74a9c72d))

### 1.0.3 (2025-02-13)


### Features

* use nstbrowser ([841037a](https://github.com/pandapro-project/stagehand/commit/841037a3f0fc49a9e860affe28707bd111866832))
* use sessionId connect ([9e68e1d](https://github.com/pandapro-project/stagehand/commit/9e68e1d2f52d6fb44d4252085817255f1a209f4b))


### Bug Fixes

* Export LLMClient types ([#388](https://github.com/pandapro-project/stagehand/issues/388)) ([e93561d](https://github.com/pandapro-project/stagehand/commit/e93561d7875210ce7bd7fe841fb52decf6011fb3))
* **logger:** enable disabling logger ([#355](https://github.com/pandapro-project/stagehand/issues/355)) ([de9dfb0](https://github.com/pandapro-project/stagehand/commit/de9dfb0bcfc5c36bbdf3cc846a8cef515e407cc4))

### [1.0.2](https://github.com/pandapro-project/stagehand/compare/v1.0.0...v1.0.2) (2025-02-13)


### Features

* use sessionId connect ([41c6d73](https://github.com/pandapro-project/stagehand/commit/41c6d7363c1cffa2abc7dc09a9c8c7911884a7b5))

### [1.0.1](https://github.com/pandapro-project/stagehand/compare/v1.0.0...v1.0.1) (2025-02-13)


### Features

* use sessionId connect ([41c6d73](https://github.com/pandapro-project/stagehand/commit/41c6d7363c1cffa2abc7dc09a9c8c7911884a7b5))

## 1.0.0 (2025-02-13)


### Features

* use nstbrowser ([841037a](https://github.com/pandapro-project/stagehand/commit/841037a3f0fc49a9e860affe28707bd111866832))


### Bug Fixes

* Export LLMClient types ([#388](https://github.com/pandapro-project/stagehand/issues/388)) ([e93561d](https://github.com/pandapro-project/stagehand/commit/e93561d7875210ce7bd7fe841fb52decf6011fb3))
* **logger:** enable disabling logger ([#355](https://github.com/pandapro-project/stagehand/issues/355)) ([de9dfb0](https://github.com/pandapro-project/stagehand/commit/de9dfb0bcfc5c36bbdf3cc846a8cef515e407cc4))
* prettier ([68d60f1](https://github.com/pandapro-project/stagehand/commit/68d60f1e06afd985f3009446fcedf6f0a418576d))

## 1.12.0

### Minor Changes

- [#426](https://github.com/browserbase/stagehand/pull/426) [`bbbcee7`](https://github.com/browserbase/stagehand/commit/bbbcee7e7d86f5bf90cbb93f2ac9ad5935f15896) Thanks [@miguelg719](https://github.com/miguelg719)! - Observe got a major upgrade. Now it will return a suggested playwright method with any necessary arguments for the generated candidate elements. It also includes a major speedup when using a11y tree processing for context.

- [#452](https://github.com/browserbase/stagehand/pull/452) [`16837ec`](https://github.com/browserbase/stagehand/commit/16837ece839e192fbf7b68bec128dd02f22c2613) Thanks [@kamath](https://github.com/kamath)! - add o3-mini to availablemodel

- [#441](https://github.com/browserbase/stagehand/pull/441) [`1032d7d`](https://github.com/browserbase/stagehand/commit/1032d7d7d9c1ef8f30183c9019ea8324f1bdd5c6) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - allow act to accept observe output

### Patch Changes

- [#458](https://github.com/browserbase/stagehand/pull/458) [`da2e5d1`](https://github.com/browserbase/stagehand/commit/da2e5d1314b7504877fd50090e6a4b47f44fb9f6) Thanks [@miguelg719](https://github.com/miguelg719)! - Updated getAccessibilityTree() to make sure it doesn't skip useful nodes. Improved getXPathByResolvedObjectId() to account for text nodes and not skip generation

- [#448](https://github.com/browserbase/stagehand/pull/448) [`b216072`](https://github.com/browserbase/stagehand/commit/b2160723923ed78eba83e75c7270634ca7d217de) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - improve handling of radio button clicks

- [#445](https://github.com/browserbase/stagehand/pull/445) [`5bc514f`](https://github.com/browserbase/stagehand/commit/5bc514fc18e6634b1c81553bbc1e8b7d71b67d34) Thanks [@miguelg719](https://github.com/miguelg719)! - Adding back useAccessibilityTree param to observe with a deprecation warning/error indicating to use onlyVisible instead

## 1.11.0

### Minor Changes

- [#428](https://github.com/browserbase/stagehand/pull/428) [`5efeb5a`](https://github.com/browserbase/stagehand/commit/5efeb5ad44852efe7b260862729a5ac74eaa0228) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - temporarily remove vision

## 1.10.1

### Patch Changes

- [#422](https://github.com/browserbase/stagehand/pull/422) [`a2878d0`](https://github.com/browserbase/stagehand/commit/a2878d0acaf393b37763fb0c07b1a24043f7eb8d) Thanks [@miguelg719](https://github.com/miguelg719)! - Fixing a build type error for async functions being called inside evaulate for observeHandler.

## 1.10.0

### Minor Changes

- [#412](https://github.com/browserbase/stagehand/pull/412) [`4aa4813`](https://github.com/browserbase/stagehand/commit/4aa4813ad62cefc333a04ea6b1004f5888dec70f) Thanks [@miguelg719](https://github.com/miguelg719)! - Includes a new format to get website context using accessibility (a11y) trees. The new context is provided optionally with the flag useAccessibilityTree for observe tasks.

- [#417](https://github.com/browserbase/stagehand/pull/417) [`1f2b2c5`](https://github.com/browserbase/stagehand/commit/1f2b2c57d93e3b276c61224e1e26c65c2cb50e12) Thanks [@sameelarif](https://github.com/sameelarif)! - Simplify Stagehand method calls by allowing a simple string input instead of an options object.

- [#405](https://github.com/browserbase/stagehand/pull/405) [`0df1e23`](https://github.com/browserbase/stagehand/commit/0df1e233d4ad4ba39da457b6ed85916d8d20e12e) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - in ProcessAllOfDom, scroll on large scrollable elements instead of just the root DOM

- [#373](https://github.com/browserbase/stagehand/pull/373) [`ff00965`](https://github.com/browserbase/stagehand/commit/ff00965160d568ae0bc3ca437c01f95b5c6e9039) Thanks [@sameelarif](https://github.com/sameelarif)! - Allow the input of custom instructions into the constructor so that users can guide, or provide guardrails to, the LLM in making decisions.

### Patch Changes

- [#386](https://github.com/browserbase/stagehand/pull/386) [`2cee0a4`](https://github.com/browserbase/stagehand/commit/2cee0a45ae2b48d1de6543b196e338e7021e59fe) Thanks [@kamath](https://github.com/kamath)! - add demo gif

- [#362](https://github.com/browserbase/stagehand/pull/362) [`9c20de3`](https://github.com/browserbase/stagehand/commit/9c20de3e66f0ac20374d5e5e02eb107c620a2263) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - reduce collisions and improve accuracy of textExtract

- [#413](https://github.com/browserbase/stagehand/pull/413) [`737b4b2`](https://github.com/browserbase/stagehand/commit/737b4b208c9214e8bb22535ab7a8daccf37610d9) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - remove topMostElement check when verifying visibility of text nodes

- [#388](https://github.com/browserbase/stagehand/pull/388) [`e93561d`](https://github.com/browserbase/stagehand/commit/e93561d7875210ce7bd7fe841fb52decf6011fb3) Thanks [@kamath](https://github.com/kamath)! - Export LLMClient type

## 1.9.0

### Minor Changes

- [#374](https://github.com/browserbase/stagehand/pull/374) [`207244e`](https://github.com/browserbase/stagehand/commit/207244e3a46c4474d4d28db039eab131164790ca) Thanks [@sameelarif](https://github.com/sameelarif)! - Pass in a Stagehand Page object into the `on("popup")` listener to allow for multi-page handling.

- [#367](https://github.com/browserbase/stagehand/pull/367) [`75c0e20`](https://github.com/browserbase/stagehand/commit/75c0e20cde54951399753e0fa841df463e1271b8) Thanks [@kamath](https://github.com/kamath)! - Logger in LLMClient is inherited by default from Stagehand. Named rather than positional arguments are used in implemented LLMClients.

- [#381](https://github.com/browserbase/stagehand/pull/381) [`db2ef59`](https://github.com/browserbase/stagehand/commit/db2ef5997664e81b1dfb5ca992392362f2d3bab1) Thanks [@kamath](https://github.com/kamath)! - make logs only sync

- [#385](https://github.com/browserbase/stagehand/pull/385) [`5899ec2`](https://github.com/browserbase/stagehand/commit/5899ec2c4b73c636bfd8120ec3aac225af7dd949) Thanks [@sameelarif](https://github.com/sameelarif)! - Moved the LLMClient logger paremeter to the createChatCompletion method options.

- [#364](https://github.com/browserbase/stagehand/pull/364) [`08907eb`](https://github.com/browserbase/stagehand/commit/08907ebbc2cb47cfc3151946764656a7f4ce99c6) Thanks [@kamath](https://github.com/kamath)! - exposed llmClient in stagehand constructor

### Patch Changes

- [#383](https://github.com/browserbase/stagehand/pull/383) [`a77efcc`](https://github.com/browserbase/stagehand/commit/a77efccfde3a3948013eda3a52935e8a21d45b3e) Thanks [@sameelarif](https://github.com/sameelarif)! - Unified LLM input/output types for reduced dependence on OpenAI types

- [`b7b3701`](https://github.com/browserbase/stagehand/commit/b7b370160bf35b09f5dc132f6e86f6e34fb70a85) Thanks [@kamath](https://github.com/kamath)! - Fix $1-types exposed to the user

- [#353](https://github.com/browserbase/stagehand/pull/353) [`5c6f14b`](https://github.com/browserbase/stagehand/commit/5c6f14bade201e08cb86d2e14e246cb65707f7ee) Thanks [@kamath](https://github.com/kamath)! - Throw custom error if context is referenced without initialization, remove act/extract handler from index

- [#360](https://github.com/browserbase/stagehand/pull/360) [`89841fc`](https://github.com/browserbase/stagehand/commit/89841fc42ae82559baddfe2a9593bc3260c082a2) Thanks [@kamath](https://github.com/kamath)! - Remove stagehand nav entirely

- [#379](https://github.com/browserbase/stagehand/pull/379) [`b1c6579`](https://github.com/browserbase/stagehand/commit/b1c657976847de86d82324030f90c2f6a1f3f976) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - dont require LLM Client to use non-ai stagehand functions

- [#371](https://github.com/browserbase/stagehand/pull/371) [`30e7d09`](https://github.com/browserbase/stagehand/commit/30e7d091445004c71aec1748d3a7d75fb86d1f11) Thanks [@kamath](https://github.com/kamath)! - pretty readme :)

- [#382](https://github.com/browserbase/stagehand/pull/382) [`a41271b`](https://github.com/browserbase/stagehand/commit/a41271baf351e20f4c79b4b654d8a947b615a121) Thanks [@sameelarif](https://github.com/sameelarif)! - Added example implementation of the Vercel AI SDK as an LLMClient

- [#344](https://github.com/browserbase/stagehand/pull/344) [`c1cf345`](https://github.com/browserbase/stagehand/commit/c1cf34535ed30262989b1dbe262fb0414cdf8230) Thanks [@kamath](https://github.com/kamath)! - Remove duplicate logging and expose Page/BrowserContext types

## 1.8.0

### Minor Changes

- [#324](https://github.com/browserbase/stagehand/pull/324) [`cd23fa3`](https://github.com/browserbase/stagehand/commit/cd23fa33450107f29cb1ddb6edadfc769d336aa5) Thanks [@kamath](https://github.com/kamath)! - Move stagehand.act() -> stagehand.page.act() and deprecate stagehand.act()

- [#319](https://github.com/browserbase/stagehand/pull/319) [`bacbe60`](https://github.com/browserbase/stagehand/commit/bacbe608058304bfa1f0ab049da4d8aa90e8d6f7) Thanks [@kamath](https://github.com/kamath)! - We now wrap playwright page/context within StagehandPage and StagehandContext objects. This helps us augment the Stagehand experience by being able to augment the underlying Playwright

- [#324](https://github.com/browserbase/stagehand/pull/324) [`cd23fa3`](https://github.com/browserbase/stagehand/commit/cd23fa33450107f29cb1ddb6edadfc769d336aa5) Thanks [@kamath](https://github.com/kamath)! - moves extract and act -> page and deprecates stagehand.extract and stagehand.observe

### Patch Changes

- [#320](https://github.com/browserbase/stagehand/pull/320) [`c0cdd0e`](https://github.com/browserbase/stagehand/commit/c0cdd0e985d66f0464d2e70b7d0cb343b0efbd3f) Thanks [@kamath](https://github.com/kamath)! - bug fix: set this.env to LOCAL if BROWSERBASE_API_KEY is not defined

- [#325](https://github.com/browserbase/stagehand/pull/325) [`cc46f34`](https://github.com/browserbase/stagehand/commit/cc46f345c0a1dc0af4abae7e207833df17da50e7) Thanks [@pkiv](https://github.com/pkiv)! - only start domdebug if enabled

## 1.7.0

### Minor Changes

- [#316](https://github.com/browserbase/stagehand/pull/316) [`902e633`](https://github.com/browserbase/stagehand/commit/902e633e126a58b80b757ea0ecada01a7675a473) Thanks [@kamath](https://github.com/kamath)! - rename browserbaseResumeSessionID -> browserbaseSessionID

- [#296](https://github.com/browserbase/stagehand/pull/296) [`f11da27`](https://github.com/browserbase/stagehand/commit/f11da27a20409c240ceeea2003d520f676def61a) Thanks [@kamath](https://github.com/kamath)! - - Deprecate fields in `init` in favor of constructor options

  - Deprecate `initFromPage` in favor of `browserbaseResumeSessionID` in constructor
  - Rename `browserBaseSessionCreateParams` -> `browserbaseSessionCreateParams`

- [#304](https://github.com/browserbase/stagehand/pull/304) [`0b72f75`](https://github.com/browserbase/stagehand/commit/0b72f75f6a62aaeb28b0c488ae96db098d6a2846) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - add textExtract: an optional, text based approach to the existing extract method. textExtract often performs better on long form extraction tasks. By default `extract` uses the existing approach `domExtract`.

- [#298](https://github.com/browserbase/stagehand/pull/298) [`55f0cd2`](https://github.com/browserbase/stagehand/commit/55f0cd2fe7976e800833ec6e41e9af62d88d09d5) Thanks [@kamath](https://github.com/kamath)! - Add sessionId to public params

### Patch Changes

- [#283](https://github.com/browserbase/stagehand/pull/283) [`b902192`](https://github.com/browserbase/stagehand/commit/b902192bc7ff8eb02c85150c1fe6f89c2a95b211) Thanks [@sameelarif](https://github.com/sameelarif)! - allowed customization of eval config via .env

- [#299](https://github.com/browserbase/stagehand/pull/299) [`fbe2300`](https://github.com/browserbase/stagehand/commit/fbe23007176488043c2415519f25021612fff989) Thanks [@sameelarif](https://github.com/sameelarif)! - log playwright actions for better debugging

## 1.6.0

### Minor Changes

- [#286](https://github.com/browserbase/stagehand/pull/286) [`9605836`](https://github.com/browserbase/stagehand/commit/9605836ee6b8207ed7dc9146e12ced1c78630d59) Thanks [@kamath](https://github.com/kamath)! - minor improvement in action + new eval case

- [#279](https://github.com/browserbase/stagehand/pull/279) [`d6d7057`](https://github.com/browserbase/stagehand/commit/d6d70570623a718354797ef83aa8489eacc085d1) Thanks [@kamath](https://github.com/kamath)! - Add support for o1-mini and o1-preview in OpenAIClient

- [#282](https://github.com/browserbase/stagehand/pull/282) [`5291797`](https://github.com/browserbase/stagehand/commit/529179724a53bf2fd578a4012fd6bc6b7348d1ae) Thanks [@kamath](https://github.com/kamath)! - Added eslint for stricter type checking. Streamlined most of the internal types throughout the cache, llm, and handlers. This should make it easier to add new LLMs down the line, maintain and update the existing code, and make it easier to add new features in the future. Types can be checked by running `npx eslint .` from the project directory.

### Patch Changes

- [#270](https://github.com/browserbase/stagehand/pull/270) [`6b10b3b`](https://github.com/browserbase/stagehand/commit/6b10b3b1160649b19f50d66588395ceb679b3d68) Thanks [@sameelarif](https://github.com/sameelarif)! - add close link to readme

- [#288](https://github.com/browserbase/stagehand/pull/288) [`5afa0b9`](https://github.com/browserbase/stagehand/commit/5afa0b940a9f379a3719a5bbae249dd2a9ef8380) Thanks [@kamath](https://github.com/kamath)! - add multi-region support for browserbase

- [#284](https://github.com/browserbase/stagehand/pull/284) [`474217c`](https://github.com/browserbase/stagehand/commit/474217cfaff8e68614212b66baa62d35493fd2ce) Thanks [@kamath](https://github.com/kamath)! - Build wasn't working, this addresses tsc failure.

- [#236](https://github.com/browserbase/stagehand/pull/236) [`85483fe`](https://github.com/browserbase/stagehand/commit/85483fe091544fc079015c62b6923b03f8b9caa7) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - reduce chunk size

## 1.5.0

### Minor Changes

- [#266](https://github.com/browserbase/stagehand/pull/266) [`0e8f34f`](https://github.com/browserbase/stagehand/commit/0e8f34fc15aee91c548d09534deaccc8adca7c4d) Thanks [@kamath](https://github.com/kamath)! - Install wasn't working from NPM due to misconfigured build step. This attempts to fix that.

## 1.4.0

### Minor Changes

- [#253](https://github.com/browserbase/stagehand/pull/253) [`598cae2`](https://github.com/browserbase/stagehand/commit/598cae230c7b8d4e31ae22fd63047a91b63e51b8) Thanks [@sameelarif](https://github.com/sameelarif)! - clean up contexts after use

### Patch Changes

- [#225](https://github.com/browserbase/stagehand/pull/225) [`a2366fe`](https://github.com/browserbase/stagehand/commit/a2366feb023180fbb2ccc7a8379692f9f8347fe5) Thanks [@sameelarif](https://github.com/sameelarif)! - Ensuring cross-platform compatibility with tmp directories

- [#249](https://github.com/browserbase/stagehand/pull/249) [`7d06d43`](https://github.com/browserbase/stagehand/commit/7d06d43f2b9a477fed35793d7479de9b183e8d53) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - fix broken evals

- [#227](https://github.com/browserbase/stagehand/pull/227) [`647eefd`](https://github.com/browserbase/stagehand/commit/647eefd651852eec495faa1b8f4dbe6b1da17999) Thanks [@kamath](https://github.com/kamath)! - Fix debugDom still showing chunks when set to false

- [#250](https://github.com/browserbase/stagehand/pull/250) [`5886620`](https://github.com/browserbase/stagehand/commit/5886620dd1b0a57c68bf810cf130df2ca0a50a69) Thanks [@seanmcguire12](https://github.com/seanmcguire12)! - add ci specific evals

- [#222](https://github.com/browserbase/stagehand/pull/222) [`8dff026`](https://github.com/browserbase/stagehand/commit/8dff02674df7a6448f2262c7e212b58c03be57bc) Thanks [@sameelarif](https://github.com/sameelarif)! - Streamline type definitions and fix existing typescript errors

- [#232](https://github.com/browserbase/stagehand/pull/232) [`b9f9949`](https://github.com/browserbase/stagehand/commit/b9f99494021e6a9e2487b77bb64ed0a491751400) Thanks [@kamath](https://github.com/kamath)! - Minor changes to package.json and tsconfig, mainly around the build process. Also add more type defs and remove unused dependencies.

## 1.3.0

### Minor Changes

- [#195](https://github.com/browserbase/stagehand/pull/195) [`87a6305`](https://github.com/browserbase/stagehand/commit/87a6305d9a2faf1ab5915965913bc14d5cc15772) Thanks [@kamath](https://github.com/kamath)! - - Adds structured and more standardized JSON logging
  - Doesn't init cache if `enableCaching` is false, preventing `tmp/.cache` from being created
  - Updates bundling for browser-side code to support NextJS and serverless

## 1.2.0

### Minor Changes

- [#179](https://github.com/browserbase/stagehand/pull/179) [`0031871`](https://github.com/browserbase/stagehand/commit/0031871d5a6d6180f272a68b88a8634e5a991785) Thanks [@navidkpr](https://github.com/navidkpr)! - Fixes:

  The last big change we pushed out, introduced a small regression. As a result, the gray outline showing the elements Stagehand is looking out is missing. This commit fixes that. We now process selectorMap properly now (using the updated type Record<number, string[]

  Improved the action prompt:

  Improved the structure
  Made it more straightforward
  Improved working for completed arg and prioritized precision over recall

## 1.1.0

### Minor Changes

- [`9206ec6`](https://github.com/browserbase/stagehand/commit/9206ec640b2d0af9170f0a31788ab1eac448357b) Thanks [@kamath](https://github.com/kamath)! - Connect to a minor session

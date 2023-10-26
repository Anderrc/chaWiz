# ChaWiz

Chrome extension that count characters, words, compar texts, etc.

## Features

-   Format JSONs
-   Compare JSONs
-   Add the option to insert auto-generated text in the conceptual menu

## Installation

**Option 1 (recommended)** – Install it from the [Chrome Web Store](https://chrome.google.com/webstore/detail/mkllcpiagoibjaapcbkoigbbblkmcked).

**Option 2** – Install it from source (see below).

### Development

**Requirements:** [Node](https://nodejs.org/en/).

**Initial setup:**

-   Clone repo
-   Run `npm i` to get TypeScript typings for chrome

**To build it:**

-   Run `npm run build-1`

**To build and rebuild whenever files change:**

-   Run `npm run dev`

**To install your local build to Chrome**

-   Open Chrome and go to `chrome://extensions`
-   Enable "Developer mode",
-   Click "Load unpacked",
-   Select the `dist` folder you built above.
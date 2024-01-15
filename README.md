# Vite React-PDF web worker

Play around this repo in React v17 and Vite v4.

## Notes

1. `workerShim.js` file is necessary, see comments in the file
1. `@react-pdf/renderer` v2 does not work, it will error out as: `TypeError: util3.inherits is not a function`, upgrade it to v3
1. you should specify `worker.format` as `es` in `vite.config.ts` file, or there will be an error when building: `Invalid value "iife" for option "output.format"`, refer to: <https://vitejs.dev/config/worker-options.html>

---

# Original README

This is a simple demo on how to use @react-pdf/renderer inside a web worker.

The demo explicitly doesn't use debouncing to show the non blocking nature of a web worker.

[Edit on StackBlitz ⚡️](https://stackblitz.com/github/shkreios/vite-react-pdf-renderer-web-worker)

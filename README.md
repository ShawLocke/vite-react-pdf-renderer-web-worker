# Vite React-PDF web worker

Play around this repo in React v17 and Vite v4.

## Notes

1. `workerShim.js` file is necessary, see comments in the file
1. you should specify `worker.format` as `es` in `vite.config.ts` file, or there will be an error when building: `Invalid value "iife" for option "output.format"`, refer to: <https://vitejs.dev/config/worker-options.html>
1. you may encounter an error: `Uncaught ReferenceError: global is not defined`, add `<script>var global = window;</script>` into `index.html`, refer to: <https://github.com/vitejs/vite/issues/1984#issuecomment-800165962>
1. you may encounter an error: `TypeError: util3.inherits is not a function`, upgrade `@react-pdf/renderer` to v3 from v2
1. see all notes by searching `224mx`

---

# Original README

This is a simple demo on how to use @react-pdf/renderer inside a web worker.

The demo explicitly doesn't use debouncing to show the non blocking nature of a web worker.

[Edit on StackBlitz ⚡️](https://stackblitz.com/github/shkreios/vite-react-pdf-renderer-web-worker)

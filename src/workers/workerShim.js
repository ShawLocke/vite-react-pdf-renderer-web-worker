// 224mx-note: this part is needed, or there will be en error: `window is not defined`
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
  self.global = self;
  self.window = self;
}

// 224mx-note: this part is needed, or there will be an error: `@vitejs/plugin-react can't detect preamble`. refer to https://vitejs.dev/guide/backend-integration
// import RefreshRuntime from '/@react-refresh'; // only works in dev, will fail when building
// import RefreshRuntime from 'react-refresh'; // works in dev and building, however, it will be included in building bundle, this will cause `React Refresh runtime should not be included in the production bundle.`
if (import.meta.env.DEV) {
  (async function () {
    const RefreshRuntime = await import('react-refresh'); // note: react-refresh is a dependency of @vitejs/plugin-react

    RefreshRuntime.injectIntoGlobalHook(window);
    window.$RefreshReg$ = () => {};
    window.$RefreshSig$ = () => (type) => type;
    window.__vite_plugin_react_preamble_installed__ = true;
  })();
}

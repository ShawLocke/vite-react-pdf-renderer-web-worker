// this part is needed, or there will be en error: `window is not defined`
if (typeof WorkerGlobalScope !== 'undefined' && self instanceof WorkerGlobalScope) {
  self.global = self;
  self.window = self;
}

// this part is needed, or there will be an error: `@vitejs/plugin-react can't detect preamble`. refer to https://vitejs.dev/guide/backend-integration
// import RefreshRuntime from '/@react-refresh'; // only works in dev, will fail when building
import RefreshRuntime from 'react-refresh'; // react-refresh is a dependency of @vitejs/plugin-react // 224mx-todo: validate it in prod
console.log('224mx-workerShim');
if (import.meta.env.DEV) {
  RefreshRuntime.injectIntoGlobalHook(window);
  window.$RefreshReg$ = () => {};
  window.$RefreshSig$ = () => (type) => type;
  window.__vite_plugin_react_preamble_installed__ = true;
}

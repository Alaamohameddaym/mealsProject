
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/Meals_task/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/Meals_task"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 5923, hash: '377963abd9262a80ec96ebc8e553634f80a86f201b977d194c634cf631970a4c', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1083, hash: '8fb991c6acb9ea0727fb191e7e05c4946017b9a10355bda5444590449b6230f8', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 105929, hash: 'defc085526330e6dc955c82bfadd1c09ad3114c27557d778d4a9a2e598fbbe07', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-CON6YUZV.css': {size: 305312, hash: 'o2N/S4UGvEs', text: () => import('./assets-chunks/styles-CON6YUZV_css.mjs').then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  baseHref: "/",
  criticalCssPlans: [[1,"/styles-TAZMSP2Z.css",15,[],[],[[5,"body","{margin:0}",[0]]]]],
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "redirectTo": "/accueil",
    "relativeRedirect": true,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/accueil"
  },
  {
    "renderMode": 2,
    "route": "/spectacles"
  },
  {
    "renderMode": 2,
    "route": "/le-groupe"
  },
  {
    "renderMode": 2,
    "route": "/contact"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    "index.csr.html": {size: 751, hash: "454a6ac935e2950b", text: () => import("./assets-chunks/index_csr_html.mjs").then(m => m.default)},
    "index.server.html": {size: 944, hash: "04292f76e733cda5", text: () => import("./assets-chunks/index_server_html.mjs").then(m => m.default)},
    "le-groupe/index.html": {size: 983, hash: "13a695348c0ac996", text: () => import("./assets-chunks/le-groupe_index_html.mjs").then(m => m.default)},
    "contact/index.html": {size: 986, hash: "130a5e7960c24dfa", text: () => import("./assets-chunks/contact_index_html.mjs").then(m => m.default)},
    "accueil/index.html": {size: 2916, hash: "59a31c6067f89463", text: () => import("./assets-chunks/accueil_index_html.mjs").then(m => m.default)},
    "spectacles/index.html": {size: 994, hash: "59bf0a291b451f69", text: () => import("./assets-chunks/spectacles_index_html.mjs").then(m => m.default)}
  },
};


export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  },
  {
    "renderMode": 2,
    "route": "/login"
  },
  {
    "renderMode": 2,
    "route": "/registro"
  },
  {
    "renderMode": 2,
    "route": "/perfil"
  },
  {
    "renderMode": 2,
    "redirectTo": "/",
    "route": "/**"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 1016, hash: '9e87bf114f4cd64c4f3f268b7f52c9a55bb005e8df6275138db8433eb5ec4e64', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 950, hash: 'e6dcdc788ba7412fb6a946ff6b2cb56f1073d6fa5cd73b968c16f27acee89a96', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'login/index.html': {size: 9941, hash: '3ef58ff8736d6c46061092b5e01e682dbdbfe55751f2aea78f93c16ac0cf5936', text: () => import('./assets-chunks/login_index_html.mjs').then(m => m.default)},
    'registro/index.html': {size: 10564, hash: '413b903094b8d9ba7c973714ecd5d160ab4e9c4000acd9c3947348a4f29659d9', text: () => import('./assets-chunks/registro_index_html.mjs').then(m => m.default)},
    'perfil/index.html': {size: 10141, hash: '9020733c9c50936615f45b1daadca55d6375c9a87629cf388c53a0e3f958f756', text: () => import('./assets-chunks/perfil_index_html.mjs').then(m => m.default)},
    'index.html': {size: 13143, hash: 'b2d403021c175948f84b2fa7a4eafafb9b35029a83cdb184ec4022861e4de97c', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-4AHYYWHO.css': {size: 19744, hash: '69VwtedkPP4', text: () => import('./assets-chunks/styles-4AHYYWHO_css.mjs').then(m => m.default)}
  },
};

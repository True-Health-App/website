
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: "about", component: () => import("pages/about.vue") },
      { path: "contact", component: () => import("pages/contact.vue") },
      { path: "gitHub", component: () => import("pages/gitHub.vue") },
      { path: "Videos/IvorCummins/Fettke_16", component: () => import("pages/Videos/IvorCummins/Fettke_16.vue") },
      { path: "videos", name:"videos", component: () => import("pages/Videos/videos.vue") }
      // { path: "videos/:hostId/:episode", name:"videos", component: () => import("pages/Videos/videos.vue") }
    ]
  }
]

// Always leave this as last one
if (process.env.MODE !== 'ssr') {
  routes.push({
    path: '*',
    component: () => import('pages/Error404.vue')
  })
}

export default routes

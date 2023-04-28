export default [    
  {
    path: '/button',
    // @ts-ignore
    component: () => import('F:/gradual/src/button/example/index.vue')
  },
  {
    path: '/loading',
    // @ts-ignore
    component: () => import('F:/gradual/src/loading/example/index.vue')
  }
]
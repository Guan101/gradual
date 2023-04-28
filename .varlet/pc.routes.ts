export default [  
  {
    path: '/en-US/index',
    // @ts-ignore
    component: () => import('F:/gradual/.varlet/site/pc/pages/index/index.vue')
  },
  {
    path: '/zh-CN/index',
    // @ts-ignore
    component: () => import('F:/gradual/.varlet/site/pc/pages/index/index.vue')
  },
  {
    path: '/layout',
    // @ts-ignore
    component:()=> import('F:/gradual/.varlet/site/pc/Layout.vue'),
    children: [
      
      {
        path: '/zh-CN/button',
        // @ts-ignore
        component: () => import('F:/gradual/src/button/docs/zh-CN.md')
      },
      {
        path: '/zh-CN/loading',
        // @ts-ignore
        component: () => import('F:/gradual/src/loading/docs/zh-CN.md')
      },
      {
        path: '/zh-CN/home',
        // @ts-ignore
        component: () => import('F:/gradual/docs/home.zh-CN.md')
      },
    ]
  }
]
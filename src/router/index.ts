import { createRouter, createWebHistory, RouteMeta } from 'vue-router'
type RouteRecordRaw = import('vue-router').RouteRecordRaw

// 自动导入路由
const modules = import.meta.glob('../views/**/*.tsx')

interface Module {
  default: {
    meta: RouteMeta
  }
}


const addRoutes = Object.keys(modules).map(async (key) => {
  const path = key.replace('../views', '').replace('.tsx', '')
  const name = path.replace('/', '')
  const component = modules[key]
  const meta = (await component() as Module).default.meta

  return {
    path,
    name,
    meta,
    component,
  }
})


const resRoutes = await Promise.all(addRoutes)

function resRoutesToTree(routers: RouteRecordRaw[], level: number = 0) {
  const res: RouteRecordRaw[] = []
  routers.forEach((item) => {
    if (item.path === '/') {
      res.push(item)
    } else {
      const parent = res.find((i) => i.path === item.path.split('/').slice(0, level + 2).join('/'))
      if (parent) {
        if (!parent.children) {
          parent.children = []
        }
        parent.children.push(item)
      } else {
        res.push(item)
      }
    }
  })
  if (level < 3) {
    resRoutesToTree(routers, level + 1)
  }
  return res
}

const resRoutesTree = resRoutesToTree(resRoutes)

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'Layout',
    component: () => import('@/layout'),
    children: [
      ...resRoutesTree,
    ],
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})
export default router

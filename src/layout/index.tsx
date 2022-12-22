import { defineComponent, } from "vue";
import { RouterView, useRouter } from "vue-router";
type RouteRecordRaw = import('vue-router').RouteRecordRaw


export default defineComponent({
  name: "Layout",
  setup() {
    const route = useRouter()
    const routes = route.options.routes as RouteRecordRaw[]
    const getMneus = (routes: RouteRecordRaw[]) => {
      return routes.map(item => {
        if (item.children) {
          return (
            <div class="dropdown dropdown-bottom" >
              <label tabindex="0" class="btn m-1" onClick={() => {
                route.push(item.path)
              }}>{item.meta?.title}</label>
              <ul tabindex="0" class="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
                {getMneus(item.children)}
              </ul>
            </div>
          )
        } else {
          return <li><a onClick={() => {
            route.push(item.path)
          }}>{item.meta?.title}</a></li>
        }
      })
    }
    return () => (
      <div class="layou">
        <div class="menu bg-primary textw flex flex-row p-1">
          {getMneus(routes[0].children!)}
        </div>
        <div class="text-xl breadcrumbs p-2">
          <ul>
            {
              route.currentRoute.value.matched.map(item => {
                if (item.path === '/') {
                  return <li onClick={
                    () => {
                      route.push('/')
                    }
                  }><a>首页</a></li>
                }
                return (
                  <li onClick={
                    () => {
                      route.push(item.path)
                    }
                  }>
                    <a>
                      {item.meta?.title}
                    </a>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <RouterView></RouterView>
      </div>
    );
  },
});

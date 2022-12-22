import { defineComponent, onActivated, onBeforeMount, onBeforeUnmount, onBeforeUpdate, onDeactivated, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated } from "vue";

export default defineComponent({
  name: "LifecycleHooks",
  meta: {
    title: "生命周期钩子",
  },
  setup() {
    let count = $ref(0)
    const increment = () => {
      count++
    }
    // 实例挂载之前
    onBeforeMount(() => {
      console.log("实例挂载之前onBeforeMount");
    });
    // 实例挂载之后
    onMounted(() => {
      console.log("实例挂载之后created");
    });
    // 实例卸载之前
    onBeforeUnmount(() => {
      console.log("实例卸载之前onBeforeUnmount");
    });
    // 实例卸载之后
    onUnmounted(() => {
      console.log("实例卸载之后onUnmounted");
    });
    // 数据更新之前
    onBeforeUpdate(() => {
      console.log("数据更新之前onBeforeUpdate");
    });
    // 数据更新之后
    onUpdated(() => {
      console.log("数据更新之后onUpdated");
    });
    // 跟踪响应式数据的变化
    onRenderTracked((event) => {
      console.log("跟踪响应式数据的变化onRenderTracked", event);
    });
    // 触发响应式数据的变化
    onRenderTriggered((event) => {
      console.log("触发响应式数据的变化onRenderTriggered", event);
    });
    // 路由激活时
    onActivated(() => {
      console.log("路由激活时onActivated");
    });
    // 路由离开时
    onDeactivated(() => {
      console.log("路由离开时onDeactivated");
    });
    return () => (
      <div>
        <div class="text-xl">count: {count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
      </div>
    );
  },
})

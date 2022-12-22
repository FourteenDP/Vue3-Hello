import { defineComponent, reactive, ref } from "vue";

export default defineComponent({
  name: "Reactivity",
  meta: {
    title: "响应式",
  },
  setup() {
    const state = reactive({ count: 0 })
    function increment() {
      state.count++
    }

    const count = ref(0)
    return () => (
      <div>
        <div class="text-xl">state: {state.count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
        <div class="text-xl">ref: {count.value}</div>
        <button class="btn btn-primary" onClick={() => count.value++}>+1</button>
      </div>
    );
  },
});

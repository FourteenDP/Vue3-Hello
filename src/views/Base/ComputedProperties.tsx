import { defineComponent } from "vue";

export default defineComponent({
  name: "ComputedProperties",
  meta: {
    title: "计算属性",
  },
  setup() {
    // 计算属性
    let count = $ref(0)

    const double = $computed(() => count * 2)

    const increment = () => {
      count++
    }

    // 可写计算属性
    let count2 = $ref(0)

    let double2 = $computed({
      get: () => count2 * 2,
      set: (val) => {
        count2 = val / 2
      },
    })

    return () => (
      <div>
        <div class="text-xl">count: {count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
        <div class="text-xl">double: {double}</div>
        <h2>可写计算属性</h2>
        <div class="text-xl">count2: {count2}</div>
        <button class="btn btn-primary" onClick={() => count2++}>+1</button>
        <div class="text-xl">double2: {double2}</div>
        <button class="btn btn-primary" onClick={() => double2 = 10}>double2 = 10</button>
      </div>
    );
  },
})

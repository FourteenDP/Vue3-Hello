import { defineComponent } from "vue"

export default defineComponent({
  name: 'EventHandling',
  meta: {
    title: '事件处理',
  },
  setup() {
    let count = 0

    const increment = () => {
      count++
    }

    return () => (
      <div>
        <div class="text-xl">count: {count}</div>
        <button class="btn btn-primary" onClick={increment}>+1</button>
      </div>
    )
  }
})

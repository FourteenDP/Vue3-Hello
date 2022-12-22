import { defineComponent } from "vue"
import { RouterView } from "vue-router"

export default defineComponent({
  name: 'Demo',
  meta: {
    title: '示例',
    showMenu: true,
    icon: '🔥'
  },
  setup() {
    return () => (
      <div class="Demo">
        <RouterView></RouterView>
      </div>
    )
  }
})

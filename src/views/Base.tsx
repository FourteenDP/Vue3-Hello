import { defineComponent } from "vue"
import { RouterView } from "vue-router"

export default defineComponent({
  name: 'Base',
  meta: {
    title: '基础',
    showMenu: true,
    icon: '🏠',
  },
  setup() {
    return () => (
      <div class="home">
        <RouterView></RouterView>
      </div>
    )
  }
})

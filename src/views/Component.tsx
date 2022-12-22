import { defineComponent } from 'vue'
import { RouterView } from 'vue-router'

export default defineComponent({
  name: 'Component',
  meta: {
    title: '深入组件',
    showMenu: true,
    icon: '🔥'
  },
  setup() {
    return () => (
      <div class="Component">
        <RouterView></RouterView>
      </div>
    )
  }
})

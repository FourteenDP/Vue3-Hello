import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
  setup() {
    return () => (
      <div class="app">
        <router-view />
      </div>
    )
  }
})

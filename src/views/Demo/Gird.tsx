import { defineComponent, watchEffect } from "vue";
import GirdDemo from "@/components/GirdDemo";

export default defineComponent({
  name: "Gird",
  meta: {
    title: "表格",
  },
  setup() {
    const searchQuery = $ref('')
    const gridColumns = ['name', 'power']
    const gridData = [
      { name: 'Chuck Norris', power: Infinity },
      { name: 'Bruce Lee', power: 9000 },
      { name: 'Jackie Chan', power: 7000 },
      { name: 'Jet Li', power: 8000 }
    ]
    return () => (
      <div>
        <form id="search">
          Search <input type="text" v-model={searchQuery} />
        </form>
        <GirdDemo columns={gridColumns} data={gridData} filterKey={searchQuery} />
      </div>
    );
  },
})

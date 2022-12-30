import { defineComponent } from "vue";
import Tree, { TreeData } from "@/components/Tree";

export default defineComponent({
  name: "Tree",
  meta: {
    title: "树形控件",
  },
  setup() {
    const treeData = $ref<TreeData>({
      name: 'My Tree',
      children: [
        { name: 'hello' },
        { name: 'world' },
        {
          name: 'child folder',
          children: [
            {
              name: 'child folder',
              children: [{ name: 'hello' }, { name: 'world' }]
            },
            { name: 'hello' },
            { name: 'world' },
            {
              name: 'child folder',
              children: [{ name: 'hello' }, { name: 'world' }]
            }
          ]
        }
      ]
    })
    return () => (
      <div>
        <Tree model={treeData} />
      </div>
    );
  },
})

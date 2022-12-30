import { defineComponent, PropType } from "vue";

import "./tree.module.css";

export interface TreeData {
  name: string;
  children?: TreeData[];
}
const Tree = defineComponent({
  name: "Tree",
  props: {
    model: {
      type: Object as PropType<TreeData>,
      default: () => ({}),
    },
  },
  setup(props) {

    let isOpen = $ref(false)
    const isFolder = $computed(() => {
      return props.model.children && props.model.children.length
    })

    function toggle() {
      isOpen = !isOpen
    }

    function changeType() {
      if (!isFolder) {
        props.model.children = []
        addChild()
        isOpen = true
      }
    }

    function addChild() {
      props.model.children && props.model.children.push({ name: 'new stuff' })
    }

    return () => (
      <ul>
        <li>
          <span class="disclosure" onClick={toggle} v-show={isFolder}>
            {isOpen ? '-' : '+'}
          </span>
          <span class="file" onClick={changeType}>
            {props.model.name}
          </span>
          <ul v-show={isOpen}>
            {props.model.children && props.model.children.map((child) => (
              <Tree model={child} />
            ))}

            <li>
              <span class="add" onClick={addChild}>+</span>
            </li>
          </ul>
        </li>
      </ul>
    );
  }
})
export default Tree

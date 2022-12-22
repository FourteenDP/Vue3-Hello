import { defineComponent } from "vue";

export default defineComponent({
  name: "ConditionalRendering",
  meta: {
    title: "条件和列表渲染",
  },
  setup() {
    let todos = $ref([
      { text: "Learn JavaScript" },
      { text: "Learn Vue" },
      { text: "Build something awesome" },
    ])
    const remove = (index: number) => {
      todos.splice(index, 1)
    }

    return () => (
      <div>
        {/* 条件渲染 */}
        {todos.length > 0 ? <div>有待办事项</div> : <div>没有待办事项</div>}
        {/* 列表渲染 */}
        <ul>
          {todos.map((todo, index) => (
            <li key={index}>
              {todo.text}
              <button class={['btn']} onClick={() => remove(index)}>X</button>
            </li>
          ))}
        </ul>
        <div v-show={todos.length}>
          <button class={['btn']}>添加</button>
        </div>
      </div>
    );
  },
});

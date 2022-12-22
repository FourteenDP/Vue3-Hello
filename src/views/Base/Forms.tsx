import { defineComponent, InputHTMLAttributes } from 'vue'

export default defineComponent({
  name: 'Forms',
  meta: {
    title: '表单输入绑定',
  },
  setup() {
    // 姓
    let firstName = $ref('')
    // 名
    let lastName = $ref('')
    return () => (
      <div>
        {/* 简写 */}
        <input v-model={firstName} type="text" placeholder='firstName' />
        {/* 完整写法 */}
        <input onInput={event => {
          lastName = (event.target as InputHTMLAttributes).value
        }} type="text" placeholder='firstName' />
        <p>{firstName} | {lastName}</p>
      </div>
    )
  },
})

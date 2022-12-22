import { computed, defineComponent, ref } from "vue";
import { marked } from 'marked';

export default defineComponent({
  name: "markdown",
  meta: {
    title: "markdown编辑器",
  },
  setup() {
    const text = ref("# Hello World");
    const preview = ref<HTMLElement | null>(null);
    console.log(preview);

    const res = computed(() => {
      return marked(text.value);
    });

    console.log(res);

    return () => (
      <div class="markdown">
        <div class="editor">
          <textarea v-model={text.value}></textarea>
        </div>
        <div class="preview" ref={preview}>
          <div innerHTML={res.value}></div>
        </div>
      </div>
    );
  }
});

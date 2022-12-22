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
    const res = computed(() => {
      return marked(text.value);
    });


    return () => (
      <div class="markdown">
        <div class="editor">
          <textarea onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            text.value = target.value;
            if (preview.value) {
              preview.value.innerHTML = res.value;
            }
          }}></textarea>
        </div>
        <div class="preview" ref={preview}></div>
      </div>
    );
  }
});

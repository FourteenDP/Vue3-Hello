import { defineComponent, ref } from "vue";
import { marked } from 'marked';

export default defineComponent({
  name: "markdown",
  meta: {
    title: "markdown编辑器",
  },
  setup() {
    const text = ref("# Hello World");
    const preview = ref<HTMLElement>();
    console.log(preview);

    return () => (
      <div>
        <div class="markdown">
          <div class="markdown-editor">
            <textarea value={text.value} class="markdown-textarea" placeholder="请输入markdown文本"></textarea>
          </div>
          <div class="markdown-preview">
            <div ref={preview} class="markdown-preview-content"></div>
          </div>
        </div>
      </div>
    );
  },
});

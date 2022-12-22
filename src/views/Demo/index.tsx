import { defineComponent } from "vue";
import { marked } from 'marked';

export default defineComponent({
  name: "markdown",
  meta: {
    title: "markdown编辑器",
  },
  setup() {
    return () => (
      <div>
        <div class="markdown">
          <div class="markdown-editor">
            <textarea class="markdown-textarea" placeholder="请输入markdown文本"></textarea>
          </div>
          <div class="markdown-preview">
            <div class="markdown-preview-content"></div>
          </div>
        </div>
      </div>
    );
  },
});

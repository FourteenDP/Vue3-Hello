import { computed, defineComponent, ref } from "vue";
import { marked } from 'marked';
import { useDebounceFn } from "@vueuse/core";

import s from "./markdown.module.css";

export default defineComponent({
  name: "markdown",
  meta: {
    title: "markdown编辑器",
  },
  setup() {
    const editor = ref<HTMLTextAreaElement>();
    const preview = ref<HTMLElement>();

    console.log(editor, preview);



    return () => (
      <div class="markdown">
        <div class="editor">
          <textarea ref={editor} ></textarea>
        </div>
        <div class={s.preview} ref={preview}></div>
      </div >
    );
  }
});

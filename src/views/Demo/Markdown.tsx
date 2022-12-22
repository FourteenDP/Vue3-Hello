import { watch, defineComponent, ref, nextTick } from "vue";
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

    nextTick(() => {
      editor.value!.addEventListener("input", useDebounceFn((e) => {
        const target = e.target as HTMLTextAreaElement;
        preview.value!.innerHTML = marked(target.value);
      }, 500));
    });

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

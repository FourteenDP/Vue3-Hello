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
    const text = ref("# Hello World");
    const preview = ref<HTMLElement>();
    const res = computed(() => {
      return marked(text.value);
    });

    const update = useDebounceFn(() => {
      console.log(res.value);

      if (preview.value) {
        preview.value.innerHTML = res.value;
      }
    }, 1000);


    return () => (
      <div class="markdown">
        <div class="editor">
          <textarea value={text.value} onInput={
            ({ target }) => {
              text.value = (target as HTMLTextAreaElement).value;
              update();
            }
          } ></textarea>
        </div>
        <div class={s.preview} ref={preview}></div>
      </div >
    );
  }
});

import { ReactiveVariable } from "vue/macros"
// 解构
export function unlock<T>(reactiveVariable: ReactiveVariable<any>) {
  if (Array.isArray(reactiveVariable)) {
    return [...reactiveVariable]
  }
  if (typeof reactiveVariable === 'object') {
    return { ...reactiveVariable }
  }
};

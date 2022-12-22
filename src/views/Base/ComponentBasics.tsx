import { defineComponent, h, PropType, resolveComponent } from "vue";

const A = defineComponent({
  name: 'A',
  setup() {

    return () => <div>
      A
    </div >;
  },
});

const B = defineComponent({
  name: 'B',
  setup() {
    return () => <div>
      B
    </div >;
  },
});

export default defineComponent({
  name: 'ComponentBasics',
  meta: {
    title: '组件基础',
  },
  components: {
    A: A,
    B: B,
  },
  setup() {
    let count = $ref(0);
    let childCount = $ref(0);
    const tabs = $ref([
      { label: '动态组件A', name: "A", component: A },
      { label: '动态组件B', name: "B", component: B },
    ]);
    let currentTabIdx = $ref(0);
    return () => (
      <div class='flex'>
        <div class="mockup-phone">
          <div class="camera"></div>
          <div class="display">
            <div class="artboard artboard-demo phone-1">
              我是父组件
              <h2>我是子组件的数值:{childCount}</h2>
              <div class="text-center">
                <button class="btn btn-primary" onClick={() => count++}>点击我</button>
                <div class="mt-2">
                  <span>点击次数：</span>
                  <span>{count}</span>
                </div>
              </div>
              <div class="tabs">
                {
                  tabs.map((tab, index) => {
                    return <a class={["tab", {
                      "tab-active": index === currentTabIdx
                    }]} onClick={() => { currentTabIdx = index }}>{tab.label}</a>
                  })
                }
              </div>
              <div class="tab-content">
                {/* 动态组件JSX */}
                {
                  h(resolveComponent(tabs[currentTabIdx].name))
                }
              </div>
            </div>
          </div>
        </div>
        <ChildComponent msg={count} onUpdate={(val) => {
          childCount = val;
        }} />
        <ChildComponentSlot v-slots={{
          default: () => <div>我是插槽内容Default</div>,
          header: () => <div>我是插槽内容Header</div>,
          footer: () => <div>我是插槽内容Footer</div>,
        }} >
        </ChildComponentSlot>

      </div>
    );
  },
});
const ChildComponent = defineComponent({
  name: 'ChildComponent',
  props: {
    msg: {
      type: [String, Number] as PropType<string | number>,
      default: ''
    },
  },
  emits: ['update'],
  setup(props, { emit }) {
    let count = $ref(0);

    const updateMsg = (val: string | number) => {
      emit('update', val);
    };
    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是子组件
            <h2>我是父组件的数值:{props.msg}</h2>
            <div class="text-center">
              <button class="btn btn-primary" onClick={() => { count++; updateMsg(count) }}
              >点击我</button>
              <div class="mt-2">
                <span>点击次数：</span>
                <span>{count}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >;
  },
});

const ChildComponentSlot = defineComponent({
  name: 'ChildComponentSlot',
  emits: ['update'],
  setup(_, { slots }) {
    return () => <div>
      <div class="mockup-phone">
        <div class="camera"></div>
        <div class="display">
          <div class="artboard artboard-demo phone-1">
            我是插槽子组件
            <div>
              {slots.header && slots.header()}
              {slots.default && slots.default()}
              {slots.footer && slots.footer()}
            </div>
          </div>
        </div>
      </div>
    </div >;
  },
});

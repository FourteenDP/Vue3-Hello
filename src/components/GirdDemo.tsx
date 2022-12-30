import { defineComponent, PropType, watchEffect } from "vue";

import "./girdDemo.module.css";

interface CurrentSort {
  [key: string]: number;
}

export default defineComponent({
  name: "GirdDemo",
  props: {
    columns: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    data: {
      type: Array as PropType<any[]>,
      default: () => [],
    },
    filterKey: {
      type: String,
      default: "",
    }
  },
  setup(props) {
    let sortKey = $ref("");
    const sortOrders = $ref<CurrentSort>(props.columns.reduce((o: CurrentSort, key) => ((o[key] = 1), o), {}));

    watchEffect(() => {
      const order = sortOrders[sortKey];
      props.data.sort((a: any, b: any) => {
        a = a[sortKey];
        b = b[sortKey];
        return (a === b ? 0 : a > b ? 1 : -1) * order;
      });
    });

    const filteredData = $computed(() => {
      const filterKey = props.filterKey && props.filterKey.toLowerCase();
      const data = props.data;
      if (!filterKey) {
        return data;
      }
      return data.filter((row: any) => {
        return Object.keys(row).some((key) => {
          return String(row[key]).toLowerCase().indexOf(filterKey) > -1;
        });
      });
    });


    const sortBy = (key: string) => {
      sortKey = key;
      sortOrders[key] *= -1;
    }

    function capitalize(str: string) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    }
    return () => (<>
      <table>
        <thead>
          <tr>
            {props.columns.map((key) => (
              <th onClick={() => {
                sortBy(key);
              }} style={{
                color: sortKey === key ? "red" : "black",
              }}>
                {capitalize(key)}
                <span class="arrow"> {sortOrders[key] > 0 ? '↑' : '↓'} </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {filteredData && filteredData.map((entry) => (
            <tr>
              {props.columns.map((key) => (
                <td>{entry[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>);
  },
});

<script>
import { h } from "vue";

function sobreInfo(title) {
  const vnode = h(
    "h3",
    { id: "titleSobre", class: "border p-2 bg-warning text-white" },
    title
  );
  return vnode;
}

export default {
  data() {
    return {
      title: "Sobre nosso Ristorante",
    };
  },
  render() {
    return sobreInfo(this.title);
  },
};
</script>

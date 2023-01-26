<script>
import { h } from "vue";

function sobreInfo(title, urlImage, text) {
  const vnode = h("div", { class: "border p-2" }, [
    h("h3", { id: "titleSobre", class: "bg-warning text-white px-3" }, title),
    h("div", { class: "d-flex" }, [
      h(<img src={urlImage} class="w-50" />),
      h(<p class="destaque px-2">{text}</p>),
    ]),
  ]);
  return vnode;
}

export default {
  data() {
    return {
      title: "Sobre nosso Ristorante",
      urlImage: require("@/assets/chef.jpg"),
      text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus eaque laudantium inventore, aspernatur qui aliquam quo autem commodi illum quas, unde ducimus quae, totam sit? Illo nihil eos praesentium voluptate.",
    };
  },
  render() {
    return sobreInfo(this.title, this.urlImage, this.text);
  },
};
</script>

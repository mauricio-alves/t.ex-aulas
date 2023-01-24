export default {
  data() {
    return {
      m1: "Bora codar juntos!",
      m2: "Clica ai denovo! :)",
      count: 1,
      n: 4,
    };
  },
  methods: {
    multiplicar() {
      this.n = this.count * 4;
    },
  },
};

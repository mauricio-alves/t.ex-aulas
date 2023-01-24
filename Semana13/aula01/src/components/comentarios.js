export default {
  data() {
    return {
      // nome:'Roque Fernando M. Sousa',
      // mensagem:'Lorem Ipsum sit amet',
      inputNome: "",
      txtMensagem: "",
      comentarios: [
        // {
        //   nome: "Roque Fernando M. Sousa",
        //   mensagem: "Lorem Ipsum sit amet",
        // },
      ],
    };
  },

  methods: {
    adComentario() {
      // if (this.inputNome.trim() === "" || this.txtMensagem.trim() === "")
      if (this.txtMensagem.trim() === "") return;
      this.comentarios.push({
        nome: this.inputNome,
        mensagem: this.txtMensagem,
      });
      this.inputNome = "";
      this.txtMensagem = "";

      //console.log(this.comentarios[0].nome)
      //console.log(this.inputNome)
      //console.log(this.txtMensagem)
    },
    excluir(n) {
      this.comentarios.splice(n, 1);
    },
  },

  computed: {
    getComments() {
      return this.comentarios.map((currentComment) => {
        ...currentComment,
        nome: currentComment.nome.trim() === ""
          ? "Usuário não identificado"
          : currentComment.nome;
      });
    },
  },
};

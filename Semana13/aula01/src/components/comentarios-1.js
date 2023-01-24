export default{
    data(){
        return{
            // nome:'Roque Fernando M. Sousa',
            // mensagem:'Lorem Ipsum sit amet',
            inputNome:'',
            txtMensagem:'',
            comentarios:[]
            } 
        },
        methods:{
            adComentario(){
                // if(this.inputNome.trim() === '' || this.txtMensagem.trim() === '') return
                if(this.txtMensagem.trim() === '') return
                this.comentarios.push({
                    nome:this.inputNome,
                    mensagem:this.txtMensagem
                })
                this.inputNome=''
                this.txtMensagem=''
                //console.log(this.comentarios[0].nome)
                //console.log(this.inputNome)
                //console.log(this.txtMensagem)
            },
            excluir(n){
                //console.log(n)
                this.comentarios.splice(n,1)
            }
        },
        computed:{
            getComentarios(){
                return this.comentarios.map(coment =>({
                    ...coment,
                    nome:coment.nome.trim() === '' ?  'Usuário não identificado' : coment.nome
                }))
    }
  }

}
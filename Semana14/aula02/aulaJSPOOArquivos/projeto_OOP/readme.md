Produto.js

Métodos
[ x ] salvar : Armazena os valores da submissão do form no array produto
[ x ] lerProduto : recebe os dados da submissão do form
[ x ] validarCampos : verifica se os campos do form estão prenchidos

++++++++++++++++++++++++++++++

ListaProduto.js
[ x ] import Produto
[ x ] import AdmProduto
[ x ] extends Produto

Métodos
[ x ] criaListagem : imprime a lista de produtos, se Produtos.validacao == true
[ x ] listarItens : monta a lista de produtos parametrizando o array e o container html
[ x ] resetListagem: limpa os campos do form após a submissão

++++++++++++++++++++++++++++++

StorageProduto.js
[ x ] import ListaProduto
[ x ] extends ListaProduto

Métodos
[ x ] setStorage : armazena o array de produtos em localStorage e imprime em tela
[ x ] getStorage : faz a leitura do array de produtos e imprime em tela 

++++++++++++++++++++++++++++++

AdmProduto.js

Métodos
[ x ] removerProduto : remove um produto cadastrado (tanto em tela, como no array em localStorage)
[ x ] editarProduto : atualiza um produto cadastrado (tanto em tela, como no array em localStorage)

++++++++++++++++++++++++++++++

main.js
[ x ] import StorageProduto
[ x ] inicializa o click do fechar/alerta
[ x ] inicializa getStorage
[ x ] executa setStorage na submissão do form




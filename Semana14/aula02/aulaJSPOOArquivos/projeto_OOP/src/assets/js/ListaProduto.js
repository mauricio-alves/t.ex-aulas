//ListaProdutos.js
import { Produto } from './Produto.js'
import { AdmProduto } from './AdmProduto.js'

export class ListaProduto extends Produto {
    listagem = []
    form
    admProduto = new AdmProduto()

    constructor(form) {
        super()
        this.form = form
    }
    criaListagem(inputNumber, inputValor, box, alerta) {
        this.listagem.push(this.salvar(inputNumber, inputValor))

        this.validacao
            ? this.listarItens(this.listagem, box)
            : alerta.classList.remove('d-none')
        alerta.querySelector('p').innerText = 'Preencha os Campos!'
    }
    
    listarItens(lista, box) {
        let divItem
        lista.forEach((n, i) => {
          
            // console.log(n,i)
            divItem = document.createElement('div')
            divItem.setAttribute('class', 'boxListagem_item d-flex w-100')
            divItem.id = `box-${i}`
            for (const item in lista[i]) {
                let div = document.createElement('div')
                div.setAttribute('class', 'w-25 border px-3 py-2')
                div.innerText =
                item == 'valor' ? `R$ ${lista[i][item]},00` : lista[i][item]
                item == 'id' ? divItem.setAttribute('data-id',lista[i]['id']) : null
                divItem.appendChild(div)
                box.appendChild(divItem)
            }

            let divEdit = document.createElement('div')
            let btnIconEdit, btnIconRemove
            divEdit.setAttribute('class', 'w-25 border px-3 py-2')
            //Icones de edição e lixeira/////
            btnIconEdit = document.createElement('i')
            btnIconRemove = document.createElement('i')
            //Editar Produto////
            btnIconEdit.setAttribute(
                'class',
                'cursor fa-solid fa-pen-to-square'
            )
              btnIconEdit.onclick = (e) => {
                  this.admProduto.editarProduto(e.target,this.form)
              }
            //Remover Produto/////
            btnIconRemove.setAttribute(
                'class',
                'cursor fa-solid fa-trash-can mx-3'
            ) 
            btnIconRemove.onclick=(e) =>{ 
                this.admProduto.removerProduto(e.target)
            }
                      
            divEdit.append(btnIconEdit,btnIconRemove)
            divItem.appendChild(divEdit)
        })

        box.appendChild(divItem)
        this.resetListagem()
        
    }

    resetListagem() {
        let inputs = this.form.elements
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = ''
        }
    }
}


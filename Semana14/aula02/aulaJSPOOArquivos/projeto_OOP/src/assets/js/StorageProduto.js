//StorageProduto.js

import { ListaProduto } from './ListaProduto.js'

export class StorageProduto extends ListaProduto {
    boxListagem = document.getElementsByClassName('boxListagem_item')
    storage = []
    form
    constructor(form) {
        super()
        this.form = form
    }
    setStorage(inputNome, inputValor, box, div, alerta) {
        if (localStorage.getItem('cadastro')) {
            this.storage = JSON.parse(localStorage.getItem('cadastro'))
            this.storage.push(this.salvar(inputNome, inputValor))
        } else {
            this.storage.push(this.salvar(inputNome, inputValor))
        }
        // localStorage.setItem('cadastro', JSON.stringify(this.storage))

        //clear da lista anterior
        const divBox = document.getElementsByClassName(div)
        while (divBox.length > 0) {
            divBox[0].remove()
        }

        if (this.validacao) {
            localStorage.setItem('cadastro', JSON.stringify(this.storage))
            this.listarItens(this.storage, box)
        } else {
            alerta.classList.remove('d-none')
            alerta.querySelector('p').innerText = 'Preencha os Campos!'
        }

        // this.listarItens(this.storage, box)
    }
    getStorage(box) {
        localStorage.getItem('cadastro') === '[]'
            ? localStorage.removeItem('cadastro')
            : null
        if (localStorage.getItem('cadastro')) {
            this.listarItens(JSON.parse(localStorage.getItem('cadastro')), box)
        }
    }
}

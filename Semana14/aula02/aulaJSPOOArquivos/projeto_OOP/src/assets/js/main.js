// Main.js
import { StorageProduto } from './StorageProduto.js'

let storageProduto = new StorageProduto(document.querySelector('form'))

document.querySelector('.alerta i').addEventListener('click', () => {
    document.querySelector('.alerta').classList.add('d-none')
    storageProduto.getStorage(document.querySelector('.boxListagem__info'))
})

storageProduto.getStorage(document.querySelector('.boxListagem__info'))

document.querySelector('form').addEventListener('submit', (e) => {
    e.preventDefault()

    storageProduto.setStorage(
        document.querySelector('#produto').value,
        document.querySelector('#valor_produto').value,
        document.querySelector('.boxListagem__info'),
        'boxListagem_item',
        document.querySelector('.alerta')
    )
})

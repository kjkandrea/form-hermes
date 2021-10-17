import FormHermes from '../formHermes.js'

const form = document.getElementById('example-form')

const { state } = new FormHermes(form)

console.log(state)
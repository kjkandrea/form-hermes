import FormHermes from '../FormHermes.ts'

const form = document.getElementById('example-form')

const { state } = new FormHermes(form)

console.log(state)
import FormHermes from '../FormHermes.ts'

const form = document.querySelector('form')

const { state } = new FormHermes(form)

console.log(state)
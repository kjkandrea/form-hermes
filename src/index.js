import Hermes from './module/hermes.js'

const form = document.getElementById('example-form')

const state = new Hermes(form)

console.log(state.name)
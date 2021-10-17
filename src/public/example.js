import FormHermes from '../FormHermes.ts'

const form = document.querySelector('form')
const pre = document.querySelector('pre')

const renderState = state => pre.innerText = JSON.stringify(state)

const { state } = new FormHermes(form, renderState)
renderState(state)
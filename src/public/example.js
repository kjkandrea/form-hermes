import FormHermes from '../FormHermes.ts'

const form = document.querySelector('form')
const pre = document.querySelector('pre')

const { subscribed } = new FormHermes(form, () => console.log('hello'))
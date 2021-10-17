class Hermes {
  constructor (formElement) {
    const els = this.getFieldNodeList(formElement)
    this.state = this.getState(els)
  }

  getFieldNodeList(formElement) {
    const detectFieldNodeElementNames = ['input, select']

    return detectFieldNodeElementNames.reduce((nodeList, nodeName) =>
      nodeList.concat(...formElement.querySelectorAll(nodeName))
    , [])
  }

  getState(nodeList) {
    return nodeList.reduce((state, el) =>
      Object.assign(state,{[el.name]: el.value})
    , {})
  }
}

export default Hermes;
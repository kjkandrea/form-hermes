class Hermes {
  constructor (formElement) {
    const els = this.getFieldNodeList(formElement)
    console.log(els)
  }

  getFieldNodeList(formElement) {
    const detectFieldNodeElementNames = ['input, select']

    return detectFieldNodeElementNames.reduce((nodeList, nodeName) =>
      nodeList.concat(...formElement.querySelectorAll(nodeName))
    , [])
  }
}

export default Hermes;
import {ArrayLikedNodeList, DetectNodeList} from "./types/element";
import {State} from "./types/data";

class FormHermes {
  _state: State

  constructor (formElement: HTMLFormElement) {
    const els = this.getFieldNodeList(formElement)
    this._state = this.getState(els)
  }

  get state() {
    return this._state
  }

  getFieldNodeList(formElement: HTMLFormElement): ArrayLikedNodeList {
    const detectFieldNodeElementNames = ['input, select']

    return detectFieldNodeElementNames.reduce((nodeList: ArrayLikedNodeList, nodeName) => {
      const nodes = formElement.querySelectorAll(nodeName) as DetectNodeList;
      return nodeList.concat(...nodes)
    }, [])
  }

  getState(nodeList: ArrayLikedNodeList) {
    return nodeList.reduce((state: State, el) =>
      Object.assign(state,{[el.name]: el.value})
    , {})
  }
}

export default FormHermes;
import {ArrayLikedNodeList, DetectNodeList} from "./types/element";
import {State} from "./types/data";
import {Subscriber} from "./types/function";

class FormHermes {
	_subscribed: Subscriber[] = []
	_state: State

	constructor(formElement: HTMLFormElement, subscriber?: Subscriber) {
		const els = this.getFieldNodeList(formElement)
		this._state = this.getState(els)
		if (subscriber) this.subscribed(subscriber)
	}

	public subscribed (subscriber: Subscriber) {
		this._subscribed.push(subscriber)
	}

	private publish () {
		this._subscribed.forEach(subscriber => subscriber(this.state))
	}

	get state() {
		return this._state
	}

	private getFieldNodeList(formElement: HTMLFormElement): ArrayLikedNodeList {
		const detectFieldNodeElementNames = ['input, select']

		return detectFieldNodeElementNames.reduce((nodeList: ArrayLikedNodeList, nodeName) => {
			const nodes = formElement.querySelectorAll(nodeName) as DetectNodeList;
			return nodeList.concat(...nodes)
		}, [])
	}

	private getState(nodeList: ArrayLikedNodeList) {
		return nodeList.reduce((state: State, el) =>
				Object.assign(state, {[el.name]: el.value})
			, {})
	}
}

export default FormHermes;
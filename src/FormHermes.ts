import {ArrayLikedNodeList, DetectNodeList} from "./types/element";
import {State} from "./types/data";
import {Subscriber} from "./types/function";
import changeDetector from "./module/changeDetector";

class FormHermes {
	_subscribed: Subscriber[] = []
	_state: State

	constructor(formElement: HTMLFormElement, subscriber?: Subscriber) {
		const els = this.getFieldNodeList(formElement)
		this._state = this.getState(els)
		this.bindChangeEvent(els)
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

	setState(key: string, value: string) {
		this._state[key] = value
		this.publish()
	}

	private getFieldNodeList(formElement: HTMLFormElement): ArrayLikedNodeList {
		const detectFieldNodeElementNames = ['input', 'select', 'textarea']

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

	private bindChangeEvent(nodeList: ArrayLikedNodeList) {
		nodeList.forEach(element => changeDetector(element, this.setState.bind(this)))
	}
}

export default FormHermes;
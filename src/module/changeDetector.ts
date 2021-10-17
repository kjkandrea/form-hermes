import {DetectNode} from "../types/element";
import {SetState} from "../types/function";

const changeDetector = (element: DetectNode, listener: SetState) => {
	element.addEventListener('input', evt => emitValue(evt, listener))
}

function emitValue (evt: Event, listener: SetState) {
	const { name, value } = evt.target as DetectNode
	listener(name, value)
}

export default changeDetector;
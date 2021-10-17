import {State} from "./data";

export type Subscriber = (state: State) => any

export type SetState = (key: string, value: string) => void
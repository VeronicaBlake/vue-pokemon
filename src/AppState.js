import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Pokemon from './models/Poke'

export const AppState = reactive({
    /** @type {Pokemon[]} */
    results: [],
    /** @type {Pokemon} */
    activePoke: null
})
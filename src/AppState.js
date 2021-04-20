
import { reactive } from 'vue'
// eslint-disable-next-line no-unused-vars
import Pokemon from './models/Pokemon'

export const AppState = reactive({
    /** @type {Pokemon[]} */
    results: [],
    /** @type {Pokemon} */
    activeMovie: null
})
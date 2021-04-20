import { AppState } from '../AppState'
import Poke from '../models/Poke'
import { pokeApi } from './AxiosService'

class PokeService {
    async getPoke(query) {
        const res = await pokeApi.get(query)
        AppState.results = res.data.results.map(r => new Poke(r))
    }

    setActive(poke) {
        AppState.activePoke = poke
    }
}

export const pokeService = new PokeService()
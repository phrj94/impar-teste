import api from '../index';

export const getPokemons = async (limit, offset) => {
    try {
       const result = await (await api.get(`pokemon/?limit=${limit}&offset=${offset}`)).data;
       return result;
    } catch (error) {
        console.error("Error to get pokemons. See the error: ", error)
    }
}

export const getPokemonInfo = async (name) => {
    try {
        const result = await (await api.get(`pokemon/${name}/`)).data;
        return result;
    } catch (error) {
        console.error("Error to get pokemon infos. See the error: ", error)
    }
}

export const getAbility = async (name) => {
    try {
        const result = await (await api.get(`ability/${name}/`)).data;
        return result;
    } catch (error) {
        console.error("Error to get ability. See the error: ", error)
    }
}


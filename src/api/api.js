export default {
    getFilms() {
        return fetch('https://swapi.dev/api/films/').then((res) => res.json()).then((res) => {
            return res.results
        })
    },
    getFilm(id) {
        return fetch(`https://swapi.dev/api/films/${id}/`).then((res) => res.json()).then((res) => {
            return res
        })
    },
    getUsers() {
        return fetch('https://swapi.dev/api/people/').then((res) => res.json()).then((res) => {
            return res.results
        })
    },
    getUser(id) {
        return fetch(`https://swapi.dev/api/people/${id}/`).then((res) => res.json()).then((res) => {
            return res
        })
    },
}
const api = (config, objeto) => {
    return new Promise((resolver) => {
        const BASE_URL = 'https://aula-crud.herokuapp.com'
        const { url } = config

        fetch(`${BASE_URL}${url}`, objeto)
            .then(response => response.json())
            .then(data => {
                return resolver(data)
            })
    })

}

export default api
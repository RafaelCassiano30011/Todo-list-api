import api from "../../api/index.js"

const all = {
    data: [],
    create: async(task) => {
        const taskList = await api({ url: '/create', }, {
            method: 'POST',
            body: JSON.stringify(task),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        }, )
        return taskList
    },
    read: async() => {
        const taskList = await api({ url: '/list' })

        return taskList
    },

    delete: async(id) => {
        const taskList = await api({ url: `/delete/${id}` }, {
            method: 'DELETE'
        })
        return taskList
    },
    update: async(id, data) => {
        const taskList = await api({ url: `/update/${id}` }, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
        })
        return taskList
    },
    toggleTask: async(id) => {
        const taskList = await api({ url: `/toggleTask/${id}` }, {
            method: 'PUT'
        })
    },
}

export default all
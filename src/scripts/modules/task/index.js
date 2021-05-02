import all from "../../dados/index.js"
import Element from "../element/index.js"
import PrintTaskList from "../printTaskList/index.js"

const Task = {
    build: (task) => {
        const trash = Element({
            type: 'img',
            src: '../imagem/lixeira.png',
            class: ['delete-trash'],
        })
        const taskSpan = Element({
            type: 'span',
            text: task.name,
            class: ['span-checkbox', task.done ? 'span-checkbox-on' : 'span-checkbox-off']

        })
        const inputUpdate = Element({
            type: 'input',
            class: ['hide']
        })
        const _checkbox = Element({
            type: 'div',
            class: ['checkbox', task.done ? 'checked' : 'checkebox-no'],
        })
        const _taskWrapper = Element({
            type: 'div',
            class: ['task-wrapper', ],
            sons: [_checkbox, taskSpan, inputUpdate, trash]
        })
        trash.addEventListener('click', async() => {
            const taskList = await all.delete(task._id)
            console.log(taskList)
            PrintTaskList({
                taskList: taskList,
                parent: '.box-task',
            })
        })
        _checkbox.addEventListener('click', async() => {
            const taskList = await all.toggleTask(task._id, )
            console.log(taskList)
            PrintTaskList({
                taskList: taskList,
                parent: '.box-task',
            })
        })
        taskSpan.addEventListener('click', () => {
            inputUpdate.value = taskSpan.textContent
            taskSpan.classList.toggle('hide')
            _checkbox.classList.toggle('hide')
            trash.classList.toggle('hide')
            inputUpdate.classList.toggle('hide')
            inputUpdate.focus()
        })
        inputUpdate.addEventListener('blur', async() => {
            taskSpan.classList.toggle('hide')
            _checkbox.classList.toggle('hide')
            trash.classList.toggle('hide')
            inputUpdate.classList.toggle('hide')

            const taskList = await all.update(task._id, { name: inputUpdate.value })
            console.log(taskList)
            PrintTaskList({
                taskList: taskList,
                parent: '.box-task',
            })
        })
        return _taskWrapper
    }
}

export default Task
import all from './dados/index.js'

import PrintTaskList from './modules/printTaskList/index.js'

const $formBox = document.querySelector('.form-box')
const $buttonNewTask = document.querySelector('.button-new-task')
const $inputCreate = document.querySelector('.input-create')

$formBox.addEventListener('submit', async(event) => {
    event.preventDefault()
    if ($inputCreate.classList == 'input-create') {
        $buttonNewTask.textContent = 'Adiconar-Tarefa'

        $inputCreate.classList.toggle('input-create')
        $inputCreate.value = ''

    } else if ($inputCreate.classList == !'input-create') {
        $buttonNewTask.textContent = '+  Nova tarefa'

        $inputCreate.classList.toggle('input-create')
        if ($inputCreate.value == '') return

        const taskList = await all.create({ name: $inputCreate.value })
        console.log(taskList)
        PrintTaskList({
            taskList: taskList,
            parent: '.box-task',
        })
    }
})

const printReadApi = async() => {
    const taskList = await all.read()

    PrintTaskList({
        taskList: taskList,
        parent: '.box-task',
    })
}
printReadApi()
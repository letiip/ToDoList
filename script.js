//declaramos variables
const dateNumber = document.getElementById('dateNumber');
const dateText = document.getElementById('dateText');
const dateMonth = document.getElementById('dateMonth');
const dateYear = document.getElementById('dateYear');
//contenedor donde estaran las tareas
const tasksContainer = document.getElementById('taskContainer')

const setDate = () => {
    const date = new Date();
    dateNumber.textContent = date.toLocaleString('es', { day: 'numeric' });
    dateText.textContent = date.toLocaleString('es', { weekday: 'long' });
    dateMonth.textContent = date.toLocaleString('es', { month: 'short' });
    dateYear.textContent = date.toLocaleString('es', { year: 'numeric' });
};

const addNewTask = event => {
    event.preventDefault();
    //tomamos el input
    const { value } = event.target.tastText;
    //si no hay valor no hacer nada (se corta con return)
    if (!value) return;
    //creamos un div llamado task
    const task = document.createElement('div');
    //agregamos clases de css
    task.classList.add('task', 'roundBorder');
    //al dar click cambia estado 
    task.addEventListener('click', changeTaskState)
        //ingresamos en task el valor que ingreso el usuario
    task.textContent = value;
    //prepend agrega al inicio de la lista
    tasksContainer.prepend(task);
    //limpiamos el input
    event.target.reset();
};

const changeTaskState = event => {
    //Si no tiene la clase done se la agregamos y si no la sacamos
    event.target.classList.toggle('done');
};

const order = () => {
    //creamos array para los que ya hicimos
    const done = [];
    //cremamos array para los que faltan por hacer
    const toDo = [];
    //Pasamos por cada tarea y los que no esten marcados con done los guarda en un arrat
    //itera todos los elementos, el=elemento (puede ser cualquiera)
    tasksContainer.childNodes.forEach(el => {
            //si no tiene clase done, lo agregamos a la clase toDo (push agrga elemento al final del array)
            el.classList.contains('done') ? done.push(el) : toDo.push(el)
        })
        //para que primero se muestren las que faltan por hacer
    return [...toDo, ...done];
}

const renderOrderedTasks = () => {
        //nos devuelve el array y cada elemento lo agregamos al contenedor uno por uno
        order().forEach(el => tasksContainer.appendChild(el))
    }
    //se ejecuta siempre al iniciar
setDate();
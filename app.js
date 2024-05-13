window.addEventListener('load', ()=> {
    //referenciamos a los elementos del DOM
    const formCrear = document.getElementById('form-crear')
    const listaTareas = document.getElementById('lista-tareas')
    const inputCrear = document.getElementById('crear')
    const inputBuscar = document.getElementById('buscar')
    /* Procedimiento para el ALTA */
    formCrear.addEventListener('submit', (e)=>{
        e.preventDefault()
        capturarValor()        
    })
    const capturarValor = ()=> {
        const tareaNombre = inputCrear.value.trim();
        (tareaNombre.length) ? mostrarTareaHtml(tareaNombre) : alert('Debe ingresar una tarea')         
    }
    const mostrarTareaHtml = (tarea)=> {
        const liHtml = `<li><strong>${tarea}</strong><i class="fas fa-minus-circle borrar"></i></li>`
        listaTareas.innerHTML += liHtml
    }
    /* Procedimiento para el BUSCAR */
    inputBuscar.addEventListener('keyup', ()=>{
        const caracter = inputBuscar.value.trim()
        busqueda(caracter)
    })
    const busqueda = (cadena)=>{
        //console.log(listaTareas.children)
        let arreglo = Array.from(listaTareas.children)
        //console.log(arreglo)
        arreglo
            .filter(texto => !texto.textContent.toLowerCase().includes(cadena))                   
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.add('textFiltrado')
            })
        arreglo
            .filter(texto => texto.textContent.toLowerCase().includes(cadena))                   
            .forEach(cadenaFiltrada => {
                cadenaFiltrada.classList.remove('textFiltrado')
            })
    }
    /* Procedimiento para BORRAR */
    listaTareas.addEventListener('click', (e)=> {
        //console.log(e.target.classList)
        //console.log(e.target.parentElement)
        if(e.target.classList.contains('borrar')){
            e.target.parentElement.remove()
        }
        inputBuscar.value = ''
    })
})
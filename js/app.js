 function iniciarApp() {

    const selectCategorias = document.querySelector('#categorias');
    selectCategorias.addEventListener('change', seleccionarCategoria)

    obtenerCategorias();

    function obtenerCategorias() {
        const url = "https://www.themealdb.com/api/json/v1/1/categories.php"
        fetch(url)
            .then(respuesta =>  respuesta.json())
            .then( resultado => mostrarCategorias(resultado.categories))
    }

    function mostrarCategorias(categorias = []) {
        categorias.forEach( categoria => {

            const { strCategory } = categoria;
            const option = document.createElement('OPTION');
            option.value = strCategory
            option.textContent = categoria.strCategory
            //insertar en el HTML
            selectCategorias.appendChild(option);
        })
    }

    function seleccionarCategoria(e) {
        const categoria = e.target.value;
        const url = `https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoria}`
        fetch(url)
            .then( respuesta => respuesta.json())
            .then( resultado => mostrarReacetas(resultado.meals))
    }

    function mostrarReacetas(recetas = [] ) {
        console.log(recetas);
    }
 }

 document.addEventListener('DOMContentLoaded', iniciarApp);
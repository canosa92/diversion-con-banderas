const lista =document.getElementById('countries-list')


const banderas = async()=>{
    try { 
        const respuesta = await fetch('https://restcountries.com/v3/all')
        if(!respuesta.ok){
        throw new  Error('Ha surguido un error', respuesta.status)
        }
        const paises = await respuesta.json()
        paises.sort ((a, b) => a.name.common.localeCompare(b.name.common))
        

        paises.forEach(pais => {
            let nombrePais= pais.name.common;
            let banderaPais = pais.flags[0]
            let coche = pais.car.side
            let poblacion = pais.population
            let capital = pais.capital


            let html = `
            <div class='contenedor-Paises'>
                <img src='${banderaPais}' alt='${nombrePais}'/>
                <h3 class='pais'>${nombrePais}</h3>
                <div class='info'>
                    <img src='${banderaPais}' alt='${nombrePais}'/>
                    <p><span>Capital:</span>${capital} </p>
                    <p><span>Población:</span> ${poblacion} </p>
                    <p><span>Coches:</span>${coche} </p>
                    </div>
                </div>`
            let divPaises = document.createElement('div') 
        
            divPaises.innerHTML +=html
            lista.appendChild(divPaises)
        })

             const overlay = document.querySelector('.info')
             let contenedorPaises = document.querySelectorAll('contenedor-Paises')

            contenedorPaises.addEventListener('click',()=>{
      
                overlay.classList.add('show-info')
            })
           contenedorPaises.addEventListener('mouseleave',()=>{
                overlay.classList.remove('show-info')
            })

                return pais
             
    }  catch (error) {
        console.log('error al obtener los datos', );
        }}
  
        banderas();


 

          
    


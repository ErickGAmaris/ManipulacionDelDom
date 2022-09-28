const seccionImagenes = document.querySelector('section.imagenes')

const btn = document.querySelector('button')

btn.addEventListener('click', traerPersonas)

function traerPersonas(){
    window.fetch('https://randomuser.me/api/?results=1')
        .then( consulta =>consulta.json() )
        .then( respuesta => {
            
        const  personas = respuesta.results
        let todasLasImagenes = []

        for ( persona of personas ){
                const figura = document.createElement('figure')
                const imagen = document.createElement('img')
                imagen.src = persona.picture.large
                figura.append( imagen )

                todasLasImagenes.push( figura )
        }
        seccionImagenes.append( ...todasLasImagenes )     
        })
}



/** Validacion a manu para form de email */

// obtener id
const $form = $('#suscribeForm') 

// obtener clases 
const $formGroup = $form.find('.form-group') 
const $formControl = $formGroup.find('.form-control')


$form.submit( (ev) => {

  // evitar que se refresque la pagina
  ev.preventDefault()
  
  const error = Math.random() > 0.5
  $formGroup.removeClass().addClass('form-group')
  $formControl.removeClass().addClass('form-control')
  $formGroup.addClass(error ? 'has-danger' : 'has-success')
  $formControl.addClass(error ? 'form-control-danger' : 'form-control-success')
  $formGroup.find('.form-control-feedback').remove()
  
  var el;
  if (error) {
    el = $('<div>', { html: 'Ha ocurrido un error' })
  } else {
    el = $('<div>', { html: 'Te enviaremos todas las novedades!' })
  }
  el.addClass('form-control-feedback')
  $formGroup.append(el)

})


/** funcionalidad de modal, mostrar cuando es la prima vez, despues guardaren localstorage  para no mostrar*/
function mostrarModal(){

  const noMostrarModal = JSON.parse( localStorage.getItem("noMostrarModal") )
  if( !noMostrarModal ){

    // bootstrap dice, mandar mensaje en modal
    $('#modalOferta').modal() 
  }

  
  // sino lo quiere no volver a mostrarlo
  $('#btnNoRegistrar').click( (event)=>{

    localStorage.setItem("noMostrarModal", true);

    // JSON.parse( localStorage.noMostrarModal )   boleano 
  })

}






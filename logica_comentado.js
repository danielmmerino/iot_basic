
// recuerda que jquery es una herramienta para ocupar javascript más sencillo
jQuery(function ($) {

// las variables tiempo y tiempo2 van a ser el tiempo que se ejecutan la apertura de las cortinas, este tiempo ha sido puesto por experimentación
  var tiempo = 6000;
  var tiempo2 = 18000;

  // las primeras funciones son para ocultar y mostrar el menu más no como logica
  // para darle forma a la pagina
$(".sidebar-dropdown > a").click(function() {
$(".sidebar-submenu").slideUp(200);


/**
 * sobre todo esta parte es un poco dificil de comprender, y explicar de linea por linea,
 * pero básicamente, para que el menú lateral pueda aparecer y desaparecer, lo que se hace
 * es, en un estilo de una clase se hace que todos los elementos sean visibles, y en otra clase que 
 * todos los elementos sean invisibles u ocultos, entonces cuando doy click en el botón o ícono
 * lo que hago es que con js le digo que de la clase donde todo era visible, pase ese div a ser 
 * una clase donde sus elementos se vuelven ocultos, entonces a la vista del usuario es como que se
 * oculta el menú, pero lo que pasa por debajo es que pasó ese div de tener un nombre de clase, a tener
 * otro nombre de clase.
 * */
if (
  $(this)
    .parent()
    .hasClass("active")
) {
  $(".sidebar-dropdown").removeClass("active");
  $(this)
    .parent()
    .removeClass("active");
} else {
  $(".sidebar-dropdown").removeClass("active");
  $(this)
    .next(".sidebar-submenu")
    .slideDown(200);
  $(this)
    .parent()
    .addClass("active");
}
});

$("#close-sidebar").click(function() {
$(".page-wrapper").removeClass("toggled");
});
$("#show-sidebar").click(function() {
$(".page-wrapper").addClass("toggled");
});


// Desde aqui empieza la lógica de la aplicación

// Cuando de click en este #switch voy a ejecutar esta api (url)
$("#switch").click(function() {
  $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=1", function(data, status){
            
          });

  });
// cuando damos click en el elemento con id "switch2" se va a consultar esta url(api)
$("#switch2").click(function() {
  $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=2", function(data, status){
           
          });

  });

  // Cuando de click en este #btnCortina1 voy a ejecutar esta api (url)

  $("#btnCortina1").click(function() {
    
    $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=3", function(data, status){
        // Cuando haya dado click, desahibilito el boto, cambio de color, cambio de texto
            $("#btnCortina1").attr('disabled', 'disabled');
            document.getElementById('btnCortina1').style.background='#989898';
            document.getElementById('cortina1Label').innerHTML='Activando...';   
            
          });

// paa el botón de la cortina 1 será la variable "tiempo"
          setTimeout(sample, tiempo);

          

  });

  function sample() {
    
    $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=3", function(data, status){
            // los console.log es solo para imprimir el resultado de la consulta
            console.log(data);
            $("#btnCortina1").attr('disabled', false);
            // dependiendo lo que nos respondió el api, le hago que se cambie el texto que dice abrir a cerrar o viceversa y que se bloquee el botón
            document.getElementById('btnCortina1').style.background='#4CAF50';
            if(data=='3' || data=='1'){
              document.getElementById('cortina1Label').innerHTML='Abrir';          
            }
            if(data=='0' || data=='2'){
              document.getElementById('cortina1Label').innerHTML='Cerrar';          
            }

  });
}


// es lo mismo que la función de la cortina 1, solo que ejecutando el api con el dispositivo 4
$("#btnCortina2").click(function() {
    
  $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=4", function(data, status){
          // dependiendo lo que nos respondió el api, le hago que se cambie el texto que dice abrir a cerrar o viceversa y que se bloquee el botón
          $("#btnCortina2").attr('disabled', 'disabled');
          document.getElementById('btnCortina2').style.background='#989898';
          document.getElementById('cortina2Label').innerHTML='Activando...';   
          
        });

// paa el botón de la cortina 2 será la variable "tiempo2"
        setTimeout(sample1, tiempo2);

        

});

function sample1() {
  
  $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=4", function(data, status){
    
          console.log(data);
          $("#btnCortina2").attr('disabled', false);
          document.getElementById('btnCortina2').style.background='#4CAF50';
          if(data=='3' || data=='1'){
            document.getElementById('cortina2Label').innerHTML='Abrir';          
          }
          if(data=='0' || data=='2'){
            document.getElementById('cortina2Label').innerHTML='Cerrar';          
          }

});
}
  
    
  
    
 
 
});
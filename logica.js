jQuery(function ($) {


  var tiempo = 18000;


  // las primeras funciones son para ocultar y mostrar el menu más no como logica
  // para darle forma a la pagina
  $(".sidebar-dropdown > a").click(function() {
$(".sidebar-submenu").slideUp(200);
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
            // alert("Data: " + data + "\nStatus: " + status);
          });

  });
$("#switch2").click(function() {
  $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=2", function(data, status){
            // alert("Data: " + data + "\nStatus: " + status);
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


          setTimeout(sample, tiempo);

          

  });

  function sample() {
    
    $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=3", function(data, status){
      
            console.log(data);
            $("#btnCortina1").attr('disabled', false);
            document.getElementById('btnCortina1').style.background='#4CAF50';
            if(data=='3' || data=='1'){
              document.getElementById('cortina1Label').innerHTML='Abrir';          
            }
            if(data=='0' || data=='2'){
              document.getElementById('cortina1Label').innerHTML='Cerrar';          
            }

  });
}



$("#btnCortina2").click(function() {
    
  $.get("http://192.168.100.26/api_tesis/api/cambiarEstado/cambiarEstado.php?id=4", function(data, status){

          $("#btnCortina2").attr('disabled', 'disabled');
          document.getElementById('btnCortina2').style.background='#989898';
          document.getElementById('cortina2Label').innerHTML='Activando...';   
          
        });


        setTimeout(sample1, tiempo);

        

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
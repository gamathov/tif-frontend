document.addEventListener('DOMContentLoaded', function() {
    // Defino las constantes de la opción seleccionada
    function definirCategoria() {
      const categoria = parseInt(getValueById('categoria')); // Convierte la categoría a número entero
      return categoria;
    }

    //Defino la cantidad de entradas
        
    function definirCantidad(){
        const cantidadInput = document.getElementById('cantidad');
        const cantidad= cantidadInput.value;
        return cantidad;
    }

    //obtengo el precio de la entrada general desde el h2 donde está ingresado

    const valorElement = document.getElementById('valor');

    // Obtener el valor numérico del atributo "value" del h2 id="valor"
    const valor = parseFloat(valorElement.getAttribute('value'));
    console.log(valor);

    // Calculo el precio promocional por cada categoría por su porcentaje de descuento

    function calculoPrecio(categoria, valor) {
      let precio = 0;
      if (categoria === 1) {
        precio = valor * 0.2;
      } else if (categoria === 2) {
        precio = valor * 0.5;
      } else if (categoria === 3) {
        precio = valor * 0.85;
      }
      return precio;
    }
  
    // Calculo el valor de las entradas
    function calculadora(precio, cantidad) {
      return precio * cantidad;
    }
    function getValueById(id) {
        return parseFloat(document.getElementById(id).value);
      }
  
    function actualizarContenido(valorEntradas) {
      const totalPagar = "Total a pagar $: " + parseInt(valorEntradas);
      document.getElementById('valorTotal').textContent = totalPagar;
    }
    //Para los cambios de cantidades
    document.getElementById('cantidad').addEventListener('input',function() {
   
    // Obtengo la cantidad
    
   const cantidad = definirCantidad();
   console.log(cantidad);
   
     // Obtengo la categoría seleccionada
   const categoria = definirCategoria();
   console.log(categoria);

     // Obtiene el precio para la categoría seleccionada
   const precio = calculoPrecio(categoria, valor);
   console.log(precio);

   // Calcula el valor total
   const valorEntradas = calculadora(precio, cantidad);
   console.log(valorEntradas);

   // Actualiza el contenido del botón "valorTotal"
   actualizarContenido(valorEntradas);
    });
  
    //para calcular el cambio de categoría
    document.getElementById('categoria').addEventListener('change', function () {
        
        // Obtengo la cantidad
    
      const cantidad = definirCantidad();
      console.log(cantidad);
      
        // Obtengo la categoría seleccionada
      const categoria = definirCategoria();
      console.log(categoria);
  
        // Obtiene el precio para la categoría seleccionada
      const precio = calculoPrecio(categoria, valor);
      console.log(precio);
  
      // Calcula el valor total
      const valorEntradas = calculadora(precio, cantidad);
      console.log(valorEntradas);
  
      // Actualiza el contenido del botón "valorTotal"
      actualizarContenido(valorEntradas);
    });
  });
  
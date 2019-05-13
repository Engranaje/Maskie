# Maskie
Maskie es una máscara de teléfono para HTML desarrollada con JQuery.

Hasta el momento la máscara solo soporta teléfonos de:
* Estados Unidos
* México
* República Dominicana

Estaremos agregando más ciudades en el futuro. Si quieres que tu ciudad esté disponible ahora, tan solo déjanos un mensaje a contacto@engranaje.me.

## Instrucciones
Para incluir Maskie a tu proyecto tan solo tienes que incluir el archivo **Maskie.js** que se encuentra dentro de la carpeta **dist**, e incluir el archivo **mask.html** en tu formulario de HTML, o tan solo copiar su contenido en tu formulario.
Es importante que utilices el contenido de la máscara tan cual, porque el código solo funcionará con sus propiedades como están.

Agregamos la máscara dentro de un div con la clase `d-flex`, así que, si quieres que el select y el input estén juntos, tan solo aplica el estilo `display: flex` al div.

Este proyecto funciona con JQuery, por lo que tienes que incluirlo primero.

Para configurar la máscara necesitas:
1. Cambiar el valor del atributo **data-country** del input de tipo "phone" al código ISO de tres dígitos de tu ciudad.
2. Agregar los valores requeridos de los atributos **name** y **id** a los inputs y selects si quieres obtener por separado los valores del teléfono o aplicar estilos personalizados.
3. Agregar cualquier otro atributo requerido, como **required**, si se desea.
4. Obtener el valor del input oculto **planephone**, debido a que ese es el input con el valor completo del teléfono sin los caracteres especiales. O simpletemente concatenar los valores del select y el input si se desea el teléfono con los demás caracteres.

# Autores
* **El equipo de Engranaje**
  * [Harold Abreu](https://github.com/Harverbo)
  * [Renelis Abreu](https://github.com/renelis)
  * [Lleurys De León](https://github.com/lleurys21)

## Licencia
Este proyecto ha sido desarrollado bajo la licencia MIT - lee el archivo [LICENSE.txt](LICENSE.txt) para más detalles.

## Donación
Si crees que esto es útil y quieres ayudarnos a desarrollar más herramientas, ayúdanos a mantenernos despiertos comprándonos una taza de té :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QSWLDMN5EATE6)

# Maskie
Maskie es una máscara de teléfono para HTML desarrollada con Vanilla JavaScript.

Puedes ver capturas de pantalla en la carpeta [screenshots](screenshots).

Hasta el momento, el modo de etiquetas «select» de la máscara solo soporta teléfonos de:
* Estados Unidos
* México
* República Dominicana

Estaremos agregando más ciudades en el futuro. Si quieres que tu ciudad esté disponible ahora, tan solo déjanos un mensaje a contacto@engranaje.me.

## Instrucciones
Para incluir Maskie a tu proyecto tan solo tienes que incluir antes de tus scripts personalizados el archivo **Maskie.js** que se encuentra dentro de la carpeta **dist**, luego inicializar Maskie en tus scripts.

Para inicializar con los valores por defectos tan solo hay que llamar la función `Maskie();`.

Las distintas opciones que se le pueden pasar a la función son:
1. `selector` Que permite especificar la clase de los inputs que serán cambiados por las etiquetas de Maskie. El valor por defecto es *maskie-phone*.
2. `codeType` Que permite especificar el tipo de etiqueta para el código del teléfono. Los posibles valores son `input` o `select`; el valor por defecto es *select*.
3. `country` Que permite especificar las opciones del menú de códigos de teléfono en caso de que sea de tipo *select*. El valor debe de ser el código de tres dígitos del país. El valor por defecto es *USA*.

Ejemplo de configuración:
```
Maskie({
    selector: clase-de-input,
    codeType: 'select',
    country: 'DOM'
});
```

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

# Maskie
**Para leer el Readme es español [haz clic aquí](Readme_es.md)**

Maskie is a Vanilla JavaScript phone input mask for HTML.

You can se screenshot inside the [screenshots](screenshots) folder.

At the moment the mask only support phones from:
* United States
* México
* Dominican Republic

We'll be adding more countries in the future. If you want your country to be available now, just let us a message at contacto@engranaje.me.

## Getting started
To include Maskie in your project, you only need to include the **Maskie.min.js** field inside **dist** folder before your personal scripts, then initialize it.

To initialize Maskie with default values, you just need to call the function Maskie();`.

The options you can provide to the function are:
1. `selector` Which allows you to specify the class of the inputs that will be changed by the Maskie tags. The default value is *maskie-phone*.
2. `codeType` Which allows you to specify the type of label for the phone code. Possible values are `input` or `select`; the default value is *select*.
3. `country` Which allows you to specify the phone code menu options if it is of type *select*. The value must be the three-digit country code. The default value is *USA*.

Configuration example:
```
Maskie({
    selector: input-class,
    codeType: 'select',
    country: 'MEX'
});
```

# Authors
* **Engranaje's team**
  * [Harold Abreu](https://github.com/Harverbo)
  * [Renelis Abreu](https://github.com/renelis)
  * [Lleurys De León](https://github.com/lleurys21)

## License
This project is licensed under the MIT License - see the [LICENSE.txt](LICENSE.txt) file for details

## Donation
If you think this is useful and you want to help us develop more widgets, help us stay awake by buying us a cup of tea :)

[![paypal](https://www.paypalobjects.com/en_US/i/btn/btn_donate_SM.gif)](https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=QSWLDMN5EATE6)

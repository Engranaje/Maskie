# Maskie
**For the Spanish Readme [click here](Readme_es.md)**

Maskie is a JQuery phone input mask for HTML.

At the moment the mask only support phones from:
* United States
* México
* Dominican Republic

We'll be adding more countries in the future. If you want your country to be available now, just let us a message at contacto@engranaje.me.

## Getting started
To include Maskie into your project you just need to include the **Maskie.js** file inside **dist** folder, and include the **mask.html** file into your form, or just copy the **mask.html** content into your form.
It's important to use the content inside the mask as it is, because the code will only work with it's properties.

We added the mask inside a div with class `d-flex`, so if you want both select and input to be together, just apply a `display: flex` style.

This project works wih JQuery, so your need to include it first.

To configure the mask you just need:
1. Change the input type phone's **data-country** value to your country three digit's ISO code.
2. Add the required **name** and **id** attributes to the inputs and select if you want to retrieve the data separately or to apply styles.
3. Add any other wanted propertied, like **required**, if wanted.
4. Catch the value of the hidden input named **planephone**, because that's the input with the full phone without special characters. Or just concatenate Both values of the select and the phone input.

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

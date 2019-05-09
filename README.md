# Maskie
A JQuery phone input mask for HTML

## Getting started
To include Maskie into your project you just need to include the **Maskie.js** file inside **src** folder, and include the **mask.html** file into your form, or just copy the **mask.html** content into your form.
It's important to use the content inside the mask as it is, because the code will only work with it's properties.

This project works wih JQuery, so your need to include it first.

To configure the mask you just need:
1. Change the input type phone's **data-country** value to your country three digit's ISO code.
2. Catch the value of the hidden input named **planephone**, because that's the input with the full phone without special characters. Or just concatenate Both values of the select and the phone input.

# Authors
* **Engranaje's team**

## License
This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.txt) file for details

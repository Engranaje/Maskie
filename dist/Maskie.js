
/** Create function to initialize Maskie */
window.Maskie = (options = {}) => {
    /*
    | Available options
    | =================
    | selector: <class of input to be replaced> => Default = maskie-phone
    | codeType: <type of code tag (input|select)> => Default = select
    | country: <three digits' country code> (In case codeType is select) => Default = USA
    */

    // Select input's which will be replaced by maskie phone inputs
    globalSelector = document.getElementsByClassName(options.selector ? options.selector : 'maskie-phone');

    /** Allowed countries */
    const COUNTRIES = ['DOM', 'USA', 'MEX'];
    Object.freeze(COUNTRIES);

    /** Get country code */
    const TYPE = options.country ? options.country : 'USA';
    Object.freeze(TYPE);

    /** Get phone code input type */
    const CODE_INPUT_TYPE = options.codeType ? options.codeType : 'select';
    Object.freeze(CODE_INPUT_TYPE);

    /** Insert Maskie's inputs and hide the others */
    let maskiePhoneCode = null;
    let maskiePhone = null;

    // Append inputs before any input with class of "selector" option
    for (let i = 0; i < globalSelector.length; i++) {
        // Create phone code input
        maskiePhoneCode = document.createElement(CODE_INPUT_TYPE);
        // Set phone input's required attributes
        maskiePhoneCode.setAttribute('data-type', 'maskie_phonecode');
        maskiePhoneCode.setAttribute('type', 'phone');

        // Create phone input
        maskiePhone = document.createElement('input');
        // Set phone input's required attributes
        maskiePhone.setAttribute('data-type', 'maskie_phone');
        maskiePhone.setAttribute('data-country', TYPE);
        maskiePhone.setAttribute('type', 'phone');

        // Insert before globalSelector and hide it
        globalSelector[i].parentNode.insertBefore(maskiePhoneCode, globalSelector[i]);
        globalSelector[i].parentNode.insertBefore(maskiePhone, globalSelector[i]);
        globalSelector[i].setAttribute('type', 'hidden');
    }

    // Select inputs
    const PHONE_INPUT = document.querySelectorAll('input[data-type=maskie_phone]');
    const PHONE_CODE_INPUT = document.querySelectorAll('select[data-type=maskie_phonecode]').length > 0 ?
                            document.querySelectorAll('select[data-type=maskie_phonecode]') :
                            document.querySelectorAll('input[data-type=maskie_phonecode]');

    /** Set phone and phone code placeholders */
    let placeholder = '';
    switch (TYPE) {
        case 'DOM':
        case 'USA':
        case 'MEX':
            placeholder = '000-0000';
            break;
        default:
            placeholder = 'Country not allowed';
            break;
    }
    // Phone placeholder
    for (let i = 0; i < PHONE_INPUT.length; i++) {
        PHONE_INPUT[i].setAttribute('placeholder', placeholder);
    }
    // Phone code placeholder
    for (let i = 0; i < PHONE_CODE_INPUT.length; i++) {
        placeholder = '000';
        PHONE_CODE_INPUT[i].setAttribute('placeholder', placeholder);
    }

    /** Handle select or input phone code */
    switch (CODE_INPUT_TYPE) {
        /** Case it's select */
        case 'select':{
            /** Fill select with country codes */
            let countryCodeArr = [];
            switch (TYPE) {
                case 'DOM':
                    countryCodeArr = [809, 829, 849];
                    break;
                case 'USA':
                    countryCodeArr = [855, 800, 999, 325, 330, 234, 518, 229, 957, 505, 320, 730, 618, 657, 909, 752, 714, 907, 734, 278, 703, 571, 828, 606, 404, 770, 678, 470, 609, 762, 706, 331, 737, 512, 667, 443, 410, 225, 425, 360, 240, 610, 484, 835, 406, 228, 659, 205, 952, 208, 857, 617, 802, 631, 203, 475, 718, 347, 979, 818, 747, 856, 239, 319, 447, 217, 843, 681, 304, 980, 704, 423, 872, 773, 312, 413, 708, 464, 283, 513, 931, 440, 216, 573, 803, 614, 380, 925, 361, 214, 972, 469, 764, 650, 276, 563, 937, 386, 940, 720, 303, 313, 679, 620, 218, 715, 534, 848, 732, 915, 908, 607, 814, 760, 442, 541, 458, 812, 701, 910, 810, 954, 754, 479, 260, 682, 817, 559, 352, 409, 219, 970, 616, 231, 920, 274, 336, 864, 254, 985, 959, 860, 516, 808, 832, 713, 281, 938, 256, 936, 317, 515, 949, 769, 601, 731, 904, 551, 201, 870, 913, 975, 816, 308, 262, 845, 865, 337, 765, 863, 717, 740, 517, 307, 956, 575, 702, 580, 859, 501, 562, 323, 310, 213, 502, 978, 351, 806, 434, 339, 781, 478, 608, 603, 507, 660, 641, 830, 901, 786, 305, 414, 612, 251, 334, 630, 615, 724, 504, 917, 646, 212, 973, 862, 716, 510, 341, 432, 405, 531, 402, 927, 689, 407, 321, 269, 364, 270, 445, 267, 215, 623, 602, 480, 878, 412, 763, 626, 248, 772, 971, 503, 207, 401, 719, 919, 984, 530, 775, 804, 951, 540, 585, 309, 815, 779, 252, 916, 989, 831, 801, 385, 210, 935, 858, 619, 628, 415, 408, 669, 805, 661, 424, 627, 369, 707, 941, 906, 912, 570, 206, 564, 318, 301, 227, 712, 605, 574, 509, 417, 636, 435, 314, 557, 651, 727, 662, 209, 209, 315, 253, 850, 813, 419, 567, 785, 947, 520, 918, 430, 903, 757, 586, 202, 847, 224, 561, 316, 302, 774, 508, 914, 928];
                    break;
                case 'MEX':
                    countryCodeArr = [187, 800, 744, 449, 241, 624, 998, 461, 614, 330, 938, 656, 33, 662, 462, 961, 932, 971, 370, 477, 668, 871, 669, 999, 686, 55, 1, 81, 443, 631, 867, 951, 984, 320, 861, 222, 322, 89, 844, 444, 833, 664, 871, 229, 993, 350];
                    break;
                default:
                    break;
            }
            //sort codes
            countryCodeArr.sort();
            //create new array and append only unique codes
            let countryCodeNew = [];
            countryCodeArr.forEach(code => {
                if(!countryCodeNew.includes(code)){
                    countryCodeNew.push(code);
                }
            });
            countryCodeArr = countryCodeNew;
            //set codes to select
            countryCodeArr.forEach(code => {
                for (let i = 0; i < PHONE_CODE_INPUT.length; i++) {
                    var option = document.createElement('option');
                    option.setAttribute('value', code);
                    option.innerText = code;
                    PHONE_CODE_INPUT[i].appendChild(option);
                }
            });
            break;
        }
        /** Case it's input */
        case 'input':{
            /** Control phone mask */
            for (let i = 0; i < PHONE_CODE_INPUT.length; i++) {
                PHONE_CODE_INPUT[i].addEventListener('keydown', (e) => {
                    // This input
                    var input = e.target;
                    // Inserted number
                    let number = e.key;

                    switch (TYPE) {
                        case 'DOM':
                        case 'MEX':
                        case 'USA':
                            {
                                // Can't accept more than 3 numbers
                                if (input.value.length > 2 && number != 'Backspace' && number !== 'Tab') {
                                    e.preventDefault();
                                    return false;
                                } else if (parseInt(number) >= 0 && parseInt(number) <= 9 || number == 'Backspace' || number == 'Tab') {
                                    return number;
                                } else {
                                    e.preventDefault();
                                    return false;
                                }
                            }
                            break;
                        default:
                            break;
                    }
                });
            }
            break;
        }
        default:
            break;
    }

    /** Control phone mask */
    for (let i = 0; i < PHONE_INPUT.length; i++) {
        PHONE_INPUT[i].addEventListener('keydown', (e) => {
            // Inserted number
            var input = e.target;
            let number = e.key;

            // Control of parts of the phone
            if (number != 'Backspace') {
                switch (TYPE) {
                    case 'DOM':
                    case 'MEX':
                    case 'USA':
                        switch (input.value.length) {
                            // Hyphen after third number
                            case 3:
                                if (input.value.indexOf('-') == -1) {
                                    input.value += '-';
                                }
                                break;
                            default:
                                break;
                        }
                        break;
                    default:
                        break;
                }
            }

            switch (TYPE) {
                case 'DOM':
                case 'MEX':
                case 'USA':
                    {
                        // Can't accept more than 7 numbers (8 characters with hyphen)
                        if (input.value.length > 7 && number != 'Backspace' && number !== 'Tab') {
                            e.preventDefault();
                            return false;
                        } else if (parseInt(number) >= 0 && parseInt(number) <= 9 || number == 'Backspace' || number == 'Tab') {
                            return number;
                        } else {
                            e.preventDefault();
                            return false;
                        }
                    }
                    break;
                default:
                    break;
            }
        });
    }

    /** Set phone without special characters to selector's hidden field value */
    for (let i = 0; i < globalSelector.length; i++) {
        globalSelector[i].value = maskiePhoneCode.value;
    }

    // Set value each time phone changes
    for (let i = 0; i < PHONE_INPUT.length; i++) {
        PHONE_INPUT[i].addEventListener('change', (e) => {
            e.target.nextSibling.value = PHONE_CODE_INPUT[i].value + PHONE_INPUT[i].value
                .replace(/\(/g, '')
                .replace(/\)/g, '')
                .replace(/ /g, '')
                .replace(/-/g, '');
        });
    }

    // Set value each time phone code changes
    for (let i = 0; i < PHONE_CODE_INPUT.length; i++) {
        PHONE_CODE_INPUT[i].addEventListener('change', (e) => {
            e.target.nextSibling.nextSibling.value = PHONE_CODE_INPUT[i].value + PHONE_INPUT[i].value
                .replace(/\(/g, '')
                .replace(/\)/g, '')
                .replace(/ /g, '')
                .replace(/-/g, '');
        });
    }

    // Restrict click on the phone input to prevent unintended inputs
    // When clicking on the phone input, cursor will be automatically to the end
    for (let i = 0; i < PHONE_INPUT.length; i++) {
        PHONE_INPUT[i].addEventListener('mousedown', function(e) {
            e.preventDefault();
            let val = this.value;
            this.value = '';
            this.focus();
            this.value = val;
        });
    }
}
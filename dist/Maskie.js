!function(e){var t={};function a(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,a),r.l=!0,r.exports}a.m=e,a.c=t,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)a.d(n,r,function(t){return e[t]}.bind(null,r));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="",a(a.s=0)}([function(e,t){$(document).ready(()=>{const e=$("input[type=phone][data-type=phone]"),t=$("select[data-type=phonecode]");Object.freeze(["DOM","USA","MEX"]);const a=e.attr("data-country");Object.freeze(a);let n=[];switch(a){case"DOM":n=[809,829,849];break;case"USA":n=[855,800,999,325,330,234,518,229,957,505,320,730,618,657,909,752,714,907,734,278,703,571,828,606,404,770,678,470,609,762,706,331,737,512,667,443,410,225,425,360,240,610,484,835,406,228,659,205,952,208,857,617,802,631,203,475,718,347,979,818,747,856,239,319,447,217,843,681,304,980,704,423,872,773,312,413,708,464,283,513,931,440,216,573,803,614,380,925,361,214,972,469,764,650,276,563,937,386,940,720,303,313,679,620,218,715,534,848,732,915,908,607,814,760,442,541,458,812,701,910,810,954,754,479,260,682,817,559,352,409,219,970,616,231,920,274,336,864,254,985,959,860,516,808,832,713,281,938,256,936,317,515,949,769,601,731,904,551,201,870,913,975,816,308,262,845,865,337,765,863,717,740,517,307,956,575,702,580,859,501,562,323,310,213,502,978,351,806,434,339,781,478,608,603,507,660,641,830,901,786,305,414,612,251,334,630,615,724,504,917,646,212,973,862,716,510,341,432,405,531,402,927,689,407,321,269,364,270,445,267,215,623,602,480,878,412,763,626,248,772,971,503,207,401,719,919,984,530,775,804,951,540,585,309,815,779,252,916,989,831,801,385,210,935,858,619,628,415,408,669,805,661,424,627,369,707,941,906,912,570,206,564,318,301,227,712,605,574,509,417,636,435,314,557,651,727,662,209,209,315,253,850,813,419,567,785,947,520,918,430,903,757,586,202,847,224,561,316,302,774,508,914,928];break;case"MEX":n=[187,800,744,449,241,624,998,461,614,330,938,656,33,662,462,961,932,971,370,477,668,871,669,999,686,55,1,81,443,631,867,951,984,320,861,222,322,89,844,444,833,664,871,229,993,350]}n.sort();let r=[];n.forEach(e=>{-1===$.inArray(e,r)&&r.push(e)}),(n=r).forEach(e=>{t.append(`<option value="${e}">${e}</option>`)});let c="";switch(a){case"DOM":case"USA":case"MEX":c="000-0000";break;default:c="Country not allowed"}e.attr("placeholder",c),e.keydown(t=>{let n=t.key;if("Backspace"!=n)switch(a){case"DOM":case"MEX":case"USA":switch(e.val().length){case 3:-1==e[0].value.indexOf("-")&&(e[0].value+="-")}}switch(a){case"DOM":case"MEX":case"USA":return!(e[0].value.length>7&&"Backspace"!=n)&&((parseInt(n)>=0&&parseInt(n)<=9||"Backspace"==n)&&n)}}),e.change(()=>{document.getElementById("planephone").value=t.val()+e.val().replace(/\(/g,"").replace(/\)/g,"").replace(/ /g,"").replace(/-/g,"")}),t.change(()=>{document.getElementById("planephone").value=t.val()+e.val().replace(/\(/g,"").replace(/\)/g,"").replace(/ /g,"").replace(/-/g,"")})})}]);
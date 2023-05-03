const validator = {
  isValid(showNumber) {


    const arrayReves = showNumber.split("").reverse();

    //console.log(arrayReves)}

    const array1 = [];
    const array2 = [];

    for (let i = 0; i < arrayReves.length; i++) {

      if (i % 2 === 0) {

        array1.push(arrayReves[i]);

      } else {

        array1.push(arrayReves[i] * 2);

      }
    }
    for (let j = 0; j < array1.length; j++) {

      if (array1[j] < 10) {
        const convertNumber = parseInt(array1[j]);

        array2.push(convertNumber)
        //console.log(array2)

      }

      else {

        const convertString = array1[j].toString();
        const convertUnits = convertString.split('');
        const sumaDigitos = parseInt(convertUnits[0]) + parseInt(convertUnits[1]);
        array2.push(sumaDigitos);


      }

    }


    let resultado = 0;

    for (let k = 0; k < array2.length; k++) {

      resultado = resultado + array2[k];

    }

    if (resultado % 10 === 0) {
      return true
    }
    else {
      return false
    }

  },


  maskify(showNumber) {
    const showNumberMask = showNumber.slice(0, -4).replace(/./g, '#') + showNumber.slice(-4)
    return showNumberMask

    
  }

}





export default validator;

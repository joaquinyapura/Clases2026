/* EJERCICIO 1 for (let i = 1; i <= 100; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log("FizzBuzz");
  } else if (i % 3 === 0) {
    console.log("Fizz");
  } else if (i % 5 === 0) {
    console.log("Buzz");
  } else {
    console.log(i);
  }
} */


  /* 
  
  EJERCICIO 2
  Don´t show this. will be better a foreach
  function sumaPares(arr) {
  let suma = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      suma += arr[i];
    }
  }

  return suma;
}

console.log(sumaPares([1, 2, 3, 4, 5, 6])); 12 


EJERcICIO 3
function clasificar(arr) {
  let positivos = 0;
  let negativos = 0;
  let ceros = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      positivos++;
    } else if (arr[i] < 0) {
      negativos++;
    } else {
      ceros++;
    }
  }

  console.log("Positivos:", positivos);
  console.log("Negativos:", negativos);
  console.log("Ceros:", ceros);
}

clasificar([4, -1, 0, 8, -3, 0]);



EJErciCIO 4 



*/



function segundoMayor(arr) {
  let max = 0;
  let segundo = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > max) {
      segundo = max;
      max = arr[i];
    } else if (arr[i] < max && arr[i] > segundo) {
      segundo = arr[i];
    }
  }

  if (segundo === 0) {
    console.log("No hay segundo mayor");
  } else {
    console.log("Segundo mayor:", segundo);
  }
}

segundoMayor([5, 9, 2, 9, 7]);

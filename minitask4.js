function oddEven(number, callback) {
    let result;
    if (number % 2 === 0) {
      result = "Bilangan Genap";
    } else {
      result = "Bilangan Ganjil";
    }
    callback(result);
  }
  
  function final(result) {
    console.log(`Bilangan tersebut adalah ${result}`);
  }
  oddEven(2, final);
  oddEven(5, final); 
  oddEven(248, final); 
  
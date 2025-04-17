// 1. konversi untuk tiap suhu dibuat dengan object method
// 2. satu method terakhir bernama convert untuk mengkonversi kelvin, reamur, fahrenheit 

// DECLARE Celcius: REAL
// DECLARE Result: REAL
// DECLARE Type: CHAR

// INPUT Celcius
// INPUT Type

// IF Type == "K"
//     Result <- Celcius + 273
// ENDIF
// IF Type == "F"
//     Result <- (9/5 x Celcius) + 32
// ENDIF
// IF Type == "R"
//     Result <- 4/5 x Celcius
// ENDIF

// OUTPUT "Hasil konversi suhu adalah:", Result

const celcius = {
    kelvin: function(c){
        return c+ 273
    },
    fahrenheit: function(c){
        return 9/5 * c + 32
    },
    reamur: function(c){
        return 4/5 * c
    },
    convert: function(c, type){
        if (typeof c !== "number"){
            console.log("suhu harus sebuah angka")
            return
        }
        let result = null
        switch (type){
            case "f":
            result = this.fahrenheit(c)
            break;
            case "r":
            result = this.reamur(c)
            break;
            case "k":
            result = this.kelvin(c)
    }
    return result
}
}
const fahrenheit = celcius.convert(23, "f")
const kelvin = celcius.convert(20, "k")
const reamur = celcius.convert(124, "r")

console.log("Hasil konversi suhu adalah: " + fahrenheit, "Fahrenheit")
console.log("Hasil konversi suhu adalah: " + kelvin, "Kelvin")
console.log("Hasil konversi suhu adalah: " + reamur, "Reamur")
    
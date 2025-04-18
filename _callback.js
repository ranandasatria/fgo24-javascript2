const calculate = (num1, num2, cb) =>{
   return cb(num1, num2)
}

const multiply = (x1, x2)=>{
    return x2 * x2
}

const divide = (y1, y2) => {
    return y1 / y2
}

const result1 = calculate(5,5, multiply)
const result2 = calculate(5,2, divide)


console.log(result1)

function itung(num1, num2, cb){
    return cb(num1, num2)
}

function penjumlahan(no1, no2){
    return no1 + no2
}

console.log(itung(1, 2, penjumlahan))

//ALUR PROGRAM

function tampilkan(text) {
    console.log("Masuk ke fungsi tampilkan")
    console.log(text)
  }
  
  function prosesNama(nama, callback) {
    console.log("Masuk ke fungsi prosesNama")
    let hasil = "Halo, " + nama
    console.log("Hasil sudah dibuat:", hasil)
    callback(hasil)
  }
  
  console.log("Program dimulai")
  prosesNama("Agung", tampilkan)
  console.log("Program selesai")

const sapa = (nama, kabar) =>{
    return kabar(nama)
}
const tampilkanSapa = (nama) =>{
    console.log(`Halo, ${nama}, apa kabar?`)
}
sapa("Agung", tampilkanSapa)


  
function prosesAngka(angka, callback){
    callback(angka)
}
function tampilkanHasil(angka){
    if(angka > 10){
    console.log(`${angka} adalah bilangan besar`)
    }else{
    console.log(`${angka} adalah bilangan kecil`)
    }
}

prosesAngka(15, tampilkanHasil)

const prosesKata = (kata, callback) => {
    return callback(kata)
}

const panjangKata = (kata) => {
    console.log(`Panjang kata ${kata} adalah ${kata.length}`)

}

prosesKata("kocakgaming", panjangKata)
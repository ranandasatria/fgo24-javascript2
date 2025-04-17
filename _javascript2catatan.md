Objektif
1. Spread operators
- Dituliskan dengan titik tiga kali (...) lalu diikuti dengan sebuah variabel berisi data array atau object
- Dapat digunakan untuk menggabungkan array atau object yang berbeda

**Spread operator pada tipe data array**
```
const hasilUjianJohn = [75,80,79,90]
const hasilUjianEd = [66,77,88,99]

const gabunganHasilUjian = [
    ...hasilUjianJohn,
    ...hasilUjianEd
]
console.log(gabunganHasilUjian);
```

**Spread operator pada tipe data object**
```
const bio = {
    fullName: "John",
    age: 30
}

const extraInfo = {
    skills: ["Web Programming", "Painting"],
    educations: [
        {
            name: "SMP 1 Denpasar",
            year: 2012
        }
    ]
}

const profile = {
    ...bio,
    ...extraInfo
}

console.log(profile.educations[0].name)
```

## Destructuring
- Bertujuan mengubah key dari object atau item dari array menjadi sebuah variabel
- Pada object, key secara default menjadi target dan nama variabel baru
- Pada array, index akan dimanfaatkan sebagai target akses penamaan variabel


# Function
-> Blok kode yang dapat digunakan berulang kali ketika dipanggil
-> camelCase
-> Bisa memiliki banyak parameter atau tidak sama sekali
-> Dapat me-return-kan nilai
-> Jika tidak, maka nilai menjadi undefined
Pendeklarasian dan pemanggilan fungsi

```
//
pendeklarasian fungsi
function namaFungsi(param1, param2){
    //blok kode yang ingin dijalankan
    //ketika fungsi dipanggil
}

//pemanggilan fungsi
namaFungsi() // tanpa parameter
namaFungsi("param1", 2) // dengan value di parameter 1 dan 2

```
Ada 3 cara penulisan fungsi

1. Menggunakan keyword function dan memberikan nama fungsi secara langsung
```
function namaFungsi(){
}
```
2. Anonymous function
```
const namaFungsi = function(){
}
```
3. Arrow function
```
const namaFungsi = () => {
}
```

## Method
- Fungsi yang dituliskan dalam sebuah object
- Bertujuan untuk mengakses value dari object yang menggunakan keyword **this**
- Harus dengan anonymous function, ga bisa arrow function
```
//pendeklarasian objek dengan method
const profile = {
    firstName: "John",
    lastName: "O'Connor";
    fullName: function(){
        return `${this.firstName} ${this.lastName}
    }
}
```
## Callback
- Callback pada dasarnya adalah sebuah fungsi yang dituliskan ke dalam parameter fungsi lain
- Bertujuan untuk menjalankan proses setelah pengeksekusian fungsi utama
- Tujuan awalnya agar dapat menjalankan kode secara sinkron

```
function fungsiUtama(param,callback){
    callback(param1)
}
function fungsiKedua(value){
    console.log(value)
}

fungsiUtama("Halo", fungsiKedua) // Halo
```
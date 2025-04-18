const calculateDegree = (c, type, cb) => {
    if(typeof c !== "number"){
        console.log(`Harap masukkan angka`)
        return
    }
    cb(c, type)
}

//Callback tidak langsung
const converter = (c, type) =>{
    let result;
    if(type === "f"){
        result = (9/5) * c + 32
    }else if (type === "k"){
        result = c + 273
    }else if(type === "r"){
        result = (4/5) * c
    }else {
        console.log(`Tipe tidak dikenali`)
        return
    }
    console.log(`Hasil konversi suhu adalah ${result} ${type}`)
}


calculateDegree(12,"f",converter)
calculateDegree(21,"k",converter)
calculateDegree("21",2,converter)
calculateDegree(50,2,converter)
calculateDegree(50,"r",converter)

//Callback langsung
calculateDegree(15,"f",(c, type) =>{
    let result;
    if(type === "f"){
        result = (9/5) * c + 32
    }else if (type === "k"){
        result = c + 273
    }else if(type === "r"){
        result = (4/5) * c
    }else {
        console.log(`Tipe tidak dikenali`)
        return
    }
    console.log(`Hasil konversi suhu adalah ${result} ${type}`)
})


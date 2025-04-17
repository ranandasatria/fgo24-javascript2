let l = 0
let k = 0

const circle = (r)=>{
let phi;
    if(r % 7 == 0){
        phi = 22/7;
    }else{
        phi = 3.14;
    }
    l = phi * r * r;
    k = 2 * phi * r;
    console.log(`Luas lingkaran adalah ${l}`);
    console.log(`Keliling lingkaran adalah ${k}`);
};


circle(21)
circle(2842)

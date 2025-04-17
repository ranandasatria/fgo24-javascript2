const data = [
    ["data0", 
        ["data0","data1","data2",
            {string: ["data0", 
        {value: "hello"
     }]
 }]]]
 
 data[0][1][3].string[1] = {
    ...data[0][1][3].string[1],
    value: "revisi",
 }

console.log(data[0][1][3].string[1].value);

const [[_1,[_2,_3,_4,{string:[_5,{value}]}]]] = data 

console.log(value)

// const {value: value} = data[0][1][3].string[1]

// // const colors = ["#000", "#fff", "#f00"]

// // const [black, white, red] = colors;

// // console.log(black)
// // console.log(white)
// // console.log(red)

// // console.log(`Hex color dari putih adalah ${white}`)

// const profile = {
//     name: "John O'Connor",
//     age: 30,
//     skills: ["Web Programming", "Painting"],
//     education: {
//         name: "Universitas Udayana",
//         year: 2018
//     }
// }

// const {skills, age, name: fullName} = profile
// const {skills:anotherSkills} = structuredClone(profile)
// const {name: universityName} = profile.education
// const {education: {name: univName}} = profile

// anotherSkills[2] = "Hiking"


// console.log(skills)
// console.log(anotherSkills)
// console.log(age)
// console.log(profile)
// console.log(fullName)
// console.log(universityName)
// console.log(univName)


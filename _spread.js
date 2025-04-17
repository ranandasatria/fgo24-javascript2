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


const {value: value} = data[0][1][3].string[1]

console.log(value)


const bio = {
    name: "John O' Connor",
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
    ...extraInfo,
    skills: [...extraInfo.skills, "Hiking"],
    educations: [...extraInfo.educations, {
        name: "SMA 9 Denpasar",
        year: 2015
    }]
}

console.log(profile)
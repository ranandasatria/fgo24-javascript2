const obj = {
    name: "Agung",
    age: 30,
    skills: ["Web Programming", "Swimming"],
    greetings: function(){
        console.log(`Halo ${this.name}`)
        console.log(`Anda memiliki skills:`)
        for(let x=0; x< this.skills.length; x++){
            console.log(this.skills[x])
        }
    }
}

obj.name = "John"
obj.skills[2] = "Hiking"
obj.greetings()


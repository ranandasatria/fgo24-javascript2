const data = [
    ["data0", 
        ["data1","data2","data3",
            {
     string: ["data4", 
        {
         value: "hello"
     }]
 }]]]
 
 data[0][1][3].string[1].value = {
    ...data[0][1][3].string[1],
    value: "revisi"
 }

console.log(data[0][1][3].string[1].value);
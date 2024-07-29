import fun from "./default.mjs"
import {name as nam, age} from "./nameExport.mjs"
const { add , sub} = fun 
console.log(add(2,3),sub(3,2))
console.log(nam,age)


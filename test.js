// const axios = require("axios");
// function get(params){
//     return axios.get("http://122.9.54.200:8001/v1/settingList",{params})
// }
// get({ keyword: "FZ138", current: 1, pageSize: 200 }).then((res)=>{
//     const a = res?.data?.data || []
//     console.log(a)
// })

const _ = require("lodash")
// const obj = {
//     name : {id:"s",a:1},
//     age : {id:"1s",a:11}
// }
// _.forEach(obj,(id) => {
//     console.log(id)
// });
const arr = [1,2,3,4,5,1,2,3,4,5]
const a = _.chunk(arr,(arr.length+4)/4)
console.log(a)

// linea por linea
// let x
// x = 25
// console.log(x)

//axios asynchronus 

// const getData = () => {
//   const {data} = axios(..)
// data.then((response) =>)
//   const res = data
// }

// promises

// const myFirstPromise = new Promise((res, rej) => {
//   //execute certain code... and if goes well, return resove
//   // if gets bad return reject 
//   setTimeout(() => {
//     res({status: 200, message: "all good man"})
//     // rej("there was no data")
//   }, 2000)
// })

arr =  []

arr.push("1")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.push("2")
arr.join("-")


// then catch finally 
// myFirstPromise
// .then(( data )=> data.save())
// .catch(( error ) => console.log(error))
// .finally(()=> console.log("this promise was executed"))

// console.log(myFirstPromise)

//async await 
const handleMyFirstPromise = async () => {
  try {
    const myFirstPromise = await new Promise((res, rej) => {
      //execute certain code... and if goes well, return resove
      // if gets bad return reject 
      setTimeout(() => {
        res({status: 200, message: "all good man"})
        // rej("there was no data")
      }, 2000)
    })
    console.log(myFirstPromise)
  } catch (error) {
    console.log(error)
  }
}

handleMyFirstPromise()


// create a Form where a user is going to sign up with name, mail, and phoneNumber and, when the user is registered, it should recieve a random message
// the messages should be stored in the database 
// the user info should also be stored in the database 




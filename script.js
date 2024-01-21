// let myPtag = document.getElementById('class-type')
// console.log(myPtag);
// myPtag.textContent = "Good Afternoon"

// // fetch api
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((data) => {
//     console.log(data)

//     localStorage.setItem("data", JSON.stringify(data))
// })

// fetch api assignment
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((data)=> {
    console.log(data)
})
.catch((err)=>console.log(err))
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
function alertTitle(title){
    alert(title)
}
fetch("https://jsonplaceholder.typicode.com/posts")
.then((response)=>response.json())
.then((data)=> {
    console.log(data)
    const getPost = document.getElementById('task')

    for (let a = 0; a < data.length; a++){
        
        getPost.innerHTML += `<li class="task-new" onclick="alertTitle('${data[a].title}')">

            <div class="task-id">${data[a].id}</div>
            <div class="task-title">${data[a].title}</div>
            <div class="task-body">${data[a].body}</div>
        </li>`
    }
})
.catch((err)=>console.log(err))
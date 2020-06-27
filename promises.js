/* Using fetch api to get todos and users created them then merget the json responses.
This example demonstrates promise handling, creation, chaining, & 'Promise.all*/


// these functions return a promise that is resolved to json array
const getUsers = () => {
    return new Promise( (resolve) => {
        // chained promises are shown below
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => console.log('Error:', err));
    })
}
const getTodos = () => {
    return new Promise( (resolve) => {
        fetch(`https://jsonplaceholder.typicode.com/todos`)
            .then(res => res.json())
            .then(data => resolve(data))
            .catch(err => console.log('Error:', err));
    })
}

// waiting for all promises to resolve
Promise.all([getUsers(), getTodos()])
    .then( ([users, todos]) => {
        // mapping userId in todos to user name
        todos.map(todo =>todo.userName = users[todo.userId-1].name)
        // printing only the first 10 todos. todos.length is 200
        console.log(todos.slice(0, 10));
    })
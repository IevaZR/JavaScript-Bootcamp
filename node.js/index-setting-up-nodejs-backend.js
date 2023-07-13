import express from 'express'
const app = express()

app.use(express.json())
//we need to include this for the application to work

//Other methods:
//POST - sends data to server
//GET - gets data from server
//PUT - update data on server
//DELETE - delete data on server
//PATCH - update data on server (partial update)

const users = [
  { id: 1, name: "Zymante" },
  { id: 2, name: "Neringa" },
  { id: 3, name: "Viola" },
  { id: 4, name: "Kristina" },
  { id: 5, name: "Vaida" },
]
//we created an array

const port = 5000
app.get('/', (request, response) => {
  response.send('Response from server')
})
//first parameter is route, second is callback funcntion

//We create other routes
app.get('/products', (request, response) => {
  response.send('Response from products route')
})
app.get('/users', (request, response) => {
  //response.send('Response from users route')
  response.json(users)
})

app.post('/create-user', (request, response) => {
  const requestFromUser = request.body
  users.push(requestFromUser) //we push the added user to users array
  response.status(201).json(users) //we send a response to end user (everything that starts with 200 and 300 are success messages) -> http.cat -> here we can choose the number to send
})
//we can test this in Insomnia with POST method

app.put('/update-user/:userId', (request, response) => {
  const requestFromUser = request.body; //request.body is whatever we type in the json in Insomnia (its a body of the request)
  const userId = Number(request.params.userId) // we convert it to a number

  //now we can use whichever method we want
  const updatedUsers = users.filter((user) => user.id !== userId)
  updatedUsers.push(requestFromUser)
  response.status(200).json(updatedUsers)
})
//we added /:id to make the route dynamic (id is variable, we can name it however we want)

app.delete('/delete-user/:userId', (request, response) => {
  const userId = Number(request.params.userId)

  const updatedUsers = users.filter((user) => user.id !== userId)
  response.status(201).json(updatedUsers)
})

app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
})





//_________________________________________________________________________________________

//NODE without express

// import http from "http"
// import url from "url"

// const users = [
//   { id: 1, name: "Zymante" },
//   { id: 2, name: "Neringa" },
//   { id: 3, name: "Viola" },
//   { id: 4, name: "Kristina" },
//   { id: 5, name: "Vaida" },
// ]

// const port = 5000

// //to start the server

// const server = http.createServer((req, res) => {

//   const parsedUrl = url.parse(req.url)

//   if (req.method === "GET") {
//     if(parsedUrl.pathname === '/') {
//       res.writeHead(200, {'Content-Type' : 'text/plain'})
//       res.end('Response from server (MAIN ROUTE)')
//     }
//     if(parsedUrl.pathnmae === '/users') {
//       res.writeHead(200, {'Content-Type' : 'application/json'})
//       res.end(JSON.stringify(users))
//     }
//   }

//   if (req.method === "POST") {
//     if(parsedUrl.pathname === '/create-user') {
//       let requestFromUser = '';
//       req.on('data', (chunk) => {
//         requestFromUser += chunk
//       })

//       req.on ('end', () => {
//         const newUser = JSON.parse(requestFromUser)
//         users.push(newUser)
//       })

//       res.writeHead(201, {'Content-Type' : 'application/json'})
//       res.end(JSON.stringify(users))
//     }
    
//   }
// })

// server.listen(port, () => {
//   console.log(`Server is running on port ${port}`)
// })

//_________________________________________________________________________________________________
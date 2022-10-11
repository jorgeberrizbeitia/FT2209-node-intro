const http = require("http")

const server = http.createServer((request, response) => {

  console.log("solicitud de un usuario")
  console.log(request.url)
  if (request.url === "/") {
    response.write("bienvenido a mi pagina")
    response.end()
  } else if (request.url === "/patata") {
    response.write("toma una patata")
    response.end()
  }


})

server.listen(8080)
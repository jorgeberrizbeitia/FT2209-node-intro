const express = require("express");
const app = express();
const port = 3000;

// app.use es lo que le llama un middleware (se ejecuta en todas las llamadas del cliente)
app.use( express.static("public") ) // en donde estaran ubicados todos los elementos estaticos (css, imagenes, etc)

// Una ruta para cuando el usuario va a "/"
app.get("/", (req, res) => {
  console.log("usuario intenta ir a '/'");
  res.send("Hello World!");
});

// siempre empezar con "/"
// siempre agregar req y res
app.get("/patata", (req, res) => {
  res.send("Aqui tienes tu patata");
});

app.get("/friends/all", (req, res) => {
  res.send("estos son todos mis amigos...")
})

app.get("/friends/:nombreAmigo", (req, res) => {
  // let nombreAmigo = "Caro"
  console.log(req.params) // toda la informacion dinamica que el cliente envia
  // rutas dinamicas
  // req.params

  // let { nombreAmigo } = req.params // ejemplo de destructuracion

  if (req.params.nombreAmigo === "caro") {
    res.send("esta es informacion de mi amiga Caro")
  } else if (req.params.nombreAmigo === "iñigo") {
    res.send("Esta es la informacion de mi amigo Iñigo")
  } else {
    res.send("No tengo más amigos :(")
  }

})

// una ruta que envie una pagina de HTML
app.get("/home", (req, res) => {
  // el .send es unicamente para enviar data
  // para enviar archivos utilizamos el metodo .sendFile
  console.log(__dirname)
  res.sendFile(__dirname + "/views/home.html")
})


app.get("/about", (req, res) => {

  res.sendFile(__dirname + "/views/about-page.html")

})




// ruta 404
app.get("*", (req, res) => {
  res.send("Lo siento, esta pagina no existe :(")
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

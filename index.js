import express from "express";
import exphbs from "express-handlebars";

const app = express();

app.engine("handlebars", exphbs.engine());
app.set("view engine", "handlebars");
app.use(express.static("public"));

var maps = {
  ano: "1700",
};

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/anos/:ano", (req, res) => {
  const mapas = req.params.ano;
  console.log(mapas);

  res.render("mapa_ano", { mapas });
});

app.listen(3000, () => {
  console.log("App funcionando...");
});

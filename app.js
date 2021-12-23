const express = require("express");
const app = express();
const expressLayouts = require("express-ejs-layouts");
const port = 3000;

app.set("view engine", "ejs");

app.use(expressLayouts);

app.get("/", (req, res) => {
  res.render("index", {
    title: "Homepage",
    layout: "layouts/main-layout",
  });
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About Page",
    layout: "layouts/main-layout",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact Page",
    layout: "layouts/main-layout",
  });
});

app.listen(port, () => {
  console.log(`This app is listening at http://localhost:${port}`);
});

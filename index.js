const express = require("express")

const port = 3000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));

let allItems = [];
app.get("/", (req, res) => {
    const date = new Date;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    const today = date.toLocaleDateString("en-US", options)
    res.render("index.ejs", { today: today, itemsArray: allItems });
})

app.post("/", (req, res) => {
    newItem = req.body.newitem;
    allItems.push(newItem)
    res.redirect("/")
})

app.listen(port, () => {
    console.log('Listening on port ' + port);
});
const express = require('express');
const bodyParser = require('body-parser');
const date = require(__dirname + '/date.js')


const app = express();
var items = [];
var workItems = [];

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));



app.get("/", function(req, res) {
    
    var day = date();
    res.render("list", {ListTitle: day, NewItemList: items});
    res.sendFile(__dirname + '/views/list.ejs')
});

app.post("/", function (req, res) {
    
    var item = req.body.newTem;
    console.log(req.body.list);

    if (req.body.list === "Work") {
        workItems.push(item);
        res.redirect("/work");
    } else {
        items.push(item);
        res.redirect("/");
    }
    
  })




app.get("/work", function (req, res) {

  res.render("list", {ListTitle: "Work List", NewItemList: workItems});
  res.redirect("/work");
})

app.post("/work", function (req, res){
    var workItem = req.body.newTem;
    workItem.push(workItem);
    res.redirect("/work");
})







app.listen(process.env.PORT || 5000, function() {
    console.log("serv is n")
});

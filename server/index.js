var express = require("express");
var bodyParser = require("body-parser");
var multer = require("multer");
var samplePosts = require("../database-mongo/data.js");
var posts = require("../database-mongo");
var path = require("path");
var socket = require("socket.io");


var app = express();
app.use(bodyParser.json());
// app.use(express.static(__dirname + "/../react-client/dist"));

const insertSamplePosts = () => {
  samplePosts.samplePosts.map((element) => {
    posts.Post.find({ description: element.description }, function (err, docs) {
      if (docs.length === 0) {
        posts.Post.create(element).then(() => posts.db.disconnect());
      }
    });
  });
};
insertSamplePosts();

/*set up of socket server */
var server = app.listen(3000, function () {
  console.log("listening for requests on port 3000,");
});
var io = socket(server);
io.on("connection", (socket1) => {
  console.log("made socket connection", socket1.id);

  // Handle chat event
  socket.on("chat", function (data) {
    // console.log(data);
    io.sockets.emit("chat", data);
  });

  // Handle typing event
  socket.on("typing", function (data) {
    socket.broadcast.emit("typing", data);
  });
});

// const storage = multer.diskStorage({
//   destination: "../react-client/dist/uploads",
//   filename: function(req, file, cb) {
//     cb(null, 'IMAGE-' + Date.now() + path.extname(file.originalname))
//   }
// })
// const upload = multer({storage:storage, limits:{fileSize: 1000000}}).single('image')
// app.post("/upload", (req,res)=> {
//   upload(req, res ,(err)=> {
//     if(err) {
//       res.render('index', {msg: err})
//     } else {
//       console.log(req.file)
//       res.send('test')
//     }
//   })
// })

app.post("/posts", (req, res) => {
  console.log(req.body);
  posts.Post.create(req.body);
});

app.post("/update", (req, res) => {
  console.log(req.body);
  posts.Post.find({ imagesrc: req.body.imagesrc }, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      posts.Post.updateMany(
        { price: data[0].price, rooms: data[0].rooms, description: data[0].description, address: data[0].address },
        { $set: { price: req.body.price, rooms: req.body.rooms, description: req.body.description, address: req.body.address } },
        function (err1, result) {
          if (err1) {
            res.send(err1);
          } else {
            res.send(result);
          }
        }
      );
    }
  })
});

app.post("/delete", (req, res) => {
  console.log(req.body)
  posts.Post.deleteOne({ imagesrc: req.body.imagesrc }, function (err) {
    if (err) console.log(err);
    console.log("Successful deletion")
  })
})

app.get("/posts", (req, res) => {
  posts.Post.find({ username: "Mohamed Amine Oueslati" }, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.get("/rentPosts1", (req, res) => {
  posts.Post.find({}, function (err, data) {
    if (err) {
      res.sendStatus(500);
    } else {
      res.json(data);
    }
  });
});

app.post("/GetMessages", (req, res) => {
  posts.Post.find({ description: req.body.description }, (err, docs) => {
    res.send(docs[0]._doc.messages);
  });
});

app.post("/messages", (req, res) => {
  posts.Post.find({ description: req.body.description }, (err, docs) => {
    let newMessage = docs[0]._doc.messages + JSON.stringify(req.body) + ",";
    console.log("newMessage", newMessage);
    console.log(docs[0]._doc.messages);
    posts.Post.update(
      { description: req.body.description },
      { messages: newMessage },
      (err1) => {
        if (!err1) {
          console.log("updated");
        }
      }
    );
  });
});

app.post("/search", (req, res) => {
  console.log(req.body);
  posts.Post.find({}, function (err, houses) {
    if (err) {
      res.sendStatus(500);
    } else {
      var data = [];
      houses.map((house) => {
        if (req.body.price) {
          var [min, max] = req.body.price.split("-");
          if (house.price >= min && house.price <= max) {
            if (
              house.address.split(",")[1] === req.body.city ||
              !req.body.city
            ) {
              if (!req.body.rooms || req.body.rooms === house.rooms) {
                data.push(house);
              }
            }
          }
        } else if (!req.body.price) {
          if (house.address.split(",")[1] === req.body.city || !req.body.city) {
            if (!req.body.rooms || req.body.rooms === house.rooms) {
              data.push(house);
            }
          }
        }
      });
      console.log(data.length);
      res.json(data);
    }
  });
});
// Fixing the 'cannot GET /URL' error on refresh with React Router
// app.get("/*", function (req, res) {
//   res.sendFile(
//     path.join(__dirname, "../react-client/dist/index.html"),
//     function (err) {
//       if (err) {
//         res.status(500).send(err);
//       }
//     }
//   );
// });

// app.listen(3000, function () {
//   console.log("listening on port 3000!");
// });

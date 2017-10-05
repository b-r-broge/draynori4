//=====MODELS======//
const Ifelse = require('./models/ifelse.js');
const Json = require('./models/json.js');
const Dot = require('./models/dot.js');
const Ending = require('./models/endings.js');
const EndingTown = require('./models/endingTowns.js');
const EndingMine = require('./models/endingMines.js');
const EndingMount = require('./models/endingMounts.js');
const EndingPig = require('./models/endingPigs.js');
const User = require('./models/user.js');
const Kuku = require('./models/locationKuku.js');
const Mine= require('./models/locationMine.js');
const Mount = require('./models/locationMount.js');
const Snag = require('./models/locationSnag.js');
const Spider = require('./models/locationSpider.js');
const Croc = require('./models/locationCroc.js');
const Cave = require('./models/locationCave.js');
const Ruin = require('./models/locationRuins.js');
const Bear = require('./models/locationBear.js');
const Gold1 = require('./models/gold1.js');
const Gold19 = require('./models/gold19.js');
const Gold22 = require('./models/gold22.js');
const Gold24 = require('./models/gold24.js');
const Gold102 = require('./models/gold102.js');
const Gold167 = require('./models/gold167.js');
const Gold156 = require('./models/gold156.js');
const Gold73 = require('./models/gold73.js');
const Gold74 = require('./models/gold74.js');
const Gold200 = require('./models/gold200.js');
const Gold203 = require('./models/gold203.js');
const Page1 = require('./models/page1.js');
const Page2 = require('./models/page2.js');
const Page3 = require('./models/page3.js');
const Page4 = require('./models/page4.js');
const Page5 = require('./models/page5.js');
const Page6 = require('./models/page6.js');
const Page7 = require('./models/page7.js');
const Page8 = require('./models/page8.js');
const Page9 = require('./models/page9.js');
const Page10 = require('./models/page10.js');
const Page11 = require('./models/page11.js');
const Page12 = require('./models/page12.js');
const Page13 = require('./models/page13.js');
const Page14 = require('./models/page14.js');
const Page15 = require('./models/page15.js');
const Page16 = require('./models/page16.js');
const Page17 = require('./models/page17.js');
const Page18 = require('./models/page18.js');
const Page19 = require('./models/page19.js');
const Page20 = require('./models/page20.js');
const Page21 = require('./models/page21.js');
const Page22 = require('./models/page22.js');
const Page23 = require('./models/page23.js');
const Page24 = require('./models/page24.js');
const Page25 = require('./models/page25.js');
const Page26 = require('./models/page26.js');
const Page27 = require('./models/page27.js');
const Page28 = require('./models/page28.js');
const Page29 = require('./models/page29.js');
const Page30 = require('./models/page30.js');
const Page31 = require('./models/page31.js');
const Page32 = require('./models/page32.js');
const Page33 = require('./models/page33.js');
const Page34 = require('./models/page34.js');
const Page35 = require('./models/page35.js');
const Page36 = require('./models/page36.js');
const Page37 = require('./models/page37.js');
const Page38 = require('./models/page38.js');
const Page39 = require('./models/page39.js');
const Page40 = require('./models/page40.js');
const Page41 = require('./models/page41.js');
const Page42 = require('./models/page42.js');
const Page43 = require('./models/page43.js');
const Page44 = require('./models/page44.js');
const Page45 = require('./models/page45.js');
const Page46 = require('./models/page46.js');
const Page47 = require('./models/page47.js');
const Page48 = require('./models/page48.js');
const Page49 = require('./models/page49.js');
const Page50 = require('./models/page50.js');
const Page51 = require('./models/page51.js');
const Page52 = require('./models/page52.js');
const Page53 = require('./models/page53.js');
const Page54 = require('./models/page54.js');
const Page55 = require('./models/page55.js');
const Page56 = require('./models/page56.js');
const Page57 = require('./models/page57.js');
const Page58 = require('./models/page58.js');
const Page59 = require('./models/page59.js');
const Page60 = require('./models/page60.js');
const Page61 = require('./models/page61.js');
const Page62 = require('./models/page62.js');
const Page63 = require('./models/page63.js');
const Page64 = require('./models/page64.js');
const Page65 = require('./models/page65.js');
const Page66 = require('./models/page66.js');
const Page67 = require('./models/page67.js');
const Page68 = require('./models/page68.js');
const Page69 = require('./models/page69.js');
const Page70 = require('./models/page70.js');
const Page71 = require('./models/page71.js');
const Page72 = require('./models/page72.js');
const Page73 = require('./models/page73.js');
const Page74 = require('./models/page74.js');
const Page75 = require('./models/page75.js');
const Page76 = require('./models/page76.js');
const Page77 = require('./models/page77.js');
const Page78 = require('./models/page78.js');
const Page79 = require('./models/page79.js');
const Page80 = require('./models/page80.js');
const Page81 = require('./models/page81.js');
const Page82 = require('./models/page82.js');
const Page83 = require('./models/page83.js');
const Page84 = require('./models/page84.js');
const Page85 = require('./models/page85.js');
const Page86 = require('./models/page86.js');
const Page87 = require('./models/page87.js');
const Page88 = require('./models/page88.js');
const Page89 = require('./models/page89.js');
const Page90 = require('./models/page90.js');
const Page91 = require('./models/page91.js');
const Page92 = require('./models/page92.js');
const Page93 = require('./models/page93.js');
const Page94 = require('./models/page94.js');
const Page95 = require('./models/page95.js');
const Page96 = require('./models/page96.js');
const Page100 = require('./models/page100.js');
const Page101 = require('./models/page101.js');
const Page102 = require('./models/page102.js');
const Page103 = require('./models/page103.js');
const Page104 = require('./models/page104.js');
const Page105 = require('./models/page105.js');
const Page106 = require('./models/page106.js');
const Page107 = require('./models/page107.js');
const Page108 = require('./models/page108.js');
const Page109 = require('./models/page109.js');
const Page110 = require('./models/page110.js');
const Page111 = require('./models/page111.js');
const Page112 = require('./models/page112.js');
const Page113 = require('./models/page113.js');
const Page114 = require('./models/page114.js');
const Page115 = require('./models/page115.js');
const Page116 = require('./models/page116.js');
const Page117 = require('./models/page117.js');
const Page118 = require('./models/page118.js');
const Page119 = require('./models/page119.js');
const Page120 = require('./models/page120.js');
const Page121 = require('./models/page121.js');
const Page122 = require('./models/page122.js');
const Page123 = require('./models/page123.js');
const Page124 = require('./models/page124.js');
const Page130 = require('./models/page130.js');
const Page150 = require('./models/page150.js');
const Page151 = require('./models/page151.js');
const Page152 = require('./models/page152.js');
const Page153 = require('./models/page153.js');
const Page154 = require('./models/page154.js');
const Page155 = require('./models/page155.js');
const Page156 = require('./models/page156.js');
const Page157 = require('./models/page157.js');
const Page158 = require('./models/page158.js');
const Page159 = require('./models/page159.js');
const Page160 = require('./models/page160.js');
const Page161 = require('./models/page161.js');
const Page162 = require('./models/page162.js');
const Page163 = require('./models/page163.js');
const Page164 = require('./models/page164.js');
const Page165 = require('./models/page165.js');
const Page166 = require('./models/page166.js');
const Page167 = require('./models/page167.js');
const Page168 = require('./models/page168.js');
const Page169 = require('./models/page169.js');
const Page170 = require('./models/page170.js');
const Page171 = require('./models/page171.js');
const Page172 = require('./models/page172.js');
const Page173 = require('./models/page173.js');
const Page174 = require('./models/page174.js');
const Page175 = require('./models/page175.js');
const Page176 = require('./models/page176.js');
const Page177 = require('./models/page177.js');
const Page178 = require('./models/page178.js');
const Page200 = require('./models/page200.js');
const Page201 = require('./models/page201.js');
const Page202 = require('./models/page202.js');
const Page203 = require('./models/page203.js');
const Page204 = require('./models/page204.js');
const Page205 = require('./models/page205.js');
const Page206 = require('./models/page206.js');
const Page207 = require('./models/page207.js');

//=================//

//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const mustacheExpress = require('mustache-express');
const session = require('express-session');
// const cors = require('cors')
const app = express();
const url = process.env.MONGOLAB_URI;
//=========================//

//====SET APP ENGINE===//

app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');
app.set('views', './views');
app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(expressValidator());

//=========================//

//====START SESSION===//

app.use(session({
  secret: 'keyboard cat',
  resave: false,
  saveUninitialized: true
}));

//==========================//

//====MONGOOSE PROMISE===//

mongoose.Promise = require('bluebird');

//==========================//

//====MONGOOSE CONNECTION===//

mongoose.connect(url, function (err, db) {
 if (err) {
   console.log('Unable to connect to the mongoDB server. Error:', err);
 } else {
   console.log('Connection established to', url);
 }
});

//==========================//

//====TEST THE CONNECTION/ROOT DIR===//

app.use(function(req, res, next) {
  console.log('I dont like programming anymore');
  next();
})

app.get('/', function(req, res) {
  res.redirect('/home');
});

//==========================//

//====RENDER HOME PAGE===//

app.get('/home', function(req, res) {
  res.render('home')
});

//==========================//

//====RENDER START PAGE===//

app.get('/start', function(req, res) {
  User.find({username: req.session.username}).then(function(users) {
  res.render('astart', {
    users: users,
  });
});
});

//==========================//

//====RENDER SIGNUP PAGE===//

app.get('/signup', function(req, res) {
  res.render('asignup')
});

//==========================//

//====RENDER LOGIN PAGE===//

app.get('/login', function(req, res) {
  res.render('login')
});

//==========================//

//====RENDER LOGIN PAGE2===//

app.get('/login', function(req, res) {
  if (req.session && req.session.authenticated) {
    User.findOne({
        username: req.session.username,
        password: req.session.password
      }).then(function(user) {
      if (user) {
        req.session.username = req.body.username;
        var username = req.session.username;
        var userid = req.session.userId;
        res.render('login', {
          user: user
        });
      }
    })
  } else {
    res.redirect('/signup')
  }
})

//==========================//

//====POST LOGIN FOR USER===//

app.post('/login', function(req, res) {
  let username = req.body.username;
  let password = req.body.password;

  User.findOne({
      username: username,
      password: password,
  }).then(user => {
    console.log(user);
    if (user.password == password) {
      req.session.username = username;
      req.session.authenticated = true;
      console.log(req.session);

      res.redirect('/start');
    } else {
      res.redirect('/login');
      console.log("This is my session", req.session)
    }
  })
})

//==========================//

//====POST TO SIGNUP PAGE===//

app.post('/signup', function(req, res) {
  User.create({
    username: req.body.username,
    password: req.body.password,
  }).then(function(user) {
    req.username = user.username;
    req.session.authenticated = true;
}).then(user => {
  res.redirect('/thanks')
});
});

//==========================//

//====CREATE IF ELSE===//

app.post('/ifelse', function(req, res) {
  Ifelse.create({
    number: req.body.number,
    text: req.body.text,
  }).then(ifelse => {
  res.json(ifelse)
});
});

//==========================//

//====CREATE JSON===//

app.post('/json', function(req, res) {
  Json.create({
    number: req.body.number,
    text: req.body.text,
  }).then(json => {
  res.json(json)
});
});

//==========================//

//====CREATE DOT===//

app.post('/dot', function(req, res) {
  Dot.create({
    number: req.body.number,
    text: req.body.text,
  }).then(dot => {
  res.json(dot)
});
});

//==========================//

//====CREATE NEW GOLD PAGE 5===//

app.post('/gold1', function(req, res) {
  Gold1.create({
    gold1: req.body.gold1,
    user: req.session.username,
  }).then(gold1 => {
  res.redirect('/page5')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 19===//

app.post('/gold19', function(req, res) {
  Gold19.create({
    gold19: req.body.gold19,
    user: req.session.username,
  }).then(gold19 => {
  res.redirect('/page19')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 22===//

app.post('/gold22', function(req, res) {
  Gold22.create({
    gold22: req.body.gold22,
    user: req.session.username,
  }).then(gold22 => {
  res.redirect('/page22')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 24===//

app.post('/gold24', function(req, res) {
  Gold24.create({
    gold24: req.body.gold24,
    user: req.session.username,
  }).then(gold24 => {
  res.redirect('/page24')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 102===//

app.post('/gold102', function(req, res) {
  Gold102.create({
    gold102: req.body.gold102,
    user: req.session.username,
  }).then(gold102 => {
  res.redirect('/page102')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 167===//

app.post('/gold167', function(req, res) {
  Gold167.create({
    gold167: req.body.gold167,
    user: req.session.username,
  }).then(gold167 => {
  res.redirect('/page167')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 156===//

app.post('/gold156', function(req, res) {
  Gold156.create({
    gold156: req.body.gold156,
    user: req.session.username,
  }).then(gold156 => {
  res.redirect('/page156')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 73===//

app.post('/gold73', function(req, res) {
  Gold73.create({
    gold73: req.body.gold73,
    user: req.session.username,
  }).then(gold73 => {
  res.redirect('/page73')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 74===//

app.post('/gold74', function(req, res) {
  Gold74.create({
    gold74: req.body.gold74,
    user: req.session.username,
  }).then(gold74 => {
  res.redirect('/page74')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 200===//

app.post('/gold200', function(req, res) {
  Gold200.create({
    gold200: req.body.gold200,
    user: req.session.username,
  }).then(gold200 => {
  res.redirect('/page200')
});
});

//==========================//

//====CREATE NEW GOLD PAGE 203===//

app.post('/gold203', function(req, res) {
  Gold203.create({
    gold203: req.body.gold203,
    user: req.session.username,
  }).then(gold203 => {
  res.redirect('/page203')
});
});

//==========================//

//====GET ALL GOLD===//

app.get('/gold', function(req, res) {
  User.find({user: req.session.username}).then(function(users){
    Gold1.findOne({user: req.session.username}).then(function(gold1){
      Gold19.findOne({user: req.session.username}).then(function(gold19){
        Gold22.findOne({user: req.session.username}).then(function(gold22){
          Gold24.findOne({user: req.session.username}).then(function(gold24){
            Gold102.findOne({user: req.session.username}).then(function(gold102){
              Gold156.findOne({user: req.session.username}).then(function(gold156){
                Gold167.findOne({user: req.session.username}).then(function(gold167){
                  Gold73.findOne({user: req.session.username}).then(function(gold73){
                    Gold74.findOne({user: req.session.username}).then(function(gold74){
                      Gold200.findOne({user: req.session.username}).then(function(gold200){
                        Gold203.findOne({user: req.session.username}).then(function(gold203){

      res.render('gold', {
        users: users,
        gold1: gold1,
        gold19: gold19,
        gold22: gold22,
        gold24: gold24,
        gold102: gold102,
        gold156: gold156,
        gold167: gold167,
        gold73: gold73,
        gold74: gold74,
        gold200: gold200,
        gold203: gold203,
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });

//==========================//

//====GET GOLD RESET===//

app.get('/gold_reset', function(req, res){
  User.find({user: req.session.username}).then(function(users){
    Kuku.findOne({user: req.session.username}).then(function(kukus){
      Snag.findOne({user: req.session.username}).then(function(snags){
        Mount.findOne({user: req.session.username}).then(function(mounts){
          Mine.findOne({user: req.session.username}).then(function(mines){
    res.render('gold_reset', {
      users:users,
      kukus: kukus,
      snags: snags,
      mounts: mounts,
      mines: mines,
    });
  });
});
});
});
});
});
//==========================//

//====GET MAP RESET===//

app.get('/map_reset', function(req, res){
  User.find({user: req.session.username}).then(function(users){
    res.render('map_reset', {
      users:users,
    });
  });
});
//==========================//

//====GET TOTAL RESET===//

app.get('/total_reset', function(req, res){
  User.find({user: req.session.username}).then(function(users){
    res.render('total_reset', {
      users:users,
    });
  });
});
//==========================//

//====DELETE ALL GOLD===//

app.post('/gold_reset', function(req, res){
  User.find({user: req.session.username}).then(function(users){
    Kuku.findOne({user: req.session.username}).then(function(kukus){
      Snag.findOne({user: req.session.username}).then(function(snags){
        Mount.findOne({user: req.session.username}).then(function(mounts){
          Mine.findOne({user: req.session.username}).then(function(mines){
    Gold1.remove({user: req.session.username}).then(function(gold1){
      Gold19.remove({user: req.session.username}).then(function(gold19){
        Gold22.remove({user: req.session.username}).then(function(gold22){
          Gold24.remove({user: req.session.username}).then(function(gold24){
            Gold102.remove({user: req.session.username}).then(function(gold102){
              Gold156.remove({user: req.session.username}).then(function(gold156){
                Gold167.remove({user: req.session.username}).then(function(gold167){
                  Gold73.remove({user: req.session.username}).then(function(gold73){
                    Gold74.remove({user: req.session.username}).then(function(gold74){
                      Gold200.remove({user: req.session.username}).then(function(gold200){
                        Gold203.remove({user: req.session.username}).then(function(gold203){

      res.render('gold_reset', {
        users: users,
        kukus: kukus,
        mounts: mounts,
        mines: mines,
        snags: snags,
        gold1: gold1,
        gold19: gold19,
        gold22: gold22,
        gold24: gold24,
        gold102: gold102,
        gold156: gold156,
        gold167: gold167,
        gold73: gold73,
        gold74: gold74,
        gold200: gold200,
        gold203: gold203,
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
});
});
});
//==========================//

//====DELETE ALL DISCOVERIES===//

app.post('/total_reset', function(req, res){
  User.find({user: req.session.username}).then(function(users){
    Gold1.remove({user: req.session.username}).then(function(gold1){
      Gold19.remove({user: req.session.username}).then(function(gold19){
        Gold22.remove({user: req.session.username}).then(function(gold22){
          Gold24.remove({user: req.session.username}).then(function(gold24){
            Gold102.remove({user: req.session.username}).then(function(gold102){
              Gold156.remove({user: req.session.username}).then(function(gold156){
                Gold167.remove({user: req.session.username}).then(function(gold167){
                  Gold73.remove({user: req.session.username}).then(function(gold73){
                    Gold74.remove({user: req.session.username}).then(function(gold74){
                      Gold200.remove({user: req.session.username}).then(function(gold200){
                        Gold203.remove({user: req.session.username}).then(function(gold203){
                  Kuku.remove({user: req.session.username}).then(function(kukus){
                    Snag.remove({user: req.session.username}).then(function(snags){
                      Mount.remove({user: req.session.username}).then(function(mounts){
                        Mine.remove({user: req.session.username}).then(function(mines){
                          Croc.remove({user: req.session.username}).then(function(crocs){
                            Spider.remove({user: req.session.username}).then(function(spiders){
                              Bear.remove({user: req.session.username}).then(function(bears){
                                Cave.remove({user: req.session.username}).then(function(caves){
                                  Ruin.remove({user: req.session.username}).then(function(ruins){

      res.render('total_reset', {

        users: users,
        kukus: kukus,
        snags: snags,
        mounts: mounts,
        mines: mines,
        crocs: crocs,
        spiders: spiders,
        bears: bears,
        caves: caves,
        ruins: ruins,
        gold1: gold1,
        gold19: gold19,
        gold22: gold22,
        gold24: gold24,
        gold102: gold102,
        gold156: gold156,
        gold167: gold167,
        gold73: gold73,
        gold74: gold74,
        gold200: gold200,
        gold203: gold203,
                                                  });
                                                });
                                              });
                                            });
                                          });
                                        });
                                      });
                                    });
                                  });
                                });
                              });
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

//==========================//

//====DELETE ALL MAP DATA===//

app.post('/map_reset', function(req, res){
  User.find({user: req.session.username}).then(function(users){
    Kuku.remove({user: req.session.username}).then(function(kukus){
      Snag.remove({user: req.session.username}).then(function(snags){
        Mount.remove({user: req.session.username}).then(function(mounts){
          Mine.remove({user: req.session.username}).then(function(mines){
            Croc.remove({user: req.session.username}).then(function(crocs){
              Spider.remove({user: req.session.username}).then(function(spiders){
                Bear.remove({user: req.session.username}).then(function(bears){
                  Cave.remove({user: req.session.username}).then(function(caves){
                    Ruin.remove({user: req.session.username}).then(function(ruins){

      res.render('map_reset', {
        users: users,
        kukus: kukus,
        snags: snags,
        mounts: mounts,
        mines: mines,
        crocs: crocs,
        spiders: spiders,
        bears: bears,
        caves: caves,
        ruins: ruins,
                            });
                          });
                        });
                      });
                    });
                  });
                });
              });
            });
          });
        });
      });

//==========================//

//====CREATE NEW KUKU===//

app.post('/kuku', function(req, res) {
  Kuku.create({
    kuku: req.body.kuku,
    user: req.session.username,
  }).then(kukus => {
  res.redirect('/page1')
});
});

//==========================//

//====CREATE NEW SNAG===//

app.post('/snag', function(req, res) {
  Snag.create({
    snag: req.body.snag,
    user: req.session.username,
  }).then(snagss => {
  res.redirect('/page100')
});
});

//==========================//

//====CREATE NEW MOUNT===//

app.post('/mount', function(req, res) {
  Mount.create({
    mount: req.body.mount,
    user: req.session.username,
  }).then(mounts => {
  res.redirect('/page152')
});
});

//==========================//

//====CREATE NEW MINE===//

app.post('/mine', function(req, res) {
  Mine.create({
    mine: req.body.mine,
    user: req.session.username,
  }).then(mines => {
  res.redirect('/page170')
});
});

//==========================//

//====CREATE NEW SPIDER===//

app.post('/spider', function(req, res) {
  Spider.create({
    spider: req.body.spider,
    user: req.session.username,
  }).then(spiders => {
  res.redirect('/page41')
});
});

//==========================//

//====CREATE NEW CROC===//

app.post('/croc', function(req, res) {
  Croc.create({
    croc: req.body.croc,
    user: req.session.username,
  }).then(crocs => {
  res.redirect('/page76')
});
});

//==========================//

//====CREATE NEW BEAR===//

app.post('/bear', function(req, res) {
  Bear.create({
    bear: req.body.bear,
    user: req.session.username,
  }).then(bears => {
  res.redirect('/page153')
});
});

//==========================//

//====CREATE NEW CAVE===//

app.post('/cave', function(req, res) {
  Cave.create({
    cave: req.body.cave,
    user: req.session.username,
  }).then(caves => {
  res.redirect('/page15')
});
});

//==========================//

//====CREATE NEW RUIN===//

app.post('/ruin', function(req, res) {
  Ruin.create({
    ruin: req.body.ruin,
    user: req.session.username,
  }).then(ruins => {
  res.redirect('/page72')
});
});

//==========================//

//====RENDER THANKS PAGE===//

app.get('/thanks', function(req, res) {
  res.render('thanks')
});

//==========================//

//====RENDER MAP PAGE===//

app.get('/map', function(req, res) {
  User.find({user: req.session.username}).then(function(users){
    Kuku.findOne({user: req.session.username}).then(function(kukus){
      Snag.findOne({user: req.session.username}).then(function(snags){
        Mount.findOne({user: req.session.username}).then(function(mounts){
          Mine.findOne({user: req.session.username}).then(function(mines){
            Croc.findOne({user: req.session.username}).then(function(crocs){
              Spider.findOne({user: req.session.username}).then(function(spiders){
                Bear.findOne({user: req.session.username}).then(function(bears){
                  Cave.findOne({user: req.session.username}).then(function(caves){
                    Ruin.findOne({user: req.session.username}).then(function(ruins){

      res.render('map', {
        users: users,
        kukus: kukus,
        snags: snags,
        mounts: mounts,
        mines: mines,
        crocs: crocs,
        spiders: spiders,
        bears: bears,
        caves: caves,
        ruins: ruins,
                    });
                  });
                });
              });
            });
          });
        });
      });
    });
  });
});
});

//==========================//

//====RENDER PAGE 0 PAGE===//

app.get('/page0', function(req, res) {
  User.find({username: req.session.username}).then(function(users){
    Kuku.findOne({user: req.session.username}).then(function(kukus){
      Snag.findOne({user: req.session.username}).then(function(snags){
        Mount.findOne({user: req.session.username}).then(function(mounts){
          Mine.findOne({user: req.session.username}).then(function(mines){
  res.render('page0', {
    users: users,
    kukus: kukus,
    snags: snags,
    mounts: mounts,
    mines: mines,
            });
          });
        });
      });
    });
  });
});

//==========================//

//====RENDER PAGE 01 PAGE===//

app.get('/page01', function(req, res) {
  User.find({username: req.session.username}).then(function(users){
  res.render('page01', {
    users: users,
  });
});
});

//==========================//

//====RENDER ENDINGS===//

app.get('/endings', function(req, res) {
  Ending.find({}).then(function (ending)  {
    res.json(ending);
  });
});

//==========================//

//====POST ENDINGS===//

app.post('/endings', function(req, res) {
  Ending.create({
    beginning: req.body.beginning,
    text: req.body.text,
    end: req.body.end,
  }).then(endings => {
  res.json(endings)
});
});

//==========================//

//====RENDER TOWN ENDINGS===//

app.get('/endingTowns', function(req, res) {
  EndingTown.find({}).then(function (endingtown)  {
    res.json(endingtown);
  });
});

//==========================//

//====POST TOWN ENDINGS===//

app.post('/endingTowns', function(req, res) {
  EndingTown.create({
    beginning: req.body.beginning,
    text: req.body.text,
    end: req.body.end,
  }).then(endingtowns => {
  res.json(endingtowns)
});
});

//==========================//

//====RENDER MINE ENDINGS===//

app.get('/endingMines', function(req, res) {
  EndingMine.find({}).then(function (endingmine)  {
    res.json(endingmine);
  });
});

//==========================//

//====POST MINE ENDINGS===//

app.post('/endingMines', function(req, res) {
  EndingMine.create({
    beginning: req.body.beginning,
    text: req.body.text,
    end: req.body.end,
  }).then(endingmines => {
  res.json(endingmines)
});
});

//==========================//

//====RENDER MOUNT ENDINGS===//

app.get('/endingMounts', function(req, res) {
  EndingMount.find({}).then(function (endingmount)  {
    res.json(endingmount);
  });
});

//==========================//

//====POST MOUNT ENDINGS===//

app.post('/endingMounts', function(req, res) {
  EndingMount.create({
    beginning: req.body.beginning,
    text: req.body.text,
    end: req.body.end,
  }).then(endingmounts => {
  res.json(endingmounts)
});
});

//==========================//

//====RENDER PIG ENDINGS===//

app.get('/endingPigs', function(req, res) {
  EndingPig.find({}).then(function (endingpig)  {
    res.json(endingpig);
  });
});

//==========================//

//====POST PIG ENDINGS===//

app.post('/endingPigs', function(req, res) {
  EndingPig.create({
    beginning: req.body.beginning,
    text: req.body.text,
    end: req.body.end,
  }).then(endingpigs => {
  res.json(endingpigs)
});
});

//==========================//

//====RENDER PAGE 1===//

app.get('/page1', function(req, res) {
  Page1.find({}).then(page1 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page1', {
      ifelses: ifelses,
      page1: page1,
    });
    });
  });
});

//==========================//

//====POST PAGE 1===//

app.post('/page1', function(req, res) {
  Page1.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.render('page1')
});
});

//==========================//

//====RENDER PAGE 2===//

app.get('/page2', function(req, res) {
  Page2.find({}).then(page2 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page2', {
      ifelses: ifelses,
      page2: page2,
    });
    })
  });
});

//==========================//

//====POST PAGE 2===//

app.post('/page2', function(req, res) {
  Page2.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
  }).then(page => {
  res.render('page2')
});
});

//==========================//

//====RENDER page3 ===//

app.get('/page3', function(req, res) {
  Page3.find({}).then(page3 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page3', {
      page3: page3,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page3 ===//

app.post('/page3', function(req, res) {
  Page3.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
  }).then(page => {
  res.render('page3')
});
});

//==========================//

//====RENDER page4 ===//

app.get('/page4', function(req, res) {
  Page4.find({}).then(page4 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page4', {
      page4: page4,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page4 ===//

app.post('/page4', function(req, res) {
  Page4.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
  }).then(page => {
  res.render('page4')
});
});

//==========================//

//====RENDER page5 ===//

app.get('/page5', function(req, res) {
  Page5.find({}).then(page5 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page5', {
      page5: page5,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page5 ===//

app.post('/page5', function(req, res) {
  Page5.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
  }).then(page => {
  res.render('page5')
});
});

//==========================//

//====RENDER page6 ===//

app.get('/page6', function(req, res) {
  Page6.find({}).then(page6 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page6', {
      page6: page6,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page6 ===//

app.post('/page6', function(req, res) {
  Page6.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
  }).then(page => {
  res.render('page6')
});
});

//==========================//

//====RENDER page7 ===//

app.get('/page7', function(req, res) {
  Page7.find({}).then(page7 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page7', {
      page7: page7,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page7 ===//

app.post('/page7', function(req, res) {
  Page7.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page7')
});
});

//==========================//

//====RENDER page8 ===//

app.get('/page8', function(req, res) {
  Page8.find({}).then(page8 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page8', {
      page8: page8,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page8 ===//

app.post('/page8', function(req, res) {
  Page8.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page8')
});
});

//==========================//

//====RENDER page9 ===//

app.get('/page9', function(req, res) {
  Page9.find({}).then(page9 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page9', {
      page9: page9,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page9 ===//

app.post('/page9', function(req, res) {
  Page9.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page9')
});
});

//==========================//

//====RENDER page10 ===//

app.get('/page10', function(req, res) {
  Page10.find({}).then(page10 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page10', {
      page10: page10,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page10 ===//

app.post('/page10', function(req, res) {
  Page10.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page10')
});
});

//==========================//

//====RENDER page11 ===//

app.get('/page11', function(req, res) {
  Page11.find({}).then(page11 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page11', {
      page11: page11,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page11 ===//

app.post('/page11', function(req, res) {
  Page11.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page11')
});
});

//==========================//

//====RENDER page12 ===//

app.get('/page12', function(req, res) {
  Page12.find({}).then(page12 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page12', {
      page12: page12,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page12 ===//

app.post('/page12', function(req, res) {
  Page12.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page12')
});
});

//==========================//

//====RENDER page13 ===//

app.get('/page13', function(req, res) {
  Page13.find({}).then(page13 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page13', {
      page13: page13,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page13 ===//

app.post('/page13', function(req, res) {
  Page13.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page13')
});
});

//==========================//

//====RENDER page14 ===//

app.get('/page14', function(req, res) {
  Page14.find({}).then(page14 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page14', {
      page14: page14,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page14 ===//

app.post('/page14', function(req, res) {
  Page14.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page14')
});
});

//==========================//

//====RENDER page15 ===//

app.get('/page15', function(req, res) {
  Page15.find({}).then(page15 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page15', {
      page15: page15,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page15 ===//

app.post('/page15', function(req, res) {
  Page15.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page15')
});
});

//==========================//

//====RENDER page16 ===//

app.get('/page16', function(req, res) {
  Page16.find({}).then(page16 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page16', {
      page16: page16,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page16 ===//

app.post('/page16', function(req, res) {
  Page16.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page16')
});
});

//==========================//

//====RENDER page17 ===//

app.get('/page17', function(req, res) {
  Page17.find({}).then(page17 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page17', {
      page17: page17,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page17 ===//

app.post('/page17', function(req, res) {
  Page17.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page17')
});
});

//==========================//

//====RENDER page18 ===//

app.get('/page18', function(req, res) {
  Page18.find({}).then(page18 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page18', {
      page18: page18,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page18 ===//

app.post('/page18', function(req, res) {
  Page18.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page18')
});
});

//==========================//

//====RENDER page19 ===//

app.get('/page19', function(req, res) {
  Page19.find({}).then(page19 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page19', {
      page19: page19,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page19 ===//

app.post('/page19', function(req, res) {
  Page19.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page19')
});
});

//==========================//

//====RENDER page20 ===//

app.get('/page20', function(req, res) {
  Page20.find({}).then(page20 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page20', {
      page20: page20,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page20 ===//

app.post('/page20', function(req, res) {
  Page20.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page20')
});
});

//==========================//

//====RENDER page21 ===//

app.get('/page21', function(req, res) {
  Page21.find({}).then(page21 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page21', {
      page21: page21,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page21 ===//

app.post('/page21', function(req, res) {
  Page21.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page21')
});
});

//==========================//

//====RENDER page22 ===//

app.get('/page22', function(req, res) {
  Page22.find({}).then(page22 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page22', {
      page22: page22,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page22 ===//

app.post('/page22', function(req, res) {
  Page22.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page22')
});
});

//==========================//

//====RENDER page23 ===//

app.get('/page23', function(req, res) {
  Page23.find({}).then(page23 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page23', {
      page23: page23,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page23 ===//

app.post('/page23', function(req, res) {
  Page23.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page23')
});
});

//==========================//

//====RENDER page24 ===//

app.get('/page24', function(req, res) {
  Page24.find({}).then(page24 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page24', {
      page24: page24,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page24 ===//

app.post('/page24', function(req, res) {
  Page24.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page24')
});
});

//==========================//

//====RENDER page25 ===//

app.get('/page25', function(req, res) {
  Page25.find({}).then(page25 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page25', {
      page25: page25,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page25 ===//

app.post('/page25', function(req, res) {
  Page25.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page25')
});
});

//==========================//

//====RENDER page26 ===//

app.get('/page26', function(req, res) {
  Page26.find({}).then(page26 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page26', {
      page26: page26,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page26 ===//

app.post('/page26', function(req, res) {
  Page26.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.render('page26')
});
});

//==========================//

//====RENDER page27 ===//

app.get('/page27', function(req, res) {
  Page27.find({}).then(function(page27) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page27', {
        page27: page27,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page27 ===//

app.post('/page27', function(req, res) {
  Page27.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page28 ===//

app.get('/page28', function(req, res) {
  Page28.find({}).then(function(page28) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page28', {
        page28: page28,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page28 ===//

app.post('/page28', function(req, res) {
  Page28.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page29 ===//

app.get('/page29', function(req, res) {
  Page29.find({}).then(function(page29) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page29', {
        page29: page29,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page29 ===//

app.post('/page29', function(req, res) {
  Page29.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page30 ===//

app.get('/page30', function(req, res) {
  Page30.find({}).then(function(page30) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page30', {
        page30: page30,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page30 ===//

app.post('/page30', function(req, res) {
  Page30.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page31 ===//

app.get('/page31', function(req, res) {
  Page31.find({}).then(function(page31) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page31', {
        page31: page31,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page31 ===//

app.post('/page31', function(req, res) {
  Page31.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page32 ===//

app.get('/page32', function(req, res) {
  Page32.find({}).then(function(page32) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page32', {
        page32: page32,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page32 ===//

app.post('/page32', function(req, res) {
  Page32.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page33 ===//

app.get('/page33', function(req, res) {
  Page33.find({}).then(function(page33) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page33', {
        page33: page33,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page33 ===//

app.post('/page33', function(req, res) {
  Page33.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page34 ===//

app.get('/page34', function(req, res) {
  Page34.find({}).then(function(page34) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page34', {
        page34: page34,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page34 ===//

app.post('/page34', function(req, res) {
  Page34.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page35 ===//

app.get('/page35', function(req, res) {
  Page35.find({}).then(function(page35) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page35', {
        page35: page35,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page35 ===//

app.post('/page35', function(req, res) {
  Page35.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page36 ===//

app.get('/page36', function(req, res) {
  Page36.find({}).then(function(page36) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page36', {
        page36: page36,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page36 ===//

app.post('/page36', function(req, res) {
  Page36.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page37 ===//

app.get('/page37', function(req, res) {
  Page37.find({}).then(function(page37) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page37', {
        page37: page37,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page37 ===//

app.post('/page37', function(req, res) {
  Page37.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page38 ===//

app.get('/page38', function(req, res) {
  Page38.find({}).then(function(page38) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page38', {
        page38: page38,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page38 ===//

app.post('/page38', function(req, res) {
  Page38.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page39 ===//

app.get('/page39', function(req, res) {
  Page39.find({}).then(function(page39) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page39', {
        page39: page39,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page39 ===//

app.post('/page39', function(req, res) {
  Page39.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page40 ===//

app.get('/page40', function(req, res) {
  Page40.find({}).then(function(page40) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page40', {
        page40: page40,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page40 ===//

app.post('/page40', function(req, res) {
  Page40.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page41 ===//

app.get('/page41', function(req, res) {
  Page41.find({}).then(page41 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page41', {
      page41: page41,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page41 ===//

app.post('/page41', function(req, res) {
  Page41.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page42 ===//

app.get('/page42', function(req, res) {
  Page42.find({}).then(function(page42) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page42', {
        page42: page42,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page42 ===//

app.post('/page42', function(req, res) {
  Page42.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page43 ===//

app.get('/page43', function(req, res) {
  Page43.find({}).then(function(page43) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page43', {
        page43: page43,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page43 ===//

app.post('/page43', function(req, res) {
  Page43.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page44 ===//

app.get('/page44', function(req, res) {
  Page44.find({}).then(function(page44) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page44', {
        page44: page44,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page44 ===//

app.post('/page44', function(req, res) {
  Page44.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page45 ===//

app.get('/page45', function(req, res) {
  Page45.find({}).then(function(page45) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page45', {
        page45: page45,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page45 ===//

app.post('/page45', function(req, res) {
  Page45.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page46 ===//

app.get('/page46', function(req, res) {
  Page46.find({}).then(function(page46) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page46', {
        page46: page46,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page46 ===//

app.post('/page46', function(req, res) {
  Page46.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page47 ===//

app.get('/page47', function(req, res) {
  Page47.find({}).then(function(page47) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page47', {
        page47: page47,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page47 ===//

app.post('/page47', function(req, res) {
  Page47.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page48 ===//

app.get('/page48', function(req, res) {
  Page48.find({}).then(function(page48) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page48', {
        page48: page48,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page48 ===//

app.post('/page48', function(req, res) {
  Page48.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page49 ===//

app.get('/page49', function(req, res) {
  Page49.find({}).then(function(page49) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page49', {
        page49: page49,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page49 ===//

app.post('/page49', function(req, res) {
  Page49.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page50 ===//

app.get('/page50', function(req, res) {
  Page50.find({}).then(function(page50) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page50', {
        page50: page50,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page50 ===//

app.post('/page50', function(req, res) {
  Page50.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page51 ===//

app.get('/page51', function(req, res) {
  Page51.find({}).then(function(page51) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page51', {
        page51: page51,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page51 ===//

app.post('/page51', function(req, res) {
  Page51.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page52 ===//

app.get('/page52', function(req, res) {
  Page52.find({}).then(function(page52) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page52', {
        page52: page52,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page52 ===//

app.post('/page52', function(req, res) {
  Page52.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page53 ===//

app.get('/page53', function(req, res) {
  Page53.find({}).then(function(page53) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page53', {
        page53: page53,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page53 ===//

app.post('/page53', function(req, res) {
  Page53.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page54 ===//

app.get('/page54', function(req, res) {
  Page54.find({}).then(function(page54) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page54', {
        page54: page54,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page54 ===//

app.post('/page54', function(req, res) {
  Page54.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page55 ===//

app.get('/page55', function(req, res) {
  Page55.find({}).then(function(page55) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page55', {
        page55: page55,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page55 ===//

app.post('/page55', function(req, res) {
  Page55.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page56 ===//

app.get('/page56', function(req, res) {
  Page56.find({}).then(function(page56) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page56', {
        page56: page56,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page56 ===//

app.post('/page56', function(req, res) {
  Page56.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page57 ===//

app.get('/page57', function(req, res) {
  Page57.find({}).then(function(page57) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page57', {
        page57: page57,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page57 ===//

app.post('/page57', function(req, res) {
  Page57.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page58 ===//

app.get('/page58', function(req, res) {
  Page58.find({}).then(function(page58) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page58', {
        page58: page58,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page58 ===//

app.post('/page58', function(req, res) {
  Page58.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page59 ===//

app.get('/page59', function(req, res) {
  Page59.find({}).then(function(page59) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page59', {
        page59: page59,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page59 ===//

app.post('/page59', function(req, res) {
  Page59.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page60 ===//

app.get('/page60', function(req, res) {
  Page60.find({}).then(function(page60) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page60', {
        page60: page60,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page60 ===//

app.post('/page60', function(req, res) {
  Page60.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page61 ===//

app.get('/page61', function(req, res) {
  Page61.find({}).then(function(page61) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page61', {
        page61: page61,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page61 ===//

app.post('/page61', function(req, res) {
  Page61.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page62 ===//

app.get('/page62', function(req, res) {
  Page62.find({}).then(function(page62) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page62', {
        page62: page62,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page62 ===//

app.post('/page62', function(req, res) {
  Page62.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page63 ===//

app.get('/page63', function(req, res) {
  Page63.find({}).then(function(page63) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page63', {
        page63: page63,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page63 ===//

app.post('/page63', function(req, res) {
  Page63.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page64 ===//

app.get('/page64', function(req, res) {
  Page64.find({}).then(function(page64) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page64', {
        page64: page64,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page64 ===//

app.post('/page64', function(req, res) {
  Page64.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page65 ===//

app.get('/page65', function(req, res) {
  Page65.find({}).then(function(page65) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page65', {
        page65: page65,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page65 ===//

app.post('/page65', function(req, res) {
  Page65.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page66 ===//

app.get('/page66', function(req, res) {
  Page66.find({}).then(function(page66) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page66', {
        page66: page66,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page66 ===//

app.post('/page66', function(req, res) {
  Page66.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page67 ===//

app.get('/page67', function(req, res) {
  Page67.find({}).then(function(page67) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page67', {
        page67: page67,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page67 ===//

app.post('/page67', function(req, res) {
  Page67.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page68 ===//

app.get('/page68', function(req, res) {
  Page68.find({}).then(function(page68) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page68', {
        page68: page68,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page68 ===//

app.post('/page68', function(req, res) {
  Page68.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page69 ===//

app.get('/page69', function(req, res) {
  Page69.find({}).then(function(page69) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page69', {
        page69: page69,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page69 ===//

app.post('/page69', function(req, res) {
  Page69.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page70 ===//

app.get('/page70', function(req, res) {
  Page70.find({}).then(function(page70) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page70', {
        page70: page70,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page70 ===//

app.post('/page70', function(req, res) {
  Page70.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page71 ===//

app.get('/page71', function(req, res) {
  Page71.find({}).then(function(page71) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page71', {
        page71: page71,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page71 ===//

app.post('/page71', function(req, res) {
  Page71.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page72 ===//

app.get('/page72', function(req, res) {
  Page72.find({}).then(function(page72) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page72', {
        page72: page72,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page72 ===//

app.post('/page72', function(req, res) {
  Page72.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page73 ===//

app.get('/page73', function(req, res) {
  Page73.find({}).then(function(page73) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page73', {
        page73: page73,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page73 ===//

app.post('/page73', function(req, res) {
  Page73.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page74 ===//

app.get('/page74', function(req, res) {
  Page74.find({}).then(function(page74) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page74', {
        page74: page74,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page74 ===//

app.post('/page74', function(req, res) {
  Page74.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page75 ===//

app.get('/page75', function(req, res) {
  Page75.find({}).then(function(page75) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page75', {
        page75: page75,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page75 ===//

app.post('/page75', function(req, res) {
  Page75.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page76 ===//

app.get('/page76', function(req, res) {
  Page76.find({}).then(page76 => {
    Ifelse.aggregate().sample(1).then(function(ifelses){
    res.render('page76', {
      page76: page76,
      ifelses: ifelses,
    });
    })
  });
});

//==========================//

//====POST page76 ===//

app.post('/page76', function(req, res) {
  Page76.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page77 ===//

app.get('/page77', function(req, res) {
  Page77.find({}).then(function(page77) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page77', {
        page77: page77,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page77 ===//

app.post('/page77', function(req, res) {
  Page77.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page78 ===//

app.get('/page78', function(req, res) {
  Page78.find({}).then(function(page78) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page78', {
        page78: page78,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page78 ===//

app.post('/page78', function(req, res) {
  Page78.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page79 ===//

app.get('/page79', function(req, res) {
  Page79.find({}).then(function(page79) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page79', {
        page79: page79,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page79 ===//

app.post('/page79', function(req, res) {
  Page79.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page80 ===//

app.get('/page80', function(req, res) {
  Page80.find({}).then(function(page80) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page80', {
        page80: page80,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page80 ===//

app.post('/page80', function(req, res) {
  Page80.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page81 ===//

app.get('/page81', function(req, res) {
  Page81.find({}).then(function(page81) {
    Ending.aggregate().sample(1).then(function(endings){
      req.session.destroy()
      res.render('page81', {
        page81: page81,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page81 ===//

app.post('/page81', function(req, res) {
  Page81.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page82 ===//

app.get('/page82', function(req, res) {
  Page82.find({}).then(function(page82) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page82', {
        page82: page82,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page82 ===//

app.post('/page82', function(req, res) {
  Page82.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page83 ===//

app.get('/page83', function(req, res) {
  Page83.find({}).then(function(page83) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page83', {
        page83: page83,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page83 ===//

app.post('/page83', function(req, res) {
  Page83.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page84 ===//

app.get('/page84', function(req, res) {
  Page84.find({}).then(function(page84) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page84', {
        page84: page84,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page84 ===//

app.post('/page84', function(req, res) {
  Page84.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page85 ===//

app.get('/page85', function(req, res) {
  Page85.find({}).then(function(page85) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page85', {
        page85: page85,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page85 ===//

app.post('/page85', function(req, res) {
  Page85.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page86 ===//

app.get('/page86', function(req, res) {
  Page86.find({}).then(function(page86) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page86', {
        page86: page86,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page86 ===//

app.post('/page86', function(req, res) {
  Page86.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page87 ===//

app.get('/page87', function(req, res) {
  Page87.find({}).then(function(page87) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page87', {
        page87: page87,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page87 ===//

app.post('/page87', function(req, res) {
  Page87.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page88 ===//

app.get('/page88', function(req, res) {
  Page88.find({}).then(function(page88) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page88', {
        page88: page88,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page88 ===//

app.post('/page88', function(req, res) {
  Page88.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page89 ===//

app.get('/page89', function(req, res) {
  Page89.find({}).then(function(page89) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page89', {
        page89: page89,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page89 ===//

app.post('/page89', function(req, res) {
  Page89.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page90 ===//

app.get('/page90', function(req, res) {
  Page90.find({}).then(function(page90) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page90', {
        page90: page90,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page90 ===//

app.post('/page90', function(req, res) {
  Page90.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page91 ===//

app.get('/page91', function(req, res) {
  Page91.find({}).then(function(page91) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page91', {
        page91: page91,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page91 ===//

app.post('/page91', function(req, res) {
  Page91.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page92 ===//

app.get('/page92', function(req, res) {
  Page92.find({}).then(function(page92) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page92', {
        page92: page92,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page92 ===//

app.post('/page92', function(req, res) {
  Page92.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page93 ===//

app.get('/page93', function(req, res) {
  Page93.find({}).then(function(page93) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page93', {
        page93: page93,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page93 ===//

app.post('/page93', function(req, res) {
  Page93.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page94 ===//

app.get('/page94', function(req, res) {
  Page94.find({}).then(function(page94) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page94', {
        page94: page94,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page94 ===//

app.post('/page94', function(req, res) {
  Page94.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page95 ===//

app.get('/page95', function(req, res) {
  Page95.find({}).then(function(page95) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page95', {
        page95: page95,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page95 ===//

app.post('/page95', function(req, res) {
  Page95.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page96 ===//

app.get('/page96', function(req, res) {
  Page96.find({}).then(function(page96) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page96', {
        page96: page96,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page96 ===//

app.post('/page96', function(req, res) {
  Page96.create({
    text: req.body.text,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page100 ===//

app.get('/page100', function(req, res) {
  Page100.find({}).then(function(page100) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page100', {
        jsons: jsons,
        page100: page100,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page100 ===//

app.post('/page100', function(req, res) {
  Page100.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page101 ===//

app.get('/page101', function(req, res) {
  Page101.find({}).then(function(page101) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page101', {
        jsons: jsons,
        page101: page101,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page101 ===//

app.post('/page101', function(req, res) {
  Page101.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page102 ===//

app.get('/page102', function(req, res) {
  Page102.find({}).then(function(page102) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page102', {
        jsons: jsons,
        page102: page102,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page102 ===//

app.post('/page102', function(req, res) {
  Page102.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page103 ===//

app.get('/page103', function(req, res) {
  Page103.find({}).then(function(page103) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page103', {
        page103: page103,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page103 ===//

app.post('/page103', function(req, res) {
  Page103.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page104 ===//

app.get('/page104', function(req, res) {
  Page104.find({}).then(function(page104) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page104', {
        page104: page104,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page104 ===//

app.post('/page104', function(req, res) {
  Page104.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page105 ===//

app.get('/page105', function(req, res) {
  Page105.find({}).then(function(page105) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page105', {
        jsons: jsons,
        page105: page105,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page105 ===//

app.post('/page105', function(req, res) {
  Page105.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page106 ===//

app.get('/page106', function(req, res) {
  Page106.find({}).then(function(page106) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page106', {
        page106: page106,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page106 ===//

app.post('/page106', function(req, res) {
  Page106.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page107 ===//

app.get('/page107', function(req, res) {
  Page107.find({}).then(function(page107) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page107', {
        page107: page107,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page107 ===//

app.post('/page107', function(req, res) {
  Page107.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page108 ===//

app.get('/page108', function(req, res) {
  Page108.find({}).then(function(page108) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page108', {
        jsons: jsons,
        page108: page108,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page108 ===//

app.post('/page108', function(req, res) {
  Page108.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page109 ===//

app.get('/page109', function(req, res) {
  Page109.find({}).then(function(page109) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page109', {
        jsons: jsons,
        page109: page109,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page109 ===//

app.post('/page109', function(req, res) {
  Page109.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page110 ===//

app.get('/page110', function(req, res) {
  Page110.find({}).then(function(page110) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page110', {
        jsons: jsons,
        page110: page110,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page110 ===//

app.post('/page110', function(req, res) {
  Page110.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page111 ===//

app.get('/page111', function(req, res) {
  Page111.find({}).then(function(page111) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page111', {
        page111: page111,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page111 ===//

app.post('/page111', function(req, res) {
  Page111.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page112 ===//

app.get('/page112', function(req, res) {
  Page112.find({}).then(function(page112) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page112', {
        page112: page112,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page112 ===//

app.post('/page112', function(req, res) {
  Page112.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page113 ===//

app.get('/page113', function(req, res) {
  Page113.find({}).then(function(page113) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page113', {
        page113: page113,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page113 ===//

app.post('/page113', function(req, res) {
  Page113.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page114 ===//

app.get('/page114', function(req, res) {
  Page114.find({}).then(function(page114) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page114', {
        page114: page114,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page114 ===//

app.post('/page114', function(req, res) {
  Page114.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page115 ===//

app.get('/page115', function(req, res) {
  Page115.find({}).then(function(page115) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page115', {
        jsons: jsons,
        page115: page115,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page115 ===//

app.post('/page115', function(req, res) {
  Page115.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page116 ===//

app.get('/page116', function(req, res) {
  Page116.find({}).then(function(page116) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page116', {
        jsons: jsons,
        page116: page116,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page116 ===//

app.post('/page116', function(req, res) {
  Page116.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option3: req.body.option4,
    option3: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page117 ===//

app.get('/page117', function(req, res) {
  Page117.find({}).then(function(page117) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page117', {
        jsons: jsons,
        page117: page117,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page117 ===//

app.post('/page117', function(req, res) {
  Page117.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page118 ===//

app.get('/page118', function(req, res) {
  Page118.find({}).then(function(page118) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page118', {
        jsons: jsons,
        page118: page118,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page118 ===//

app.post('/page118', function(req, res) {
  Page118.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page119 ===//

app.get('/page119', function(req, res) {
  Page119.find({}).then(function(page119) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page119', {
        page119: page119,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page119 ===//

app.post('/page119', function(req, res) {
  Page119.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page120 ===//

app.get('/page120', function(req, res) {
  Page120.find({}).then(function(page120) {
    EndingTown.aggregate().sample(1).then(function(endingtowns){
      res.render('page120', {
        page120: page120,
        endingtowns: endingtowns,
      })
    })
  })
})

//==========================//

//====POST page120 ===//

app.post('/page120', function(req, res) {
  Page120.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page121 ===//

app.get('/page121', function(req, res) {
  Page121.find({}).then(function(page121) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page121', {
        page121: page121,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page121 ===//

app.post('/page121', function(req, res) {
  Page121.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page122 ===//

app.get('/page122', function(req, res) {
  Page122.find({}).then(function(page122) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page122', {
        page122: page122,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page122 ===//

app.post('/page122', function(req, res) {
  Page122.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page123 ===//

app.get('/page123', function(req, res) {
  Page123.find({}).then(function(page123) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page123', {
        page123: page123,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page123 ===//

app.post('/page123', function(req, res) {
  Page123.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page124 ===//

app.get('/page124', function(req, res) {
  Page124.find({}).then(function(page124) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page124', {
        jsons: jsons,
        page124: page124,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page124 ===//

app.post('/page124', function(req, res) {
  Page124.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page130 ===//

app.get('/page130', function(req, res) {
  Page130.find({}).then(function(page130) {
    EndingTown.aggregate().sample(1).then(function(endings){
      Json.aggregate().sample(1).then(function(jsons){
      res.render('page130', {
        jsons: jsons,
        page130: page130,
        endings: endings,
      })
      })
    })
  })
})

//==========================//

//====POST page130 ===//

app.post('/page130', function(req, res) {
  Page130.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page150 ===//

app.get('/page150', function(req, res) {
  Page150.find({}).then(function(page150) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page150', {
        page150: page150,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page150 ===//

app.post('/page150', function(req, res) {
  Page150.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page151 ===//

app.get('/page151', function(req, res) {
  Page151.find({}).then(function(page151) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page151', {
        page151: page151,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page151 ===//

app.post('/page151', function(req, res) {
  Page151.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page152 ===//

app.get('/page152', function(req, res) {
  Page152.find({}).then(function(page152) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page152', {
        dots: dots,
        page152: page152,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page152 ===//

app.post('/page152', function(req, res) {
  Page152.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page153 ===//

app.get('/page153', function(req, res) {
  Page153.find({}).then(function(page153) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page153', {
        dots: dots,
        page153: page153,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page153 ===//

app.post('/page153', function(req, res) {
  Page153.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page154 ===//

app.get('/page154', function(req, res) {
  Page154.find({}).then(function(page154) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page154', {
        dots: dots,
        page154: page154,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page154 ===//

app.post('/page154', function(req, res) {
  Page154.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page155 ===//

app.get('/page155', function(req, res) {
  Page155.find({}).then(function(page155) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page155', {
        dots: dots,
        page155: page155,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page155 ===//

app.post('/page155', function(req, res) {
  Page155.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page156 ===//

app.get('/page156', function(req, res) {
  Page156.find({}).then(function(page156) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page156', {
        dots: dots,
        page156: page156,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page156 ===//

app.post('/page156', function(req, res) {
  Page156.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page157 ===//

app.get('/page157', function(req, res) {
  Page157.find({}).then(function(page157) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page157', {
        dots: dots,
        page157: page157,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page157 ===//

app.post('/page157', function(req, res) {
  Page157.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page158 ===//

app.get('/page158', function(req, res) {
  Page158.find({}).then(function(page158) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page158', {
        page158: page158,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page158 ===//

app.post('/page158', function(req, res) {
  Page158.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page159 ===//

app.get('/page159', function(req, res) {
  Page159.find({}).then(function(page159) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page159', {
        dots: dots,
        page159: page159,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page159 ===//

app.post('/page159', function(req, res) {
  Page159.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page160 ===//

app.get('/page160', function(req, res) {
  Page160.find({}).then(function(page160) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page160', {
        page160: page160,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page160 ===//

app.post('/page160', function(req, res) {
  Page160.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page161 ===//

app.get('/page161', function(req, res) {
  Page161.find({}).then(function(page161) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page161', {
        page161: page161,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page161 ===//

app.post('/page161', function(req, res) {
  Page161.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page162 ===//

app.get('/page162', function(req, res) {
  Page162.find({}).then(function(page162) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page162', {
        dots: dots,
        page162: page162,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page162 ===//

app.post('/page162', function(req, res) {
  Page162.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page163 ===//

app.get('/page163', function(req, res) {
  Page163.find({}).then(function(page163) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page163', {
        page163: page163,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page163 ===//

app.post('/page163', function(req, res) {
  Page163.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page164 ===//

app.get('/page164', function(req, res) {
  Page164.find({}).then(function(page164) {
    EndingMine.aggregate().sample(1).then(function(endingmines){
      res.render('page164', {
        page164: page164,
        endingmines: endingmines,
      })
    })
  })
})

//==========================//

//====POST page164 ===//

app.post('/page164', function(req, res) {
  Page164.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page165 ===//

app.get('/page165', function(req, res) {
  Page165.find({}).then(function(page165) {
    EndingMine.aggregate().sample(1).then(function(endingmines){
      res.render('page165', {
        page165: page165,
        endingmines: endingmines,
      })
    })
  })
})

//==========================//

//====POST page165 ===//

app.post('/page165', function(req, res) {
  Page165.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page166 ===//

app.get('/page166', function(req, res) {
  Page166.find({}).then(function(page166) {
    EndingMine.aggregate().sample(1).then(function(endingmines){
      res.render('page166', {
        page166: page166,
        endingmines: endingmines,
      })
    })
  })
})

//==========================//

//====POST page166 ===//

app.post('/page166', function(req, res) {
  Page166.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page167 ===//

app.get('/page167', function(req, res) {
  Page167.find({}).then(function(page167) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page167', {
        dots: dots,
        page167: page167,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page167 ===//

app.post('/page167', function(req, res) {
  Page167.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page168 ===//

app.get('/page168', function(req, res) {
  Page168.find({}).then(function(page168) {
    EndingMine.aggregate().sample(1).then(function(endingmines){
      res.render('page168', {
        page168: page168,
        endingmines: endingmines,
      })
    })
  })
})

//==========================//

//====POST page168 ===//

app.post('/page168', function(req, res) {
  Page168.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page169 ===//

app.get('/page169', function(req, res) {
  Page169.find({}).then(function(page169) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page169', {
        page169: page169,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page169 ===//

app.post('/page169', function(req, res) {
  Page169.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page170 ===//

app.get('/page170', function(req, res) {
  Page170.find({}).then(function(page170) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page170', {
        page170: page170,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page170 ===//

app.post('/page170', function(req, res) {
  Page170.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page171 ===//

app.get('/page171', function(req, res) {
  Page171.find({}).then(function(page171) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page171', {
        page171: page171,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page171 ===//

app.post('/page171', function(req, res) {
  Page171.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page172 ===//

app.get('/page172', function(req, res) {
  Page172.find({}).then(function(page172) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page172', {
        dots: dots,
        page172: page172,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page172 ===//

app.post('/page172', function(req, res) {
  Page172.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page173 ===//

app.get('/page173', function(req, res) {
  Page173.find({}).then(function(page173) {
    EndingMine.aggregate().sample(1).then(function(endingmines){
      res.render('page173', {
        page173: page173,
        endingmines: endingmines,
      })
    })
  })
})

//==========================//

//====POST page173 ===//

app.post('/page173', function(req, res) {
  Page173.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page174 ===//

app.get('/page174', function(req, res) {
  Page174.find({}).then(function(page174) {
    Ending.aggregate().sample(1).then(function(endings){
      res.render('page174', {
        page174: page174,
        endings: endings,
      })
    })
  })
})

//==========================//

//====POST page174 ===//

app.post('/page174', function(req, res) {
  Page174.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page175 ===//

app.get('/page175', function(req, res) {
  Page175.find({}).then(function(page175) {
    Ending.aggregate().sample(1).then(function(endings){
      Dot.aggregate().sample(1).then(function(dots){
      res.render('page175', {
        dots: dots,
        page175: page175,
        endings: endings,
      });
      })
    })
  })
})

//==========================//

//====POST page175 ===//

app.post('/page175', function(req, res) {
  Page175.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page176 ===//

app.get('/page176', function(req, res) {
  Page176.find({}).then(function(page176) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page176', {
        page176: page176,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page176 ===//

app.post('/page176', function(req, res) {
  Page176.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page177 ===//

app.get('/page177', function(req, res) {
  Page177.find({}).then(function(page177) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page177', {
        page177: page177,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page177 ===//

app.post('/page177', function(req, res) {
  Page177.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page178 ===//

app.get('/page178', function(req, res) {
  Page178.find({}).then(function(page178) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page178', {
        page178: page178,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page178 ===//

app.post('/page178', function(req, res) {
  Page178.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page200 ===//

app.get('/page200', function(req, res) {
  Page200.find({}).then(function(page200) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page200', {
        page200: page200,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page200 ===//

app.post('/page200', function(req, res) {
  Page200.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page201 ===//

app.get('/page201', function(req, res) {
  Page201.find({}).then(function(page201) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page201', {
        page201: page201,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page201 ===//

app.post('/page201', function(req, res) {
  Page201.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page202 ===//

app.get('/page202', function(req, res) {
  Page202.find({}).then(function(page202) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page202', {
        page202: page202,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page202 ===//

app.post('/page202', function(req, res) {
  Page202.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page203 ===//

app.get('/page203', function(req, res) {
  Page203.find({}).then(function(page203) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page203', {
        page203: page203,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page203 ===//

app.post('/page203', function(req, res) {
  Page203.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page204 ===//

app.get('/page204', function(req, res) {
  Page204.find({}).then(function(page204) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page204', {
        page204: page204,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page204 ===//

app.post('/page204', function(req, res) {
  Page204.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page205 ===//

app.get('/page205', function(req, res) {
  Page205.find({}).then(function(page205) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page205', {
        page205: page205,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page205 ===//

app.post('/page205', function(req, res) {
  Page205.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page206 ===//

app.get('/page206', function(req, res) {
  Page206.find({}).then(function(page206) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page206', {
        page206: page206,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page206 ===//

app.post('/page206', function(req, res) {
  Page206.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//====RENDER page207 ===//

app.get('/page207', function(req, res) {
  Page207.find({}).then(function(page207) {
    EndingMount.aggregate().sample(1).then(function(endingmounts){
      res.render('page207', {
        page207: page207,
        endingmounts: endingmounts,
      })
    })
  })
})

//==========================//

//====POST page207 ===//

app.post('/page207', function(req, res) {
  Page207.create({
    text: req.body.text,
    option1: req.body.option1,
    option2: req.body.option2,
    option3: req.body.option3,
    option4: req.body.option4,
    option5: req.body.option5,
  }).then(page => {
  res.redirect('/thanks')
});
});

//==========================//

//==== LOGOUT ===//

app.post('/logout', function(req, res) {
  req.session.destroy(function(err) {})
  res.redirect('/home');
  console.log(req.session);
});

//==========================//

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//

//====EXPORT APP===//

// module.exports = app;

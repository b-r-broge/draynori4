//=====MODELS======//
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
const page38 = require('./models/page38.js');
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

//=================//

//====LIST DEPENDENCIES===//
const express = require('express');
const parseurl = require('parseurl');
const bodyParser = require('body-parser');
const path = require('path');
const expressValidator = require('express-validator');
const mongoose = require('mongoose');
const mustacheExpress = require('mustache-express');
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

//====RENDER THANKS PAGE===//

app.get('/thanks', function(req, res) {
  res.render('thanks')
});

//==========================//

//====RENDER THANKS PAGE===//

app.get('/page0', function(req, res) {
  res.render('page0')
});

//==========================//

//====RENDER PAGE 1===//

app.get('/page1', function(req, res) {
  Page1.find({}).then(page1 => {
    res.render('page1', {
      page1: page1,
    })
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
    res.render('page2', {
      page2: page2,
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
    res.render('page3', {
      page3: page3,
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
    res.render('page4', {
      page4: page4,
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
    res.render('page5', {
      page5: page5,
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
    res.render('page6', {
      page6: page6,
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
    res.render('page7', {
      page7: page7,
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
    res.render('page8', {
      page8: page8,
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
    res.render('page9', {
      page9: page9,
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
    res.render('page10', {
      page10: page10,
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
    res.render('page11', {
      page11: page11,
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
    res.render('page12', {
      page12: page12,
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
    res.render('page13', {
      page13: page13,
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
    res.render('page14', {
      page14: page14,
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
    res.render('page15', {
      page15: page15,
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
    res.render('page16', {
      page16: page16,
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
    res.render('page17', {
      page17: page17,
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
    res.render('page18', {
      page18: page18,
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
    res.render('page19', {
      page19: page19,
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
    res.render('page20', {
      page20: page20,
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
    res.render('page21', {
      page21: page21,
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
    res.render('page22', {
      page22: page22,
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
    res.render('page23', {
      page23: page23,
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
    res.render('page24', {
      page24: page24,
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
    res.render('page25', {
      page25: page25,
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
    res.render('page26', {
      page26: page26,
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
  Page27.find({}).then(page27 => {
    res.render('page27', {
      page27: page27,
    })
  });
});

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
  Page28.find({}).then(page28 => {
    res.render('page28', {
      page28: page28,
    })
  });
});

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
  Page29.find({}).then(page29 => {
    res.render('page29', {
      page29: page29,
    })
  });
});

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
  Page30.find({}).then(page30 => {
    res.render('page30', {
      page30: page30,
    })
  });
});

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
  Page31.find({}).then(page31 => {
    res.render('page31', {
      page31: page31,
    })
  });
});

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
  Page32.find({}).then(page32 => {
    res.render('page32', {
      page32: page32,
    })
  });
});

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
  Page33.find({}).then(page33 => {
    res.render('page33', {
      page33: page33,
    })
  });
});

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
  Page34.find({}).then(page34 => {
    res.render('page34', {
      page34: page34,
    })
  });
});

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
  Page35.find({}).then(page35 => {
    res.render('page35', {
      page35: page35,
    })
  });
});

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
  Page36.find({}).then(page36 => {
    res.render('page36', {
      page36: page36,
    })
  });
});

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
  Page37.find({}).then(page37 => {
    res.render('page37', {
      page37: page37,
    })
  });
});

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
  Page38.find({}).then(page38 => {
    res.render('page38', {
      page38: page38,
    })
  });
});

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
  Page39.find({}).then(page39 => {
    res.render('page39', {
      page39: page39,
    })
  });
});

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
  Page40.find({}).then(page40 => {
    res.render('page40', {
      page40: page40,
    })
  });
});

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
    res.render('page41', {
      page41: page41,
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
  Page42.find({}).then(page42 => {
    res.render('page42', {
      page42: page42,
    })
  });
});

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
  Page43.find({}).then(page43 => {
    res.render('page43', {
      page43: page43,
    })
  });
});

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
  Page44.find({}).then(page44 => {
    res.render('page44', {
      page44: page44,
    })
  });
});

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
  Page45.find({}).then(page45 => {
    res.render('page45', {
      page45: page45,
    })
  });
});

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
  Page46.find({}).then(page46 => {
    res.render('page46', {
      page46: page46,
    })
  });
});

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
  Page47.find({}).then(page47 => {
    res.render('page47', {
      page47: page47,
    })
  });
});

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
  Page48.find({}).then(page48 => {
    res.render('page48', {
      page48: page48,
    })
  });
});

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
  Page49.find({}).then(page49 => {
    res.render('page49', {
      page49: page49,
    })
  });
});

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
  Page50.find({}).then(page50 => {
    res.render('page50', {
      page50: page50,
    })
  });
});

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
  Page51.find({}).then(page51 => {
    res.render('page51', {
      page51: page51,
    })
  });
});

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
  Page52.find({}).then(page52 => {
    res.render('page52', {
      page52: page52,
    })
  });
});

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
  Page53.find({}).then(page53 => {
    res.render('page53', {
      page53: page53,
    })
  });
});

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
  Page54.find({}).then(page54 => {
    res.render('page54', {
      page54: page54,
    })
  });
});

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
  Page55.find({}).then(page55 => {
    res.render('page55', {
      page55: page55,
    })
  });
});

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
  Page56.find({}).then(page56 => {
    res.render('page56', {
      page56: page56,
    })
  });
});

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
  Page57.find({}).then(page57 => {
    res.render('page57', {
      page57: page57,
    })
  });
});

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
  Page58.find({}).then(page58 => {
    res.render('page58', {
      page58: page58,
    })
  });
});

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
  Page59.find({}).then(page59 => {
    res.render('page59', {
      page59: page59,
    })
  });
});

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
  Page60.find({}).then(page60 => {
    res.render('page60', {
      page60: page60,
    })
  });
});

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
  Page61.find({}).then(page61 => {
    res.render('page61', {
      page61: page61,
    })
  });
});

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
  Page62.find({}).then(page62 => {
    res.render('page62', {
      page62: page62,
    })
  });
});

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
  Page63.find({}).then(page63 => {
    res.render('page63', {
      page63: page63,
    })
  });
});

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
  Page64.find({}).then(page64 => {
    res.render('page64', {
      page64: page64,
    })
  });
});

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
  Page65.find({}).then(page65 => {
    res.render('page65', {
      page65: page65,
    })
  });
});

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
  Page66.find({}).then(page66 => {
    res.render('page66', {
      page66: page66,
    })
  });
});

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
  Page67.find({}).then(page67 => {
    res.render('page67', {
      page67: page67,
    })
  });
});

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
  Page68.find({}).then(page68 => {
    res.render('page68', {
      page68: page68,
    })
  });
});

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
  Page69.find({}).then(page69 => {
    res.render('page69', {
      page69: page69,
    })
  });
});

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
  Page70.find({}).then(page70 => {
    res.render('page70', {
      page70: page70,
    })
  });
});

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
  Page71.find({}).then(page71 => {
    res.render('page71', {
      page71: page71,
    })
  });
});

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
  Page72.find({}).then(page72 => {
    res.render('page72', {
      page72: page72,
    })
  });
});

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
  Page73.find({}).then(page73 => {
    res.render('page73', {
      page73: page73,
    })
  });
});

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
  Page74.find({}).then(page74 => {
    res.render('page74', {
      page74: page74,
    })
  });
});

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
  Page75.find({}).then(page75 => {
    res.render('page75', {
      page75: page75,
    })
  });
});

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
    res.render('page76', {
      page76: page76,
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
  Page77.find({}).then(page77 => {
    res.render('page77', {
      page77: page77,
    })
  });
});

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
  Page78.find({}).then(page78 => {
    res.render('page78', {
      page78: page78,
    })
  });
});

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
  Page79.find({}).then(page79 => {
    res.render('page79', {
      page79: page79,
    })
  });
});

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
  Page80.find({}).then(page80 => {
    res.render('page80', {
      page80: page80,
    })
  });
});

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
  Page81.find({}).then(page81 => {
    res.render('page81', {
      page81: page81,
    })
  });
});

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
  Page82.find({}).then(page82 => {
    res.render('page82', {
      page82: page82,
    })
  });
});

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
  Page83.find({}).then(page83 => {
    res.render('page83', {
      page83: page83,
    })
  });
});

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
  Page84.find({}).then(page84 => {
    res.render('page84', {
      page84: page84,
    })
  });
});

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
  Page85.find({}).then(page85 => {
    res.render('page85', {
      page85: page85,
    })
  });
});

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
  Page86.find({}).then(page86 => {
    res.render('page86', {
      page86: page86,
    })
  });
});

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

//====APP LISTEN ON ENVIRONMENT PORT===//

app.listen(process.env.PORT || 3000);
console.log('starting applicaiton.  Good job!');

//==========================//

//====EXPORT APP===//

// module.exports = app;

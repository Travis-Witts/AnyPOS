const PORT = process.env.PORT || 3001;
const compression = require('compression');
const express = require('express');
const session = require('express-session');
const path = require('path');

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);
const routes = require("./routes");
const app = express();

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(compression())
app.use(session(sess));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(routes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
  app.get('/*', function(req, res) {
    res.sendFile(path.join(__dirname, './client/build/index.html'), function(err) {
      if (err) {
        res.status(500).send(err)
      }
    })
  })
}

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log('listening on: ' + PORT);
  });
});
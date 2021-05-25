const UserService = require("../services/user.service");
const { v4: uuidv4 } = require('uuid');

exports.login = async (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;
  try {
    const user = await UserService.getUser(email);

    if (!user) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }

    const validPassword = await UserService.checkPassword(user, password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: "Incorrect email or password. Please try again!" });
      return;
    }
    req.session.save(() => {
      req.session.user_id = user.user_id;
      req.session.loggedIn = true;
      res
        .status(200)
        .json({ user: user, message: "You are now logged in!" });
    });
  } catch (error) {
    res.status(400).json(error.message);
  }
};

exports.register = async (req, res, next) => {
    const user_id = uuidv4();
    const name = req.body.name,
    const email = req.body.email,
    const password = req.body.password
    try {
        const newUser = await UserService.createUser(user_id, name, password, email);
        req.session.save(() => {
            req.session.user_id = user.user_id;
            req.session.loggedIn = true;
            res
              .status(200)
              .json({ user: user, message: "You are now logged in!" });
          });
    } catch (error) {
        res.status(400).json(error.message);
    }
}

exports.logout = async (req, res, next) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
}
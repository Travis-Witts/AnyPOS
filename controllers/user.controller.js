const UserService = require("../services/user.service");
const StoreService = require("../services/store.service");

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
      req.session.store_id = user.store.store_id;
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
    const { name, email, password, storeName, description} = req.body;

    try {
        const newUser = await UserService.createUser(name, password, email);
        const user_id = newUser.user_id;
        const newShop = await StoreService.createStore(storeName, description, user_id);
        req.session.save(() => {
            req.session.user_id = user_id;
            req.session.store_id = newShop.store_id;
            req.session.loggedIn = true;
            res
              .status(200)
              .json({ user: newUser, store: newShop ,message: "You are now logged in!" });
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
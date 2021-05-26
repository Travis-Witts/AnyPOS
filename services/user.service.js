const { User, Store } = require("../models");

exports.getUser = async (email) => {
  try {
    const user = await User.findOne({
      where: {
        email: email,
      },
      include: {
        model: Store,
      }
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

exports.checkPassword = async (user, password) => {
  try {
    const validPassword = await user.checkPassword(password);
    return validPassword;
  } catch (error) {
    console.error(error);
  }
};

exports.createUser = async (name, password, email) => {
  try {
    const user = await User.create({
      name: name,
      email: email,
      password: password,
    });
    return user;
  } catch (error) {
    console.error(error);
  }
};

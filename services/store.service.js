const { Store } = require("../models");

exports.createStore = async ({ name, user_id }) => {
  try {
    console.log(name);
    console.log(user_id)
    const newStore = await Store.create({
      name: name,
      user_id: user_id,
    });
    return newStore;
  } catch (error) {
    console.error(error);
  }
};

exports.editStore = async (name, description, store_id) => {
  try {
    const updatedStore = await Store.update({
      name: name,
      description: description,
      where: {
        store_id: store_id,
      },
    });
    return updatedStore;
  } catch (error) {
    console.error(error);
  }
};

exports.getStore = async (user_id) => {
  try {
    const store = await Store.findOne({
      where: {
        user_id: user_id,
      },
    });
    return store;
  } catch (error) {
    console.error(error);
  }
};

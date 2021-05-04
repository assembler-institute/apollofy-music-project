const { UserRepo } = require("../repositories");

async function signUp(req, res, next) {
  const { uid, email } = req.user;

  try {
    const response = await UserRepo.findOne({ email: email });

    if (response.error) {
      return res.status(400).send({
        data: null,
        error: response.error,
      });
    }

    if (response.data) {
      return res.status(200).send({
        data: "OK",
        error: null,
      });
    }

    await UserRepo.create({
      firebase_id: uid,
      email: email,
    });

    res.status(201).send({
      data: "OK",
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

async function signOut(req, res) {
  req.signOut();

  res.status(200).send({
    data: "OK",
    error: null,
  });
}

async function fetchUsers(req, res, next) {
  try {
    const dbResponse = await UserRepo.find();

    if (dbResponse.error) {
      res.status(400).send({
        data: null,
        error: dbResponse.error,
      });
    }

    res.status(200).send({
      data: dbResponse.data,
      error: null,
    });
  } catch (error) {
    next(error);
  }
}

module.exports = {
  signUp: signUp,
  signOut: signOut,
  fetchUsers: fetchUsers,
};

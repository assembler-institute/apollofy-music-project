const { signOut } = require("./sign-out");
const { UserRepo } = require("../../repositories");

/**
 * Adds the user claims to the request object
 *
 * @param {Request} req Request object
 * @param {Object} userClaims {email: String, uid: String}
 *
 * req.user = { email: userClaims.email, uid: userClaims.uid }
 * req.signOut = auth.signOut
 */
async function login(req = {}, userClaims = {}) {
  const { email, uid } = userClaims;

  if (typeof email !== "string" || typeof uid !== "string") {
    throw new Error("Missing user claims");
  }

  const user = await UserRepo.findOne({
    firebase_id: uid,
  });

  if (!user) {
    throw new Error("Invalid token");
  }

  req.user = {
    email: email,
    id: user._id,
  };

  req.signOut = signOut;
}

module.exports = {
  login: login,
};

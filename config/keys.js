module.exports = {
  mongoURI: process.env.MONGODB_URI || "mongodb://localhost/ttrpgdb",
  secretOrKey: "secret"
};

console.log("################# >>>>>>>>>>", process.env.MONGODB_URI)

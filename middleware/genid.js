const stringe = require("crypto-random-string");

module.exports = function gensalt() {
  return (
    stringe({
      length: 7,
      characters:
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789abcdefghijklmnopqrstuvwxyz",
    }) + Date.now().toString().substr(6, 13)
  );
};

const bcrypt = require('bcrypt');

async function veryPassword(password, hash) {
  const isCorrect = await bcrypt.compare(password, hash);
  if (isCorrect) {
    return true;
  }
  return false;
}

module.exports = { veryPassword };

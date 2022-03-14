const generateId = (length) => {
  let result = '';
  let chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++ ) {
    result += chars.charAt(Math.floor(Math.random() *
    chars.length));
  }

  return result.toUpperCase();
}

module.exports = generateId;
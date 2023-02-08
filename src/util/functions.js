const genPassword = () => {
  const chars =
    '0123456789abcdefghijklmnopqrstuvwxyz!@#$&*()ABCDEFGHIJKLMNOPQRSTUVWXYZ'
  const passwordLength = 8
  let passwordRandom = ''
  for (let i = 0; i <= passwordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length)
    passwordRandom += chars.substring(randomNumber, randomNumber + 1)
  }
  return passwordRandom
}

module.exports = {
  genPassword,
}

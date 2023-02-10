const app = require('./app')

async function main() {
  app.listen(5001, () => console.log('Api running on port 5001'))
}

main()

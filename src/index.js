const app = require("./app");

const port = process.env.PORT || 5000;

async function main() {
  app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  })
}

main();

const app = require("./app");

async function main() {
  app.listen(5000);
  console.log("Server on port", 5000);
}

main();

const { db, auth } = require("../firebase");
const mainController = require("../controller/mainController");

const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {res.json('My API running!')});

router.get("/api", (req, res) => {
  res.json({ users: ["1", "2", "3"] });
});

router.post("/new-contact", mainController.mail);
router.get("/thanks", mainController.thanks);
router.get("/error", mainController.error);

module.exports = router;

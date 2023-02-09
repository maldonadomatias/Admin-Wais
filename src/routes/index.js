const { db, auth } = require("../firebase");
const mainController = require("../controller/mainController");

const { Router } = require("express");
const router = Router();

router.get("/", async (req, res) => {
  try {
    const querySnapshot = await db.collection("contacts").get();
    const contacts = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    res.render("index", { contacts });
  } catch (error) {
    console.error(error);
  }
});

router.get("/api", (req, res) => {
  res.json({ users: ["1", "2", "3"] });
});

router.post("/new-contact", mainController.mail);
router.get("/thanks", mainController.thanks);
router.get("/error", mainController.error);

module.exports = router;

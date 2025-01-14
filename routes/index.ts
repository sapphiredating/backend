import { Router } from "express";
const router = Router();

/* GET home page. */
router.get("/secret_page", function (req, res, next) {
  res.send("You found the secret page");
});

export default router;

import { Router } from "express";
import { log } from "../app";
const router = Router();

router.post("/test", (req, res, next) => {
  log("Test route hit");
  res.status(200).send();
});

export default router;

import express, { Request, Response } from "express";
import ytdl from "ytdl-core";

const router = express.Router();

//home page
router.get("/", (req: Request, res: Response) => {
  res.render("index");
});

export default router;

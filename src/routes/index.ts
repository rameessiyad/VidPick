import express, { Request, Response } from "express";
import ytdl from "ytdl-core";

const router = express.Router();

//home page
router.get("/", (req: Request, res: Response) => {
  res.render("index");
});

//download route
router.post("/download", async (req: Request, res: Response) => {
  const videoURL = req.body.url;

  if (!ytdl.validateURL(videoURL)) {
    return res.render("index", { error: "Invalid URL" });
  }

  try {
    const info = await ytdl.getInfo(videoURL);
    const formats = ytdl.filterFormats(info.formats, "videoandaudio");

    res.render("index", {
      title: info.videoDetails.title,
      formats,
      videoURL,
    });
  } catch (error) {
    console.log(error);
    res.render("index", { error: "Failed to process the video URL" });
  }
});

export default router;

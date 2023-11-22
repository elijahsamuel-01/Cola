import { Application, Request, Response } from "express";
const mainApp = (app: Application) => {
  try {
    app.get("/", (req: Request, res: Response) => {
      try {
        return res.status(200).json({
          message: "Ready to Rock",
        });
      } catch (error) {
        return res.status(404).json({
          message: "Error recorded",
        });
      }
    });
  } catch (error) {
    console.log(error);
  }
};

export default mainApp;

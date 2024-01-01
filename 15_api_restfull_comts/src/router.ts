import { Router, Request, Response } from "express";
import { createGame, findGamebyID, getAllGames, removeGame, updateGame } from "./controllers/gameControllers";

// Validations

import {validate} from "./middleware/handleValidation";
import { gameCreateValidation } from "./middleware/gameValidation";

const router = Router();

export default router.get("/teste", (req: Request, res: Response) => {
    res.status(200).send("API working!");
})
.post("/game", gameCreateValidation(),validate, createGame)
.get("/game/:id", findGamebyID)
.get("/game",getAllGames)
.delete("/game/:id", removeGame)
.patch("/game/:id", gameCreateValidation(), validate, updateGame)
import {Request, Response} from "express";

// Model BD
import { GameModel } from "../models/Games";

// Logger
import Logger from "../../config/logger";

// Função assíncrona para inserção de game no BD

export async function createGame(req: Request, res: Response) {
    try {
        const data = req.body;
        const game = await GameModel.create(data);
        return res.status(201).json(game);
    } catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
} 

// Função para encontrar game por ID
export async function findGamebyID(req: Request, res: Response) 
{
    try {
        const id = req.params.id;
        const game = await GameModel.findById(id);
        if(!game) {
            return res.status(404).json({error: "Game not found!"});
        }
        return res.status(201).json(game);
    }
    catch (e: any) {
            Logger.error(`Erro no sistema: ${e.message}`);
    }
}

// Função para retornar todos os games
export async function getAllGames(req: Request, res: Response) 
{
    try {
        const allGames = await GameModel.find();
        return res.status(201).json(allGames);
    }
    catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

// Função para remover um games
export async function removeGame(req: Request, res: Response) 
{
    try {
        const id = req.params.id;
        const game = await GameModel.findById(id);
        if (!game) {
            return res.status(404).json({error: "Game not found"});
        }
        await game.deleteOne();
        return res.status(200).json({message: "Game deleted successfully"});
    }
    catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

// Função para atualizar games
export async function updateGame(req: Request, res: Response) 
{
    try {
        const id = req.params.id;
        const data = req.body;
        const game = await GameModel.findById(id);
        if (!game) {
            return res.status(404).json({error: "Game not found"});
        }
        await GameModel.updateOne({_id: id}, data);
        return res.status(201).json(data);
    }
    catch (e: any) {
        Logger.error(`Erro no sistema: ${e.message}`);
    }
}

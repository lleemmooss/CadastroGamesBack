import {model, Schema} from "mongoose";

const gameSchema = new Schema( 
    {
        title: {type: String},
        developer: {type: String},
        release_date: {type: Date},
        rating: {type: Number},
        description: {type: String},
        plataforms: {type: Array},
        poster: {type: String},
        reviews: {type: Array},
    },
    {
        timestamps: true  // Data de atualização do game
    } 
)

// Exportando o Model
export const GameModel = model("Game", gameSchema);
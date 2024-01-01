import {body} from "express-validator";
import { a } from '../../../9_MODULOS/multiples';

export const gameCreateValidation = () => {
    return [
        body("title")
        .isString()
        .withMessage("Título obrigatório!")
        .isLength({min: 2})
        .withMessage("O título precisa ter, no mínimo, 2 caracteres"),
        body("rating")
        .isNumeric()
        .withMessage("A nota precisa ser um número!")
        .custom((value: number) => {
            if (value < 0 || value > 10) {
                throw new Error ("A nota precisa ser entre 0 e 10");
            }
            return true;
        }),
        body("description")
        .isString()
        .withMessage("A descrição é obrigatória!"),
        body("plataforms")
        .isArray()
        .custom((plataforms: string[]) => {
            if (plataforms.length === 0) {
                throw new Error ("O usário deve definir pelo menos uma plataforma!");
            }
            return true;
        }),
        body("poster")
        .isURL()
        .withMessage("A imagem precisa ser uma URL!")
    ]
};
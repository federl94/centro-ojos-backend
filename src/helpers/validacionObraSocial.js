import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarObraSocial = [
    check("nombreObraSocial")
        .notEmpty()
        .withMessage("El nombre de la obra social es obligatorio")
        .isLength({ min: 2, max: 50 })
        .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    check("cuit")
        .notEmpty()
        .withMessage("El CUIT de la obra social es obligatorio")
        .matches(/^\d{11}$/)
        .withMessage("El CUIT debe contener exactamente 11 dígitos"),
    check("telefono")
        .notEmpty()
        .withMessage("El teléfono de la obra social es obligatorio")
        .matches(/^[0-9]{10}$/)
        .withMessage("El teléfono debe tener 10 dígitos"),
    check("planes")
        .notEmpty()
        .withMessage("Los planes de la obra social son obligatorios")
        .isLength({ min: 3, max: 200 })
        .withMessage("Los planes deben tener entre 3 y 200 caracteres"),
    check("web")
        .optional()
        .isURL()
        .withMessage("El sitio web de la obra social debe ser una URL válida (opcional)"),
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    }
];

export default validarObraSocial;
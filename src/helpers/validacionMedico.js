import { check } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarMedico = [
    check("nombreMedico")
    .notEmpty()
    .withMessage("El nombre del médico es obligatorio")
    .isLength({min: 2, max: 50})
    .withMessage("El nombre debe tener entre 2 y 50 carateres"),
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .withMessage("El mail debe cumplir el formato nombre@dominio.com"),
    check("telefono")
    .notEmpty()
    .withMessage("El telefono del médico es obligatorio")
    .matches(/^[0-9]{10}$/)
    .withMessage("El telefono debe tener 10 digitos"),
    check("especialidad")
    .notEmpty()
    .withMessage("La especialidad es obligatoria")
    .isLength({min: 3, max: 40})
    .withMessage("La especialidad debe tener entre 3 y 40 carateres"),    
    check("obrasSociales")
    .notEmpty()
    .withMessage("Las obras sociales con las que trabaja es obligatoria"),
    (req, res, next)=>{resultadoValidacion(req, res, next)}
]

export default validarMedico;
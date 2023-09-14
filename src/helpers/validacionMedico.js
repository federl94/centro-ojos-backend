import { check, isArray } from "express-validator";
import resultadoValidacion from "./resultadoValidacion";

const validarMedico = [
    check("nombreMedico")
    .notEmpty()
    .withMessage("El nombre del médico es obligatorio")
    .isLength({ min: 2, max: 50 })
    .withMessage("El nombre debe tener entre 2 y 50 caracteres"),
    check("email")
    .notEmpty()
    .withMessage("El email es obligatorio")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/)
    .withMessage("El mail debe cumplir el formato nombre@dominio.com"),
    check("telefono")
    .notEmpty()
    .withMessage("El teléfono del médico es obligatorio")
    .matches(/^[0-9]{10}$/)
    .withMessage("El teléfono debe tener 10 dígitos"),
    check("especialidad")
    .notEmpty()
    .withMessage("La especialidad es obligatoria")
    .isLength({ min: 3, max: 40 })
    .withMessage("La especialidad debe tener entre 3 y 40 caracteres"),
    check("obrasSociales")
    .notEmpty()
    .withMessage("Las obras sociales con las que trabaja son obligatorias"),
    check("diasTrabajo")
  .custom((diasTrabajo) => {
    if (!Array.isArray(diasTrabajo)) {
      throw new Error("Los días de trabajo deben ser un array");
    }
    return true;
  })
,
    (req, res, next) => {
        resultadoValidacion(req, res, next);
    }
];

export default validarMedico;
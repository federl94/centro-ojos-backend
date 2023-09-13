import { Router } from "express";
import {
  obtenerObrasSociales,
  obtenerObraSocial,
  crearObraSocial,
  borrarObraSocial,
  editarObraSocial,
} from "../controllers/obrasocial.controlador";
import validarObraSocial from "../helpers/validacionObraSocial";

const router = Router();

router
  .route("/obrasSociales")
  .get(obtenerObrasSociales)
  .post([validarObraSocial], crearObraSocial);

router
  .route("/obrasSociales/:id")
  .get(obtenerObraSocial)
  .delete(borrarObraSocial)
  .put([validarObraSocial], editarObraSocial);

export default router;
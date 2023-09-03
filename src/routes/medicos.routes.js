import { Router } from "express";
import {
  crearMedico,
  obtenerMedico,
  obtenerMedicos,
  borrarMedico,
  editarMedico,
} from "../controllers/medicos.controlador";
import validarMedico from "../helpers/validacionMedico";

const router = Router();

router
  .route("/medicos")
  .get(obtenerMedicos)
  .post([validarMedico], crearMedico);
router
  .route("/medicos/:id")
  .get(obtenerMedico)
  .delete(borrarMedico)
  .put([validarMedico], editarMedico);

export default router;
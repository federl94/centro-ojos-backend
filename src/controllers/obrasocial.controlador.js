import ObraSocial from "../models/obrasocial";

export const obtenerObrasSociales = async (req, res) => {
    try {
        const obrasSociales = await ObraSocial.find();
        res.status(200).json(obrasSociales);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar las obras sociales',
        });
    }
};

export const obtenerObraSocial = async (req, res) => {
    try {
        const obraSocial = await ObraSocial.findById(req.params.id);
        res.status(200).json(obraSocial);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'No se encontró la obra social',
        });
    }
};

export const crearObraSocial = async (req, res) => {
    try {
        const obraSocialNueva = new ObraSocial(req.body);
        await obraSocialNueva.save();
        res.status(201).json({
            mensaje: 'La obra social se creó correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear la obra social',
        });
    }
};

export const borrarObraSocial = async (req, res) => {
    try {
        await ObraSocial.findByIdAndDelete(req.params.id);
        res.status(200).json({
            mensaje: 'La obra social fue eliminada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error, no se pudo eliminar la obra social',
        });
    }
};

export const editarObraSocial = async (req, res) => {
    try {
        await ObraSocial.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            mensaje: 'La obra social fue editada correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(400).json({
            mensaje: 'Error al intentar editar la obra social',
        });
    }
};

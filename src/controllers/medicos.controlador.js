import Medico from "../models/medico";

export const obtenerMedicos = async (req, res)=>{
    try {
        const medicos = await Medico.find();
        res.status(200).json(medicos);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al buscar los médicos',
        });
    }
};

export const obtenerMedico = async (req, res)=>{
    try {
        const medico = await Medico.findById(req.params.id);
        res.status(200).json(medico);
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'No se encontro el médico',
        });
    }
};

export const crearMedico = async (req, res)=>{
    try {
        
        const medicoNuevo = new Medico(req.body);
        await medicoNuevo.save();
        res.status(201).json({
            mensaje: 'El médico se creo correctamente',
        });
    } catch (error) {
        console.log(error);
        res.status(404).json({
            mensaje: 'Error al crear médico',
        });
    }
}

export const borrarMedico = async (req, res)=>{
try {
   await Medico.findByIdAndDelete(req.params.id);
    res.status(200).json({
        mensaje: 'El médico fue eliminado correctamente',
      });
} catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: 'Error no se pudo eliminar el médico',
    });
}
}

export const editarMedico = async (req, res)=>{
try{
await Medico.findByIdAndUpdate(req.params.id, req.body);
res.status(200).json({
mensaje: 'El médico fue editado correctamente',
});
}catch(error){
console.log(error);
res.status(400).json({
mensaje: 'Error al intentar editar el médico',
});
}
}
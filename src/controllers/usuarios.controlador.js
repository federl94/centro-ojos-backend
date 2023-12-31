import Usuario from "../models/usuario";
import bcrypt from "bcrypt";

export const obtenerUsuarios = async (req, res) => {
  try {
    const usuarios = await Usuario.find();
    res.status(200).json(usuarios);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};

export const obtenerUsuario = async (req, res) => {
  try {
    console.log(req.params.id);
    const usuario = await Usuario.findById(req.params.id);
    res.status(200).json(usuario);
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al buscar los usuarios",
    });
  }
};

export const crearUsuario = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({ email: req.body.email });
    if (usuario) {
      return res
        .status(400)
        .json({ mensaje: "Ya existe un usuario con el mail enviado" });
    }

    const usuarioNuevo = new Usuario(req.body);

    // Agregar la lógica para establecer esMedico según tus necesidades
    if (req.body.esMedico !== undefined) {
      usuarioNuevo.esMedico = req.body.esMedico;
    } else {
      usuarioNuevo.esMedico = false; // Valor por defecto si no se proporciona
    }

    const salt = bcrypt.genSaltSync(10);
    usuarioNuevo.password = bcrypt.hashSync(req.body.password, salt);
    await usuarioNuevo.save();
    res.status(201).json({
      mensaje: "El usuario se creo correctamente",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "Error al crear el usuario",
    });
  }
};

export const editarUsuario = async (req, res) => {
  try {
    // Agregar la lógica para actualizar esMedico según tus necesidades
    if (req.body.esMedico !== undefined) {
      req.body.esMedico = req.body.esMedico;
    }

    await Usuario.findByIdAndUpdate(req.params.id, req.body);
    res.status(200).json({
      mensaje: "El usuario fue editado de manera exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El usuario no pudo ser modificado",
    });
  }
};

export const eliminarUsuario = async (req, res) => {
  try {
    await Usuario.findByIdAndDelete(req.params.id);
    res.status(200).json({
      mensaje: "El usuario fue eliminado de manera exitosa",
    });
  } catch (error) {
    console.log(error);
    res.status(404).json({
      mensaje: "El usuario no pudo ser eliminado",
    });
  }
};

export const login = async (req, res) => {
  try {
    let usuario = await Usuario.findOne({ email: req.body.email });
    console.log('Found user:', usuario);

    if (!usuario) {
      return res.status(404).json({ mensaje: "Correo o contraseña inválido" });
    }
    
    const passwordValido = bcrypt.compareSync(
      req.body.password,
      usuario.password
    );
    console.log('Password validation result:', passwordValido);

    if (!passwordValido) {
      return res.status(400).json({ mensaje: "Correo o contraseña inválido" });
    }
    
    res.status(200).json({
      mensaje: "Usuario autenticado correctamente",
      nombreUsuario: usuario.nombreUsuario,
      esAdmin: usuario.esAdmin,
      esMedico: usuario.esMedico, // Asegúrate de devolver también esMedico
      email: usuario.email,
    });
  } catch (error) {
    console.log(error);
    res.status(400).json({
      mensaje: "Error al intentar iniciar sesión",
    });
  }
};

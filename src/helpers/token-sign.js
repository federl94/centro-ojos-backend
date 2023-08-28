import jwt from "jsonwebtoken";

const generarJWT = (nombreUsuario) => {
  return new Promise((resolve, reject) => {
    // Agregar los datos al payload
    const payload = { nombreUsuario };

    // Imprimir el payload y el valor de SECRET_JWT
    console.log("Payload:", payload);
    console.log("SECRET_JWT:", process.env.SECRET_JWT);

    // Aquí firmamos el token
    jwt.sign(
      payload,
      process.env.SECRET_JWT,
      {
        expiresIn: '2h'
      },
      (err, token) => {
        if (err) {
          console.log(err);
          reject('Error al generar el token');
        }
        // Si está todo correcto
        console.log("Token generado:", token);
        resolve(token);
      }
    );
  });
};

export default generarJWT;

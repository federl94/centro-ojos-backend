import { Schema, model } from "mongoose";

const obraSocialSchema = new Schema({
    nombreObraSocial: {
        type: String,
        minLength: 3,
        maxLength: 50,
        required: true
    },
    cuit: {
        type: String,
        minLength: 11,
        maxLength: 11,
        required: true,
        unique: true,
        validate: {
            validator: function (valor) {
                return /^\d{11}$/.test(valor);
            },
            message: props => `${props.value} no es un CUIT válido. El CUIT debe contener 11 dígitos.`
        }
    },
    telefono: {
        type: String,
        minLength: 10,
        maxLength: 10,
        required: true,
        validate: {
            validator: function (valor) {
                return /^\d{10}$/.test(valor);
            },
            message: props => `${props.value} no es un número de teléfono válido. Debe contener 10 dígitos.`
        }
    },
    planes: {
        type: [String], // Si las obras sociales tienen planes, puedes usar un array de Strings aquí
        required: true
    },
    web: {
        type: String,
        maxLength: 100,
        required: false
    }
});

const ObraSocial = model('ObraSocial', obraSocialSchema);

export default ObraSocial;

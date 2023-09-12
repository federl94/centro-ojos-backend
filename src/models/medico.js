import { Schema, model } from "mongoose";

const medicoSchema = new Schema({
    nombreMedico: {
        type: String,
        minLength: 2,
        maxLength: 50,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        validate: {
            validator: function (valor) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor);
            }
        }
    },
    telefono: {
        type: Number,
        required: true,
        unique: true,
        validate: {
            validator: function (valor) {
                return /^[0-9]{10}$/.test(valor);
            }
        }
    },
    especialidad: {
        type: String,
        minLength: 3,
        maxLength: 40,
        required: true
    },
    obrasSociales: {
        type: String,
        required: true
    }
})

const Medico = model('medico', medicoSchema);

export default Medico;
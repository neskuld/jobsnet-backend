const mongoose = require('mongoose');

const CandidateSchema = new mongoose.Schema(
	{
		name: { type: String, unique: false, required: true },
        position: { type: String, unique: false, required: true },
        birth: { type: String, unique: false, required: true },
        civil: {type: String, unique: false, required: true},
        gender: { type: String, unique: false, required: true },
        logradouro: { type: String, unique: false, required: true },
        bairro: { type: String, unique: false, required: true},
        cidade: {type: String, unique: false, required: true},
		email: { type: String, unique: false, required: true },
        cep: { type: String, unique: false, required: true },
        telefone: { type: String, unique: false, required: true },
        identidade: { type: String, unique: false, required: true },
        cpf: { type: String, unique: true, required: true },
        veiculo: { type: String, unique: false, required: true },
        cnh: {type: String, unique: false, required: false},
	},
	{
		timestamps: true,
	}
);

module.exports = mongoose.model('Candidate', CandidateSchema);
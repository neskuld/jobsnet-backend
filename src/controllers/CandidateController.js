const Candidate = require('../models/Candidate');

module.exports = {
    async register(req, res) {
        
        const {
            name,
            position,
            birth,
            civil,
            gender,
            logradouro,
            bairro,
            cidade,
            email,
            cep,
            telefone,
            identidade,
            cpf,
            veiculo,
            cnh
        } = req.body;
    
        const newCandidate = new Candidate();

        newCandidate.name = name;
        newCandidate.position = position;
        newCandidate.birth = birth;
        newCandidate.civil = civil;
        newCandidate.gender = gender;
        newCandidate.logradouro = logradouro;
        newCandidate.bairro = bairro;
        newCandidate.cidade = cidade;
        newCandidate.email = email;
        newCandidate.cep = cep;
        newCandidate.telefone = telefone;
        newCandidate.identidade = identidade;
        newCandidate.cpf = cpf;
        newCandidate.veiculo = veiculo;
        newCandidate.cnh = cnh;

        newCandidate.save((err, savedCandidate) => {
            if (err) {
                console.log(err)
                return res.status(500).send();
            }

            return res.status(200).send(savedCandidate);
        });
    } 
}

const { request, response } = require("express");

const usuariosGet = (req = request, res = response) => {
    res.json({ msg: "Hola Juan Carlos desde GET" });
};

const usuariosPost = (req = request, res = response) => {
    const {nommbre, apellido, email, edad = 0} = req.body;
    res.status(201).json({ msg: "Hola Juan Carlos desde Post", edad});
};

const usuariosPut = (req = request, res = response) => {
    const {id} = req.params;
    res.status(400).json({ msg: "Hola Juan Carlos desde PUT", id });
};

const usuariosDelete = (req = request, res = response) => {
    const {usuario, password} = req.query;
    res.status(500).json({ msg: "Hola Juan Carlos desde DELETE", usuario, password });
};

module.exports = {usuariosGet, usuariosPost, usuariosPut, usuariosDelete };



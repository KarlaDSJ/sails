/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */
/*const waterfall = require('async/waterfall');
function addUser(err,req,cbwf){
			User.create({
			nombre: req.body.nombre,
			password: req.body.password,
			edad: req.body.edad,
			}).exec(cbwf)
}
function createUser (req, res){
	waterfall([
		(cbwf) => {addUser(null,req,cbwf)},
		(cbwf) => {addUser(null,req,cbwf)},
		(cbwf) => {addUser(null,req,cbwf)},
		(cbwf) => {addUser(null,req,cbwf)},
	],(err,user) => {
		console.log('hola');
		if(err){
			return res.status(500).send('Error');
		}
		return res.status(200).send('Entré al contolador');
	});	
}*/
function createUser (req, res){
	User.create({
			nombre: req.body.nombre,
			password: req.body.password,
			edad: req.body.edad,
			}).exec((err,user) => {
		console.log('hola');
		if(err){
			return res.status(500).send('Error');
		}
		return res.ok(foundUsers).send('Entré al contolador');
	});	
}
function readUser(req,res){
	return User.find()
	.then((foundUsers) => {
		res.status(200).render('readUsers',{
			title: "Usuarios",
			users: foundUsers,
			layout: 'layout',
		});
	})
	.catch((err) =>{
		res.status(500).send("algo ocurrio");
	})
}
function saludo (req,res){
	coso(req.params.nombre);
	color("Hola " + req.params.nombre);
	res.ok("Hola " + req.params.nombre);
}
function login (req,res){
	req.session.nombre = req.params.nombre;
	res.ok();
}
module.exports = {
	createUser,
	readUser,
	saludo,
	login,
};


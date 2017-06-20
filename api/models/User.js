/**
 * User.js
 *
 * @description :: Implementacion de un modelo de usuario
 */
const bcrypt=require('bcrypt');
module.exports = {

  attributes: {
	nombre:{
		type:'string',
		required: true,
	},
	password:{
		type:'string',
		required: true,
	},
	amigo:{
		collection:'user',
		via:'id',
	},
	edad:{
		type:'integer',
		required: true,
		defaultsTo: 5,
	},
	saluda:() =>{
		console.log('saluda');
	},
  },
  beforeCreate:(values,cb) => {
	return bcrypt.hash(values.password, 18, (err,hash)=>{
		if(err){
			return cb(err);
		}
		values.password=hash;
		return cb(null,values);
	});
  },
};


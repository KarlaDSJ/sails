/**
 * colors hook
 */
const colors=require('colors');
module.exports = function (sails) {
  return {
	configure: () => {
		if(!sails.config.color){
			sails.config.color = colors.cyan;
		}
	},
    initialize: function (next) {
		global['color']= (data) => {
		console.log(data[sails.config.color])
		} 
		return next();
    }

  };
};

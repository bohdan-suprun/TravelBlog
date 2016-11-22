// Factory method (Constructor)
module.exports = function(response, template) {
	this.response = response;
	this.template = template;
};

module.exports.prototype = {
	extend: function(properties) {
		// Deep copy of parent's properties
		var Child = module.exports;
		Child.prototype = module.exports.prototype;
		for(var key in properties) {
			Child.prototype[key] = properties[key];
		}
		return Child;
	},
	render: function(data) {
		// Template render
		if(this.response && this.template) {
			this.response.render(this.template, data);
		}
	}
}
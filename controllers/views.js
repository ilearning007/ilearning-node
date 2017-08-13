module.exports = {
	index: function (req, res) {
		res.render("index")
	},

	logIn: function (req, res) {
		res.render("login");
	},

	signUp: function (req, res) {
		res.render("signup");
	}
};
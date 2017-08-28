module.exports = {
	index: function (req, res) {
		res.status(200).render("index")
	},

	logIn: function (req, res) {
		res.status(200).render("login");
	},

	signUp: function (req, res) {
		res.status(200).render("signup");
	}
};
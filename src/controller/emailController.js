const emailService = require("../services/emailService");
const validation = require("../services/validationService");

/**Controller for email */

const emailController = {
	/** Send email */
	send: (req, res) => {
		const { from, name, subject, text } = req.body;
		try {
			if (!validation.validation.email(from)) throw "Invalid sender email";

			emailService
				.sendEmail(from, name, subject, text)
				.then(() => res.status(200).json({ message: "email successfully sent" }))
				.catch((err) => {
					res.status(500).json([{ message: "Internal server error" }]);
				});
		} catch (error) {
			res
				.status(500)
				.json([{ message: "Internal server error" }, { details: error }]);
		}
	},

	/** Test controller endpoint */
	test: (req, res) => {
		res.send("Testing controller");
	},
};

module.exports = {
	emailController,
};

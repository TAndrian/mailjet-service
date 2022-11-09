const Mailjet = require("node-mailjet");
const { mjApiKey, mjApiSecret } = require("../helpers/const");

const mailjet = new Mailjet({
	apiKey: mjApiKey,
	apiSecret: mjApiSecret,
});

module.exports = {
	sendEmail: (from, name, subject, text) =>
		mailjet
			.post("send", { version: "v3.1" })
			.request({
				Messages: [
					{
						From: {
							Email: from,
							Name: name,
						},
						To: [
							{
								Email: "t.andrian.rak@gmail.com",
								Name: "TAndrian",
							},
						],
						Subject: subject,
						TextPart: text,
						HTMLPart: "<h3>Hey! Someone is trying to reach you.</h3>",
						CustomID: "AppGettingStartedTest",
					},
				],
			})
			.then(({ body }) => body),
};

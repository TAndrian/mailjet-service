const port = process.env.PORT || 3001;
const mjApiKey = process.env.MAILJET_API_KEY || "";
const mjApiSecret = process.env.MAILJET_API_SECRET || "";

module.exports = {
	port,
	mjApiKey,
	mjApiSecret,
};

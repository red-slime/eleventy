const axios = require("axios");

module.exports = async () => {
	try {
		const res = await axios.get(
			"https://best-treasure-5e20acadc8.strapiapp.com/api/posts?populate=*"
		);
		//console.log(JSON.stringify(res.data, null, 2));
		return res.data; // Adjust according to the structure of the API response
	} catch (error) {
		console.error("Fetch error:", error);
		return [];
	}
};

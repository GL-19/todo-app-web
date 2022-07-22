import axios from "axios";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImVjNzAxZGIwLWUzYzItNDBhNC1hNzg0LWViNmQ3Mjg0ZmJhOCIsImlhdCI6MTY1ODM2MzA0MywiZXhwIjoxNjU4OTY3ODQzfQ.hpwns18hnkxPz7dHNuYzPBaPEK_zWozUNFplOY2ubaQ";

export const api = axios.create({
	baseURL: "http://localhost:3333",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		Authorization: `Bearer ${token}`,
	},
});

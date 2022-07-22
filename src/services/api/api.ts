import axios from "axios";

const token =
	"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzMWZlM2VkLTZjNGQtNDc0Yi1hODk0LTBhZmEyM2RiMzgxZiIsImlhdCI6MTY1ODI4MDAzOSwiZXhwIjoxNjU4ODg0ODM5fQ.hkHp5rZd6sueo2ruADfsohPvE922pK106UmOAJSjM_w";

export const api = axios.create({
	baseURL: "http://localhost:3333",
	headers: {
		"Access-Control-Allow-Origin": "*",
		"Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS",
		Authorization: `Bearer ${token}`,
	},
});

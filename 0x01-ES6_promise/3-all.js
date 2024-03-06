import {uploadPhoto, createUser} from "./utils.js";

export default function handleProfileSignup(){
	const promise1 = uploadPhoto();
	const promise2 = createUser();

	Promise.all([promise1, promise2])
		.then((values) => {
			console.log(values[0].body, values[1].firstName, values[1].lastName);
		})
		.catch((err) => console.error("Signup system offline"));
}

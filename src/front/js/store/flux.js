const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			currentUser: "",

		},
		actions: {
			// Use getActions to call a function within a fuction

			registrarse: async (nombre, apellido, email, password) => {
				try {
					await fetch(process.env.BACKEND_URL + "api/singup", {
						method: "POST",
						body: JSON.stringify({
							first_name: nombre,
							last_name: apellido,
							email: email,
							password: password,

						}),
						headers: { "Content-Type": "application/json" }
					})
					return true
				} catch (error) {
					console.log(error)
					return false
				}
			},


			login: async (mail, password) => {
				try {


					const response = await fetch(process.env.BACKEND_URL + "api/login", {
						method: "POST",
						body: JSON.stringify({
							email: mail,
							password: password,
						}),
						headers: { "Content-Type": "application/json" }
					})
					console.log(response)
					if (response.status === 200) {
						const data = await response.json()
						localStorage.setItem("token", data.access_token)
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			}


				} catch (error) {
					console.error("hubo un error en el login", error)
				}
			},
		}
	};
};

export default getState;

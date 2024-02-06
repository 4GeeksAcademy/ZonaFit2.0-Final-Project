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

			iniciarSesion: async (email, password) =>{
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/login",{
						method: 'POST',
						headers: {
							"Content-Type": "application/json",
						},
						body: JSON.stringify({
							"email": email,
							"password": password,
						})
					})

					if (resp.status !== 200){
						alert("Error en los datos");
						return false
					}
					alert("logueado exitosamente")
					const data = await resp.json();
					localStorage.setItem("token", data.access_token)
					setStore({token: data.access_token})
					setStore({currentUser: email})

				} catch (error) {
					console.error("hubo un error en el login", error)
				}
			},
		}
	};
};

export default getState;

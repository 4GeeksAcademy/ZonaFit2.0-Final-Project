const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			token: "",
			currentUser: "",
			rutinas: [],
			ejercicios: [],
			rutina: {},
			ejercicio: {},
			rutinaDetallada: [],
			usuario: {},
			perfil: {},
			auth: false,
			recetas: []
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

					if (response.status === 200) {
						const data = await response.json()
						setStore({ usuario: data.user })
						setStore({ auth: true })
						localStorage.setItem("token", data.access_token)
						setStore({ token: data.access_token })
						return true
					}
				} catch (error) {
					console.log(error)
					return false
				}
			},

			logout: () => {
				localStorage.removeItem("token");
			},

			todasLasRutinas: async () => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/all_routines");
					const datos = await resp.json();
					console.log(datos);
					setStore({ rutinas: datos });
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},

			todosLosEjerciciosDeUnaRutina: async (id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/all_exercises_from_one_routine/" + id);
					const datos = await resp.json()
					setStore({ ejercicios: datos });
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},

			unaRutina: async (id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/all_routines/" + id);
					const datos = await resp.json()
					setStore({ rutina: datos })
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}

			},

			unEjercicio: async (id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/exercise/" + id);
					const datos = await resp.json();
					console.log('metodo exitoso')
					setStore({ ejercicio: datos })
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},

			detallesDeUnaRutina: async (id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/exercise_view/" + id);
					const datos = await resp.json();
					console.log("llamado exitoso");
					setStore({ rutinaDetallada: datos })
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},

			obtenerUsuario: async (id) => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/user/" + id)
					const data = await response.json()
					setStore({ usuario: data })
				} catch (error) {
					console.log(error)
				}
			},

			editarUsuario: async (id, nombre, apellido, email, genero, birthdate, peso, altura, meta, new_password) => {
				try {
					const bodyData = {
						first_name: nombre ? nombre : undefined,
						last_name: apellido ? apellido : undefined,
						email: email ? email : undefined,
						birthdate: birthdate ? birthdate : undefined,
						gender: genero ? genero : undefined,
						weight: peso ? peso : undefined,
						height: altura ? altura : undefined,
						goal: meta ? meta : undefined,
						password: new_password ? new_password : undefined
					};

					// Remove undefined properties from bodyData
					const filteredBodyData = Object.fromEntries(Object.entries(bodyData).filter(([_, v]) => v !== undefined));

					const response = await fetch(process.env.BACKEND_URL + "api/user/" + id, {
						method: "PUT",
						body: JSON.stringify(filteredBodyData),
						headers: {
							"Content-Type": "application/json"
						}
					});
					const data = await response.json();
					setStore({ perfil: data });
					// Additional setStore actions if needed
				} catch (error) {
					console.log(error);
				}
			},

			logout: () => {
				localStorage.removeItem("token")
				setStore({ auth: false })
			},

			obtenerTodasLasRecetas: async () => {
				try {
					const response = await fetch(process.env.BACKEND_URL + "api/meals")
					const data = await response.json()
					setStore({ recetas: data })
					return data
				} catch (error) {
					console.log(error)
				}
			},
		}
	};
};

export default getState;

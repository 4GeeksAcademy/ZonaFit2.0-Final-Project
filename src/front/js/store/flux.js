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

			unEjercicio: async (id) =>{
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/exercise/" +id);
					const datos = await resp.json();
					console.log('metodo exitoso')
					setStore({ ejercicio: datos})
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			},

			detallesDeUnaRutina: async (id) => {
				try {
					const resp = await fetch(process.env.BACKEND_URL + "api/exercise_view/" + id );
					const datos = await resp.json();
					console.log("llamado exitoso");
					setStore({ rutinaDetallada: datos})
					return datos;
				} catch (error) {
					console.error('Error al obtener datos:', error);
					throw error;
				}
			}
		}
	};
};

export default getState;

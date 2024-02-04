"""
This module takes care of starting the API Server, Loading the DB and Adding the endpoints
"""
from flask import Flask, request, jsonify, url_for, Blueprint
from api.models import db, User, Routines, Equipment, Exercises, Meals, Muscles, RoutinesAux
from api.utils import generate_sitemap, APIException
from flask_cors import CORS

from flask_jwt_extended import create_access_token 
from flask_jwt_extended import get_jwt_identity
from flask_jwt_extended import jwt_required

from datetime import datetime

api = Blueprint('api', __name__)

# Allow CORS requests to this API
CORS(api)

@api.route('/hello', methods=['POST', 'GET'])
def handle_hello():

    response_body = {
        "message": "Hello! I'm a message that came from the backend, check the network tab on the google inspector and you will see the GET request"
    }

    return jsonify(response_body), 200

# aca las rutinas debo definirlas base al front metodos gets para las bases

#resultado = db.session.query(Routines, User).filter_by(user_id = id).join(User).all()

# results = list (map( lambda routine: {
# "idRutina" : routine[0].id,
# "name:" routine[0].routine_name,
# "idUsuer": routine[1].id,
# "user_name": routine[1].user_name
# }, resultado))

# return jsonify(results), 200

# resultado = db.session.query(Routines, User).filter_by(user_id = id).join(User, Routines.id_user == User.id).all()

# Ruta log in user con el token de autenticacion metodo probado con postman

@api.route("/login", methods=["POST"]) # en postman url = http://wikeddirectionurlapp.githubetc + /api/token, no token solo
def user_login():                     
    email = request.json.get("email", None)   #obtengo del fecth el email puede ser username tambien
    password = request.json.get("password", None)   #obtengo del fecth el password
    
    user = User.query.filter_by(email=email, password=password).first() # estoy buscando al usuario en la base de datos si no lo consigue user pasa al if

    if not user:
        return jsonify({"msg": "Bad username or password"}), 401

    access_token = create_access_token(identity=email) # nota al editor aca identity se guarda como la variable email, asi que cuando se llame con un get_jwt_identity tendra ese valor en este caso el del email
    return jsonify(access_token=access_token)

# Ruta Sing Up user sin doble autenticacion (confirmacion x email) Probado sin la confirmacion de email

@api.route("/singup", methods=["POST"]) 
def new_user():
    data = request.json                  
    
    email = request.json.get("email", None)          #obtengo del fecth el email puede ser username tambien

    user = User.query.filter_by(email=email).first() #reviso si existe ese email en la lista de usuarios

    if user is None:                                  # si no existe pues lo creo
        data["is_new"] = True                         # asigno automaticamente que el usuario es nuevo
        data["singup_date"] = datetime.now()          # asigno la fecha en la que se registro
        
        new_record = User(**data)

        db.session.add(new_record)
        db.session.commit()

        return jsonify({'message': 'User created successfully'}), 201
    
    else:
        return jsonify({'message': 'that user already exist'}), 400

#### Ruta all_routines devuelve todas rutinas disponibles para la pantalla Rutinas

@api.route('/all_routines', methods=['GET'])
def get_a_list_of_routines():
    all_routines = Routines.query.all()

    results = list(map(lambda routines : routines.serialize(), all_routines)) # se realiza el mapeo y posterior generacion de la lista con los resultados
    
    return jsonify(results), 200

# Ruta 1 routine debe regresar una rutina en particular de la lista

@api.route("/all_routines/<int:routine_id>", methods=['GET'])
def get_routine(routine_id):
    routine = Routines.query.filter_by(id = routine_id).first()

    results = routine.serialize()

    return jsonify(results), 200

# Ruta all exercises from 1 routine hacer lista xd

@api.route("/all_exercises/<int:routine_id>", methods=['GET'])
def get_all_exercises_from_routine(routine_id):
    exercises_list = RoutinesAux.query.filter_by(routine_id = routine_id).all()

    results = list(map(lambda exercises: exercises.serialize(), exercises_list))

    return jsonify(results), 200

# Ruta un solo ejercicio 

@api.route("/exercise/<int:exercise_id>", methods=['GET'])
def get_exercise(exercise_id):
    exercise = Exercises.query.filter_by(id = exercise_id).first()

    result = exercise.serialize()

    return jsonify(result), 200

# Ruta para menus en base a la comida del dia aca pendiente por los errores

@api.route("/meals/<main_meals>" , methods=['GET'])
def get_meals(main_meals):

    if main_meals not in ["desayuno", "almuerzo", "cena"]:  # meals debe ser una de las palabras dentro del array o habra error
        return jsonify({"msg": "Bad meal name"}), 401

    meal_list = Meals.query.filter_by( meal = main_meals).all()

    results = list(map(lambda meal : meal.serialize(), meal_list))

    return jsonify(results), 200

# Ruta para comida en particular hay 2 opciones pasar id o nombre de la receta la verdad me gusta mas id

@api.route("meals/<int:meal_id>", methods=['GET'])
def get_meal(meal_id):
    meal = Meals.query.filter_by(id = meal_id).first()

    result = meal.serialize()

    return jsonify(result), 200

### rutas de aca para abajo son experimentales probablmente se eliminen en un futuro

@api.route('/user', methods=['GET'])  # por probar le puse esta ruta 
def get_all_users():
    user = User.query.all() # trae una lista de objetos de la tabla user
    
    results = list(map(lambda usuarios : usuarios.serialize(), user)) # se realiza el mapeo y posterior generacion de la lista con los resultados
    
    return jsonify(results), 200

@api.route('/routines+aux', methods=['GET'])
def get_all_complete_routines():

    resultados = db.session.query(Routines, RoutinesAux).join(Routines, RoutinesAux.routine_id == Routines.id)

    results = list(map(lambda routine: routine.serialize(), resultados ))

    return jsonify(results), 200


@api.route('/routines', methods=['GET'])
def get_user_routines():
    resultado = db.session.query(Routines, User).join(User, Routines.user_id == User.id).all()

    results = list (map( lambda routine: {
    "idRutina": routine[0].id,
    "name": routine[0].routine_name,
    "idUsuer": routine[1].id,
    "user_name": routine[1].user_name
    }, resultado))

    return jsonify(results), 200
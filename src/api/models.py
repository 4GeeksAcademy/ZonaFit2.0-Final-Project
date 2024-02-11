from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

# Tabla Usuario modificada segun el google sheet solo intruduje la funcion nullable donde aplica o sea donde no debe ser nulo

class User(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    profile_picture = db.Column(db.String(200), unique=False)
    is_new = db.Column(db.Boolean(), unique=False)
    is_admin = db.Column(db.Boolean(), unique=False)
    completed_routines = db.Column(db.Integer, unique=False)
    user_type = db.Column(db.String(40), unique=False)
    singup_date = db.Column(db.Date(), unique=False)
    payment_date = db.Column(db.Date(), unique=False)
    birthdate = db.Column(db.Date(), unique=False)
    weight = db.Column(db.Float(), unique=False)
    height = db.Column(db.Float(), unique=False)
    gender = db.Column(db.String(20), unique=False)
    goal = db.Column(db.String(40), unique=False)
    # Relaciones
    routines = db.relationship("Routines")

    def __repr__(self):
        return f'<User {self.email}>'

    def serialize(self):
        return {
            "id": self.id,
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "is_new": self.is_new,
            "is_admin": self.is_admin,
            "completed_routines": self.completed_routines,
            "user_type": self.user_type,
            "singup_date": self.singup_date,
            "payment_date": self.payment_date,
            "birthdate": self.birthdate,
            "weight": self.weight,
            "height": self.height,
            "gender": self.gender,
            "goal": self.goal,
            # do not serialize the password, its a security breach
        }
    
# Tabla Ejercicios, se relaciona con Tabla musculos / Tabla Equipos
    
class Exercises(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    exercise_name = db.Column(db.String(80), unique=False, nullable=False)
    difficulty_level = db.Column(db.String(40), unique=False, nullable=False)
    description = db.Column(db.String(500), unique=False, nullable=False)
    img_source = db.Column(db.String(120), unique=False)
    video_source = db.Column(db.String(120), unique=False)
    #Foreing Keys
    muscle_id = db.Column(db.Integer, db.ForeignKey("muscles.id"))
    equipment_id = db.Column(db.Integer, db.ForeignKey("equipment.id"))
    # Add the back_populates attribute, se debe establecer el backpopulates para la relacion entre ellos
    muscles = db.relationship("Muscles", back_populates="exercises")
    equipment = db.relationship("Equipment", back_populates="exercises")
    #
    routinesAux = db.relationship("RoutinesAux")

    def __repr__(self):
        return '<Exercises %r>' % self.exercise_name
    
    def serialize(self):
        return {
            "id": self.id,
            "exercise_name": self.exercise_name,
            "difficulty_level": self.difficulty_level,
            "description": self.description,
            "img_source": self.img_source,
            "video_source": self.video_source,
            "muscle_id": self.muscle_id,
            "equipment_id": self.equipment_id,
        }

# Tabla Musculos (auxiliar de ejercicios)
    
class Muscles(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    muscle_name = db.Column(db.String(80), unique=True, nullable=False)
    #relaciones
    exercises = db.relationship("Exercises")

    def __repr__(self):
        return '<Muscles %r>' % self.muscle_name
    
    def serialize(self):
        return {
            "id": self.id,
            "muscle_name": self.muscle_name 
        }

# Tabla equipos 
        
class Equipment(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    equipment_name = db.Column(db.String(120), unique=True, nullable=False)
    #relaciones
    exercises = db.relationship("Exercises")

    def __repr__(self):
        return '<Equipment %r>' % self.equipment_name

    def serialize(self):
        return{
            "id": self.id,
            "equipment_name": self.equipment_name,
        }

# Tabla rutinas principal
    
class Routines(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    routine_name = db.Column(db.String(40), unique=True)
    premium = db.Column(db.Boolean(),unique=False)
    start_date = db.Column(db.Date(), unique=False)
    final_date = db.Column(db.Date(), unique=False)
    picture = db.Column(db.String(200), unique=False)
    difficulty_level = db.Column(db.String(40), unique=False)
    type_of_routine = db.Column(db.String(40), unique= False)
    #foreign key
    user_id = db.Column(db.Integer, db.ForeignKey("user.id"))
    # relacional
    user = db.relationship("User", back_populates="routines")
    routinesAux = db.relationship("RoutinesAux")

    def __repr__(self):
        return '<Routines %r>' % self.routine_name

    def serialize(self):
        return{
            "id": self.id,
            "routine_name": self.routine_name,
            "premium": self.premium,
            "start_date": self.start_date,
            "final_date": self.final_date,
            "picture": self.picture,
            "difficulty_level": self.difficulty_level,
            "type_of_routine": self.type_of_routine,
            "user_id": self.user_id,
        }

# Tabla auxiliar o complementaria de rutinas
class RoutinesAux(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    reps_by_exercise = db.Column(db.Integer, unique=False)
    num_of_series = db.Column(db.Integer, unique=False)
    assignated_day = db.Column(db.Date, unique=False)
    assignated_hour = db.Column(db.Time, unique=False)
    # Foreign Keys
    routine_id = db.Column(db.Integer, db.ForeignKey("routines.id"))
    exercise_id = db.Column(db.Integer, db.ForeignKey("exercises.id"))
    # relaciones
    routines = db.relationship("Routines", back_populates="routinesAux")             
    exercises = db.relationship("Exercises", back_populates="routinesAux")         

    def __repr__(self):
        return '<RoutinesAux %r>' % self.id

    def serialize(self):
        return{
            "id": self.id,
            "reps_by_exercise": self.reps_by_exercise,
            "num_of_series": self.num_of_series,
            "assignated_day": self.assignated_day,
            "assignated_hour": self.assignated_day,
            "routine_id": self.routine_id,
            "exercise_id": self.exercise_id,
        }
    
# Tabla de dietas
    
class Meals(db.Model):

    id = db.Column(db.Integer, primary_key=True)
    meal = db.Column(db.String(40), unique=False)
    recipe_name = db.Column(db.String(100), unique=False)
    ingredient = db.Column(db.String(200), unique=False)
    carbohydrates = db.Column(db.Float, unique=False)
    fats = db.Column(db.Float, unique=False)
    proteins = db.Column(db.Float, unique=False)
    recipe_instructions = db.Column(db.String(500), unique=False)

    def __repr__(self):
        return '<Meals %r>' % self.meal
    
    def serialize(self):
        return{
            "id": self.id,
            "meal": self.meal,
            "recipe_name": self.recipe_name,
            "ingredient": self.ingredient,
            "carbohydrates": self.carbohydrates,
            "fats": self.fats,
            "proteins": self.proteins,
            "recipe_instructions": self.recipe_instructions,
        }
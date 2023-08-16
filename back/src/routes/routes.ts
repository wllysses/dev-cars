import { Router } from "express";
import { CreateUserController } from "../controllers/createUserController";
import { UsersController } from "../controllers/usersController";
import { CreateCarController } from "../controllers/createCarController";
import { CarsController } from "../controllers/carsController";
import { AuthLoginController } from "../controllers/authLoginController";
import { SingleCarController } from "../controllers/singleCarController";
import { CarsbyUserController } from "../controllers/CarsByUserController";

const router = Router()

const createUserController = new CreateUserController()
const usersController = new UsersController()
const createCarCOntroller = new CreateCarController()
const carsController = new CarsController()
const singleCarController = new SingleCarController()
const authLoginController = new AuthLoginController()
const carsByUserController = new CarsbyUserController()

// get all users
router.get('/users', usersController.getUsers)
// register car
router.post('/cars', createCarCOntroller.postCar)
// get all cars
router.get('/cars', carsController.getCars)
// get a single car
router.get('/cars/:id', singleCarController.getSingleCar)

router.post('/cars/user', carsByUserController.controllerFn)

// register and login routes
router.post('/users', createUserController.postUser)
router.post('/auth', authLoginController.authUser)

export { router }

import {Router} from "express"
import { createPost,  } from "../controllers/posts.controller.js"
import { loggedInUser, registerUser } from "../controllers/users.controller.js"
const router = Router()

router.route('/post').post(createPost)
router.route('/register').post(registerUser)
router.route('/loggedInUser').get(loggedInUser)

export default router
import { Router } from "express"; // Import Router from express
import createTodos from "../controllers/CreateTodo"; // Import the controller function

const router = Router(); // Create a router instance

// Define API routes
router.post("/createTodo", createTodos);

export default router; // Export the router

import Todo from "../models/todo.js";

const createtodos = async (res, req) => {
  try {
    //extracted title and description from request body
    const { name, title } = req.body;
    //creating a new todo object with the instreds data
    const response = await Todo.create({ title, description });
    res.send(200).json({
      sucess: true,
      data: response,
      message: "Error Created sucesscully",
    });
  } catch (e) {
    console.log("error", e);
    res.status(500).json({
      sucess: false,
      data: "",
      message: `${e}`,
    });
  }
};

export default createtodos

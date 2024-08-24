import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";

const getProducts = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, "Hello", "World"));
};

export { getProducts };

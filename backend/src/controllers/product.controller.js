import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { ApiResponse } from "../utils/ApiResponse.js";
import axios from "axios";

const test = async (req, res) => {
  return res.status(200).json(new ApiResponse(200, "Hello", "World"));
};

const access_token =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzI0NDkyNjg1LCJpYXQiOjE3MjQ0OTIzODUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjcxNzJkZDQ1LTY3NWYtNDQyNC05NGM3LWZmNWJjNTViZjZiNyIsInN1YiI6ImFiaGF5cHJhdGFweWFkYXYzNDBAZ21haWwuY29tIn0sImNvbXBhbnlOYW1lIjoiR2FuZ2VzIiwiY2xpZW50SUQiOiI3MTcyZGQ0NS02NzVmLTQ0MjQtOTRjNy1mZjViYzU1YmY2YjciLCJjbGllbnRTZWNyZXQiOiJXWmt1em5XR0ZHVW5JYVVEIiwib3duZXJOYW1lIjoiU3R1bmRlbnREVEMiLCJvd25lckVtYWlsIjoiYWJoYXlwcmF0YXB5YWRhdjM0MEBnbWFpbC5jb20iLCJyb2xsTm8iOiIxMzgxODAwMjcyMSJ9.iOEQ32fMwke2GtmU1icVQaeEZvW7gSah0J004TnRYes";

//The generated access token for the test server is wrong, most likely an issue with the api
//The server will work if a valid access token for the test server is provided

const config = {
  headers: {
    Authorization: `Bearer ${access_token}`,
  },
};

const getProducts = asyncHandler(async (req, res) => {
  const { companyname, n, minPrice, maxPrice } = req.body;
  const { categoryname } = req.params;

  let products = {};

  axios
    .get(
      `http://20.244.56.144/test/companies/${companyname}/categories/${categoryname}/products?top=${n}&minPrice=${minPrice}&maxPrice=${maxPrice}`,
      config
    )
    .then((response) => {
      products = response.data;
    })
    .catch((error) => {
      console.log(error);
    });

  return res.status(200).json(new ApiResponse(200, products, "Ok"));
});

export { getProducts, test };

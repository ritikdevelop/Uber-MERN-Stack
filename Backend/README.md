# User Registration and Login Endpoint Documentation

## Endpoint: `/users/register`  

### Description
This endpoint allows a new user to register by providing their full name, email, and password. The endpoint validates the input data and creates a new user in the database. Upon successful registration, it returns a JSON response containing an authentication token and the user details.

### HTTP Method
- **POST**

### Request Data
- **Body**:
  - `FullName` (Object):
    - `firstName` (String): First name of the user (required, at least 3 characters long).
    - `lastName` (String): Last name of the user (optional, at least 3 characters long if provided).
  - `email` (String): Email address of the user (required, must be a valid email).
  - `password` (String): Password of the user (required, at least 6 characters long).

### Example Request



## Endpoint: `/users/profile`  

### Description
This endpoint retrieves the profile information of the currently logged-in user.

### HTTP Method
- **GET**

### Request Data
- **Headers**:
  - `Authorization`: Bearer token (required)

### Response Data
- **JSON**:
  - [user](cci:4://file:///f:/Uber%20MERN%20Stack/Backend/controllers/user.controller.js:0:0-12:0): Object containing the user's profile information

### Example Response
 



## Endpoint: `/users/logout`  

### Description
This endpoint logs out the currently logged-in user by invalidating the authentication token.

### HTTP Method
- **POST**

### Request Data
- **Headers**:
  - `Authorization`: Bearer token (required)

### Response Data
- **JSON**:
  - `message`: Success message

### Example Response

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
```json
{
  "FullName": {
    "firstName": "John",
    "lastName": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Response
- **Status Code**: 201 (Created)
- **Body**:
  - `token` (String): Authentication token for the user.
  - `user` (Object): User details.
    - `FullName` (Object):
      - `firstName` (String)
      - `lastName` (String)
    - `email` (String)
    - `password` (String): Not included in the response for security reasons.

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyZmYwMzA1MzYwMzYwMzYwMzYwMzYiLCJpYXQiOjE2OTI4MzI4MzJ9"
}

## Endpoint: `/users/login`

### Description
This endpoint allows an existing user to log in by providing their email and password. The endpoint validates the input data and checks the user's credentials. Upon successful authentication, it returns a JSON response containing an authentication token and the user details.

### HTTP Method
- **POST**

### Request Data
- **Body**:
  - `email` (String): Email address of the user (required, must be a valid email).
  - `password` (String): Password of the user (required, at least 6 characters long).

### Example Request
```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

### Response
- **Status Code**: 200 (OK)
- **Body**:
  - `token` (String): Authentication token for the user.
  - `user` (Object): User details.
    - `email` (String)
    - `password` (String): Not included in the response for security reasons.

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyZmYwMzA1MzYwMzYwMzYwMzYwMzYiLCJpYXQiOjE2OTI4MzI4MzJ9"
}
- **400 Bad Request**:
  - `errors` (Array): Validation errors.
- **401 Unauthorized**:
  - `error` (String): Invalid email or password.
  

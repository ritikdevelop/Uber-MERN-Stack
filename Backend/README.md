## Endpoint: `/captain/register`

### Description
This endpoint registers a new captain by providing their email, full name, password, and vehicle details.

### HTTP Method
- **POST**

### Request Data
- **Body**:
  - `email` (String): Email address of the captain (required, must be a valid email).
  - `fullName` (Object):
    - `firstname` (String): First name of the captain (required, at least 3 characters long).
  - `password` (String): Password of the captain (required, at least 6 characters long).
  - `vehicle` (Object):
    - `color` (String): Color of the vehicle (required, at least 3 characters long).
    - `plate` (String): Vehicle plate number (required, at least 3 characters long).
    - `capacity` (Integer): Capacity of the vehicle (required, must be at least 1).
    - `vehicleType` (String): Type of vehicle (required, must be one of 'car', 'motorcycle', 'auto').

### Example Request
```json
{
  "email": "captain.john@example.com",
  "fullName": {
    "firstname": "John"
  },
  "password": "securepassword123",
  "vehicle": {
    "color": "red",
    "plate": "ABC123",
    "capacity": 4,
    "vehicleType": "car"
  }
}
```

### Response
- **Status Code**: 201 (Created)
- **Body**:
  - `token` (String): Authentication token for the captain.
  - `captain` (Object): Captain details.

### Example Response
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NGUyZmYwMzA1MzYwMzYwMzYwMzYwMzYiLCJpYXQiOjE2OTI4MzI4MzJ9",
  "captain": {
    "fullName": {
      "firstname": "John"
    },
    "email": "captain.john@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}

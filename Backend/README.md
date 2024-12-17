## User Endpoints  

### Endpoint: `/users/register`  
### Description  
Registers a new user.  

### HTTP Method  
- **POST**  

### Request Data  
- **Body**:  
  - `email` (String): User's email address (required, must be a valid email).  
  - `fullname` (Object):  
    - `firstName` (String): User's first name (required, at least 3 characters long).  
    - `lastName` (String): User's last name (required).  
  - `password` (String): User's password (required, at least 6 characters long).  

### Response  
- **Status Code**: 201 (Created)  
- **Body**:  
  - `token` (String): Authentication token for the user.  
  - `user` (Object): User details.  

### Endpoint: `/users/login`  
### Description  
Logs in a user.  

### HTTP Method  
- **POST**  

### Request Data  
- **Body**:  
  - `email` (String): User's email address (required).  
  - `password` (String): User's password (required).  

### Response  
- **Status Code**: 200 (OK)  
- **Body**:  
  - `token` (String): Authentication token for the user.  
  - `user` (Object): User details.  

### Endpoint: `/users/profile`  
### Description  
Retrieves the user's profile.  

### HTTP Method  
- **GET**  

### Response  
- **Status Code**: 200 (OK)  
- **Body**:  
  - `user` (Object): User profile details.  

### Endpoint: `/users/logout`  
### Description  
Logs out the user.  

### HTTP Method  
- **GET**  

### Response  
- **Status Code**: 200 (OK)  
- **Body**:  
  - `message` (String): Confirmation message for logout.

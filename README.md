# RangeKeeper Backend

This is the backend API for **RangeKeeper**, an AI-powered platform for tracking and forecasting electric vehicle (EV) battery performance. It handles user authentication, battery data submission, and prediction retrieval.

## 📦 Tech Stack

- Node.js with Express.js
- MongoDB via Mongoose
- JWT for authentication
- bcrypt for password hashing
- dotenv for environment management
- Helmet and CORS for security
- Bootstrap-compatible responses (frontend aligned)

## 🔐 API Authentication

JWT tokens are used to protect routes. Clients must include a Bearer token in the `Authorization` header. Token verification is handled by the `protectRoute` middleware.

---

## 🚦 API Endpoints

### 🔑 Auth

- `POST /signup`  
  Creates a new user account  
  **Required fields**: `firstName`, `lastName`, `email`, `password`, `confirmPassword`, `fullRange`, `modelYear`

- `POST /login`  
  Authenticates an existing user  
  **Returns**: JWT token, user name, ID, and full range

---

### 📊 Battery Data

- `GET /getData/:userId`  
  Retrieves historical battery entries for a user (Protected)

- `DELETE /deleteDataById/:id`  
  Deletes a specific data entry by its ID (Protected)

---

### 🔮 Predictions

- `GET /getpredictions/:userId`  
  Retrieves forecast data previously generated for a user (Protected)

---

## 🧠 Data Models

### `User` model

Stores registration credentials, email validation, and EV metadata like full range and model year.

### `Data` model

Stores daily battery entries: current range, percentage, computed health, lost miles, and timestamps.

### `Prediction` model

This is a flexible, schema-less model designed to store prediction data submitted by the external Python-based forecasting API. It serves as a bridge, allowing data generated by the Python service to be stored in MongoDB and retrieved by the frontend via Node.js API routes.

---

## 🛠 Environment Variables

Create a `.env` file at the project root:

```bash
PORT=3001
MONGO_URI=mongodb://your-mongo-uri
SECRET_KEY=your-jwt-secret
```

---

## ▶️ Running Locally

```bash
git clone https://github.com/OldAlexhub/rangekeeper-bknd.git
cd rangekeeper-backend
npm install
npm run start
```

---

## 📄 License

This project is licensed under the MIT License.
Use and modify freely, with attribution.

## ✍️ Author

**_Mohamed Gad_**
***www.mohamedgad.com***

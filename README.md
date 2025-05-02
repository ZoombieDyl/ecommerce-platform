
# 🧪 Potion Seller's Emporium

**E-Commerce Project :: Dylan P.**  
CS 3365 – Software Engineering  
Spring 2025

---

## 📦 Overview

Potion Seller's Emporium is a full-stack e-commerce platform with a fantasy theme where users can browse and buy magical potions, manage a shopping cart, place secure orders, and leave reviews. Designed with clean UI principles and full JWT-based authentication, the application supports complete order lifecycle management and user-based personalization.

---

## 🧰 Tech Stack

### Frontend:
- React.js (v19+)
- React Router DOM (v7+)
- React Context API
- React Toastify (alerts)
- Custom CSS (parchment-themed aesthetic)

### Backend:
- Node.js
- Express.js
- MongoDB via Mongoose
- JWT for auth
- RESTful API
- Swagger UI for API docs

### Testing:
- Jest + Supertest for API routes
- Mocha + Chai for unit tests
- Cypress for E2E testing (optional)

---

## ⚙️ Features

- 🧪 Dynamic product catalog with gallery + list view  
- 🔎 Search, category filter, and sort by rating/price  
- 🛒 Full cart system (add, remove, update quantities)  
- 🧾 Checkout workflow with tax and real-time currency conversion  
- 🔐 Secure authentication with login/register/logout  
- 🧠 Auth-based content rendering (e.g. checkout & reviews gated)  
- ⭐ Live review system with star ratings  
- 📜 Clean parchment-inspired responsive design  
- 🔄 Persistent cart and user session via `localStorage`  
- 🔌 REST API with Swagger docs at `/docs`  

---

## 📁 Project Structure

```
ecommerce-platform/
├── backend/              # Express API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── tests/
│   ├── utils/
│   ├── server.js
│   └── .env (excluded)
├── src/                  # React app
│   ├── components/
│   ├── context/
│   ├── pages/
│   ├── App.js
│   └── index.js
├── public/
├── .env                 # (excluded from repo)
├── .gitignore
├── README.md
└── package.json
```

---

## 🔐 API Overview

| Endpoint             | Method | Auth? | Description                     |
|----------------------|--------|-------|---------------------------------|
| `/api/products`      | GET    | No    | Get all products                |
| `/api/products`      | POST   | ✅    | Create a new product            |
| `/api/products/:id`  | PUT    | ✅    | Update a product                |
| `/api/products/:id`  | DELETE | ✅    | Delete a product                |
| `/api/orders`        | GET    | ✅    | Get current user's orders       |
| `/api/orders`        | POST   | ✅    | Place a new order               |
| `/api/auth/register` | POST   | No    | Create new user account         |
| `/api/auth/login`    | POST   | No    | Authenticate and return token   |
| `/api/reviews/:id`   | GET    | No    | Get reviews for a product       |
| `/api/reviews`       | POST   | ✅    | Submit review                   |

💡 Swagger UI available at: `https://your-backend-url.onrender.com/docs`

---

## ⚙️ Installation & Development

### Backend Setup

```bash
cd backend
npm install
npm run dev
```

### Frontend Setup

```bash
cd src
npm install
npm start
```

> Frontend dev server runs on `localhost:3000`, proxying API to `localhost:5000`.

---

## 🌍 Deployment

### Backend (Render.com)

1. Create new Render Web Service  
2. Root directory: `/backend`  
3. Build command: `npm install`  
4. Start command: `node server.js`  
5. Environment variables:  

```
MONGO_URI=<your-mongodb-uri>
JWT_SECRET=yourSuperSecret
PORT=5000
```

### Frontend (Vercel)

1. Deploy from GitHub  
2. Output directory: `build`  
3. Build command: `npm run build`  
4. Environment variable:  

```
REACT_APP_API_URL=https://ecommerce-platform-sm1k.onrender.com
```

---

## 🔧 Environment Configuration

### `/backend/.env`

```env
PORT=5000
MONGO_URI=secret
JWT_SECRET=secret
```

### `/src/.env`

```env
REACT_APP_API_URL=https://ecommerce-platform-five.vercel.app
```

---

## 🧪 Testing

```bash
npm run test
```

- Unit tests for products and orders  
- Integration auth and review flow  
- Basic coverage reports with Jest/Mocha  

---

## 🧠 Architecture Notes

- Cart state is stored via `CartContext` (React Context API)  
- User auth persists using `localStorage`  
- Backend is modular: routes/controllers/models separated  
- Middleware handles JWT token verification  
- Reviews tied to products by MongoDB population  

---

## 📌 Footer Branding

> Present on every page:  
**E-Commerce Project :: Dylan P.**

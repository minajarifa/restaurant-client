# Restaurant

## 📖 Description

Short description of your project.  
Explain what the project does and why it is useful.
Currently, two official plugins are available


## live site link

[Resturent]()





## Giithub link

[client site link](https://github.com/minajarifa/restaurant-client) <br></br>
[server site link](https://github.com/minajarifa/restaurant-server)

## ✨ Features

- User authentication (JWT / Firebase)
- Role-based access (Admin, User, etc.)
- CRUD operations (Create, Read, Update, Delete, post)
- Responsive design for mobile and desktop
- REST API integration
- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
## 🛠 Tech Stack
**Frontend:** HTML, React, Tailwind CSS  
**Backend:** Node.js, Express.js  
**Database:** MongoDB (Atlas)  
**Authentication:** JWT / Firebase  
**Hosting:** firebase hosting (frontend), Rvercel(backend)




## ⚙️ Installation

```bash

 https://github.com/minajarifa/restaurant-client.git




 project-name/
│
├── client/           # React part (frontend)
│   ├── public/       # index.html, favicon
│   ├── src/          # React code
│   │   ├── components/   # ছোট ছোট reusable UI parts (Navbar, Button, Card)
│   │   ├── pages/        # আলাদা আলাদা পেজ (Home, Login, Dashboard)
│   │   ├── routes/       # Routing setup (React Router)
│   │   ├── context/      # AuthProvider / Context API
│   │   ├── services/     # API call functions (axios/fetch)
│   │   ├── App.js
│   │   └── main.jsx      # Entry point (Vite হলে)
│   └── package.json
│
├── server/           # Node + Express part (backend)
│   ├── config/       # MongoDB connection (database.js)
│   ├── models/       # Database models (User.js, Service.js)
│   ├── routes/       # API routes (authRoutes.js, serviceRoutes.js)
│   ├── controllers/  # Logic (login, register, CRUD functions)
│   ├── middleware/   # Authentication check, error handler
│   ├── server.js     # Main backend file
│   └── package.json
│
├── .env              # Secret keys (MongoDB URL, JWT secret, etc.)
├── .gitignore
├── README.md
└── package.json      # root package.json (concurrently দিয়ে client+server চালাতে চাইলে)

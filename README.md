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
git clone https://github.com/minajarifa/restaurant-client.git
cd restaurant-client
npm install
npm start 
```

## Restaurant-client
```
📦src
 ┣ 📂assets
 ┃ ┗ 📜react.svg
 ┣ 📂AuthProvider
 ┃ ┗ 📜AuthProvider.jsx
 ┣ 📂Components
 ┃ ┣ 📂FoodCard
 ┃ ┃ ┗ 📜FoodCard.jsx
 ┃ ┣ 📂Section
 ┃ ┃ ┗ 📜Section.jsx
 ┃ ┗ 📂Title
 ┃ ┃ ┗ 📜Title.jsx
 ┣ 📂firebase
 ┃ ┗ 📜firebase.config.js
 ┣ 📂hooks
 ┃ ┣ 📜useAuth.jsx
 ┃ ┣ 📜useAxiosSecure.jsx
 ┃ ┣ 📜useCart.jsx
 ┃ ┗ 📜useMenu.jsx
 ┣ 📂Layouts
 ┃ ┣ 📜Dashboard.jsx
 ┃ ┗ 📜Main.jsx
 ┣ 📂Pages
 ┃ ┣ 📂Dashboard
 ┃ ┃ ┗ 📂Cart
 ┃ ┃ ┃ ┗ 📜Cart.jsx
 ┃ ┣ 📂Home
 ┃ ┃ ┣ 📂Banner
 ┃ ┃ ┃ ┗ 📜Banner.jsx
 ┃ ┃ ┣ 📂Category
 ┃ ┃ ┃ ┗ 📜Category.jsx
 ┃ ┃ ┣ 📂Featured
 ┃ ┃ ┃ ┣ 📜Featured.css
 ┃ ┃ ┃ ┗ 📜Featured.jsx
 ┃ ┃ ┣ 📂PopularManu
 ┃ ┃ ┃ ┗ 📜PopularManu.jsx
 ┃ ┃ ┣ 📂Testimonials
 ┃ ┃ ┃ ┗ 📜Testimonials.jsx
 ┃ ┃ ┗ 📜Home.jsx
 ┃ ┣ 📂Login
 ┃ ┃ ┗ 📜Login.jsx
 ┃ ┣ 📂Menu
 ┃ ┃ ┣ 📂Menu
 ┃ ┃ ┃ ┗ 📜Menu.jsx
 ┃ ┃ ┗ 📂MenuCategory
 ┃ ┃ ┃ ┗ 📜MenuCategory.jsx
 ┃ ┣ 📂Order
 ┃ ┃ ┗ 📂Order
 ┃ ┃ ┃ ┗ 📜Order.jsx
 ┃ ┣ 📂Register
 ┃ ┃ ┗ 📜Register.jsx
 ┃ ┗ 📂Shared
 ┃ ┃ ┣ 📂Cover
 ┃ ┃ ┃ ┗ 📜Cover.jsx
 ┃ ┃ ┣ 📂Footer
 ┃ ┃ ┃ ┗ 📜Footer.jsx
 ┃ ┃ ┣ 📂Header
 ┃ ┃ ┃ ┗ 📜Header.jsx
 ┃ ┃ ┗ 📂ManuItem
 ┃ ┃ ┃ ┗ 📜MenuItem.jsx
 ┣ 📂Routers
 ┃ ┣ 📜PrivateRoute.jsx
 ┃ ┗ 📜router.jsx
 ┣ 📜App.css
 ┣ 📜App.jsx
 ┣ 📜index.css
 ┗ 📜main.jsx
 ```
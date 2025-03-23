# Shaluk

## 📝 Overview  
**Shaluk** is a web app designed for **CUET students** to order food and essential medicines from local shops. It eliminates the struggle of finding supplies after evening hours, ensuring a smooth browsing, searching, and ordering experience. The platform includes an **admin panel** to manage shops, products, and deliveries efficiently.

## 🎯 Motivation  
Students at CUET often struggle to purchase food or medicine in the evening due to:

- **Lack of nearby shops** – Most essential stores are outside campus, making access difficult.
- **Dependence on friends** – Students rely on others going outside for tuition to bring necessities.
- **Restricted movement for female students** – The **women’s hall gate closes at 7 PM**, limiting their ability to buy essentials.
- **Urgent medical needs** – Sometimes, students require immediate medicine but face accessibility issues.

**Shaluk** solves these problems by providing a **centralized ordering platform** where students can conveniently place orders, and admins ensure timely deliveries.

## 🚀 Key Features  

| Feature                     | Description                                                                                     |
|-----------------------------|-------------------------------------------------------------------------------------------------|
| **🔐 User Authentication**   | Secure login and registration system for students.                                             |
| **🍽️ Food Ordering**        | Browse and order food from local shops inside CUET.                                          |
| **💊 Medicine Ordering**     | Get necessary medicines delivered conveniently.                                               |
| **📊 Admin Dashboard**       | Admins can add shops, products, and confirm deliveries.                                       |
| **📍 Local Shops Only**      | Ensures service reliability by including only CUET-based vendors.                             |

## 🛠️ Technologies & Tools  

| Technology            | Purpose                                      | Link                                               |
|-----------------------|----------------------------------------------|----------------------------------------------------|
| **PostgreSQL**        | Relational database for storing user and product data | [PostgreSQL](https://www.postgresql.org/)         |
| **Express.js**        | Backend framework for API development        | [Express.js](https://expressjs.com/)               |
| **React**             | Frontend framework for building the user interface | [React](https://reactjs.org/)                     |
| **React Redux**       | State management for efficient app performance | [Redux](https://redux.js.org/)                     |
| **GitHub**            | Version control for team collaboration       | [GitHub](https://github.com/)                     |

## 📦 Installation & Setup  

```bash
# Clone the repository
git clone https://github.com/NasrulKarib/Shaluk.git

# Navigate to the project directory
cd shaluk

# Navigate to backend
cd backend

# Install dependencies
npm install

# Navigate to frontend
cd ../frontend

# Install dependencies
npm install

# Start the development server
npm start
```
## Features
### Homepage
The homepage provides an overview of the platform, showcasing restaurants, foods, medicines, special offers and populer items etc. It serves as the main entry point for users to explore the items.

![alt text](./frontend//src/asset/Readme/homepage/homepage1.png)
![alt text](./frontend//src/asset/Readme/homepage/homepage2.png)
![alt text](./frontend//src/asset/Readme/homepage/homepage3.png)
![alt text](./frontend//src/asset/Readme/homepage/homepage4.png)
![alt text](./frontend//src/asset/Readme/homepage/homepage5.png)
![alt text](./frontend//src/asset/Readme/homepage/footer.png)


### All Foods and Medicines
Users can browse all foods by clicking up food in the header section. Same goes for medicines.

![alt text](./frontend//src/asset/Readme/products/foods.png)

![alt text](./frontend//src/asset/Readme/products/medicines.png)

### User Signup
New users can create an account by providing their details.

![alt text](./frontend//src/asset/Readme/auth/signup.png)

### User Login
Existing users can log in to their accounts to access their information, order history, and other personalized features.

![alt text](./frontend//src/asset/Readme/auth/login.png)

### Admin Dashboard
Admins have access to a dedicated dashboard where they can manage orders, add shops and items.

![alt text](./frontend//src/asset/Readme/admin/admin1.png)
![alt text](./frontend//src/asset/Readme/admin/admin2.png)
![alt text](./frontend//src/asset/Readme/admin/admin3.png)

### Add to cart
Users can add products to card and increase quantity. They can add a particular product at a time. They can watch their previous order records also

![alt text](./frontend//src/asset/Readme/order/cart.png)
![alt text](./frontend//src/asset/Readme/order/ordered_products.png)



### Description Page
This page provides detailed information about a specific items, including its name, price, rating and description .

![alt text](./frontend//src/asset/Readme/products/products1.png)

### Shop
This page shows the itmes of a particular restaurant.

![alt text](./frontend//src/asset/Readme/shop/shop.png)

## 🤝 Contributing  
Contributions are welcome! Feel free to open issues or submit pull requests to improve **Shaluk**.  

## 📜 License  
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---  
Made with ❤️ for CUET students.

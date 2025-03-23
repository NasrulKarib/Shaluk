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
The homepage provides an overview of the platform, showcasing featured books, top sellers, and new arrivals. It serves as the main entry point for users to explore the book collection.

![alt text](./frontend//src/assets/Readme/HomePage1.JPG)
Top Sellers Section Shows the top selling books at a certain period
![alt text](./frontend//src/assets/Readme/HomePage2.JPG)
Recommended for you shows curated books just for you
![alt text](./frontend//src/assets/Readme/HomePage3.JPG)

### All Books Page
This page displays a comprehensive list of all available books. Users can browse through the collection, filter by categories, and search for specific titles or authors.

![alt text](./frontend//src/assets/Readme/AllBooksPage.JPG)

### User Signup
New users can create an account by providing their details. This allows them to access personalized features such as adding books to their wishlist and placing orders.

![alt text](./frontend//src/assets/Readme/Register.JPG)

### User Login
Existing users can log in to their accounts to access their saved preferences, order history, and other personalized features.

![alt text](./frontend//src/assets/Readme/Login.JPG)

### Admin Dashboard
Admins have access to a dedicated dashboard where they can manage the book listings, including adding new books, updating existing ones, and removing books from the catalog.

![alt text](./frontend//src/assets/Readme/dashboardadmin.JPG)

### Add to cart
Users can add books to their cart for purchase. The cart keeps track of selected items and allows users to proceed to checkout when they are ready to complete their purchase.

![alt text](./frontend//src/assets/Readme/AddtoCart.JPG)

### Checkout Page
The checkout page provides a summary of the items in the user's cart and allows them to enter their shipping and payment information to complete the purchase.

![alt text](./frontend//src/assets/Readme/CheckoutPage.JPG)

### Order Page
The order page allows users to view their order history, track the status of their current orders, and manage their past purchases.

![alt text](./frontend//src/assets/Readme/OrderPage.JPG)

### Books Description Page
This page provides detailed information about a specific book, including its description, author, price, and reviews from other users.

![alt text](./frontend//src/assets/Readme/SingleBook.JPG)

### Related Books Section
The related books section suggests books similar to the one currently being viewed, helping users discover more books of interest.

![alt text](./frontend//src/assets/Readme/RelatedBooks.JPG)

## 🤝 Contributing  
Contributions are welcome! Feel free to open issues or submit pull requests to improve **Shaluk**.  

## 📜 License  
This project is licensed under the **MIT License**. See the `LICENSE` file for more details.

---  
Made with ❤️ for CUET students.

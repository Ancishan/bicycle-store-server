car Store API 🚴‍♂️
Welcome to the car Store API, a comprehensive backend application built using Express and TypeScript. This application integrates with MongoDB via Mongoose to provide robust data management for cars and orders. 🚲✨

Project Objective
Develop a feature-rich API to manage car products and customer orders, ensuring data integrity through Mongoose schema validation and handling various CRUD operations.

Features:
1.car Management
2.Add, update, delete, and view cars.
3.Enum-based categorization for car types.
4.Inventory management to track product availability.
5.Order Management
6.Place orders for cars with quantity and price validation.
7.Automatic inventory updates upon order placement.
8.Calculate total revenue using MongoDB aggregation.
9.Error Handling
-------------------------////--------------------
Comprehensive error responses for better debugging and validation feedback.

Technologies Used:

Backend: Node.js, Express
Language: TypeScript
Database: MongoDB
ODM: Mongoose
Linting & Formatting: ESLint, Prettier

Data Models:

Product (car):
Field	Type	Description
name	String	Name of the car
brand	String	Brand of the car
price	Number	Price of the car
type	Enum	Type: Mountain, Road, Hybrid, BMX, Electric
description	String	Brief description of the car
quantity	Number	Available quantity
inStock	Boolean	Indicates if the car is in stock

Order:
Field	Type	Description
email	String	Customer's email
product	ObjectId	Reference to the car
quantity	Number	Quantity ordered
totalPrice	Number	Total price (price * quantity)


Contributing:
Contributions are welcome! Please fork the repository and submit a pull request for any enhancements or bug fixes.

License:
This project is licensed under the ISC License.

Contact:
For questions or support, reach out to Shanto.

--------//Happy Car! 🚴‍♀️
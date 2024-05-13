# BlogNest

## Description

BlogNest is a robust Express MongoDB backend solution tailored for building powerful and scalable blogging platforms. This repository provides a comprehensive set of APIs to manage all aspects of a blog, including creating, updating, deleting, and retrieving blog posts, managing user authentication and authorisation.

## Key Features

- **Expressive API Endpoints:** Well-structured and intuitive API endpoints built using Express.js for seamless interaction with the MongoDB database.
- **MongoDB Integration:** Leveraging the flexibility and scalability of MongoDB for storing and managing blog data efficiently.
- **User Authentication:** Secure user authentication and authorization mechanisms implemented to ensure only authorized users can access and manage their blogs.
- **CRUD Operations:** Complete CRUD (Create, Read, Update, Delete) operations support for managing blog posts, enabling users to create, edit, delete, and view their content effortlessly.
- **Scalability & Performance:** Designed with scalability and performance in mind, allowing the backend to handle increasing traffic and growing content repositories efficiently.

## Usage

1. Clone the repository to your local machine.
2. Install dependencies using npm or yarn.
3. Configure environment variables for MongoDB connection, ACCESS_TOKEN_SECRET, ACCESS_TOKEN_LIFE and PORT.
4. Run the server using npm start or yarn start.
5. For development, you can run the server in watch mode using npm run dev.

## Blog API Endpoints

- **GET** `/api/blogs`
  - Description: Retrieve all blogs.
- **POST** `/api/blogs`
  - Description: Create a new blog.
- **PUT** `/api/blogs/:id`
  - Description: Update a specific blog by its ID.
- **GET** `/api/blogs/:id`
  - Description: Retrieve a specific blog by its ID.
- **DELETE** `/api/blogs/:id`
  - Description: Delete a specific blog by its ID.

## Authentication API Endpoints

- **POST** `/api/register`
  - Description: Register a new user.
- **POST** `/api/login`
  - Description: Log in an existing user.
- **GET** `/api/current`
  - Description: Retrieve information about the currently logged-in user.

## Contributing

Contributions are welcome! Feel free to fork the repository, make improvements or bug fixes, and submit pull requests. Please adhere to the contribution guidelines outlined in the repository.

## License

This project is licensed under the MIT License, granting you the freedom to use, modify, and distribute the code as per the terms specified in the license.

## Feedback & Support

If you have any questions, feedback, or need assistance, please don't hesitate to open an issue in the repository. I'm here to help and improve the project together!

Start building your next blogging platform with BlogNest and unleash the power of Express and MongoDB for seamless content management!

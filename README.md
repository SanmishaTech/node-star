# node-star

A simple Node.js REST API project built with Express, Prisma, and JWT.

## Features

*   User authentication and authorization
*   User management (CRUD operations)
*   Password reset functionality
*   Role-based access control (RBAC)
*   API documentation with Swagger

## Technologies Used

*   Node.js
*   Express.js
*   Prisma (ORM)
*   JSON Web Tokens (JWT)
*   Bcrypt
*   Joi
*   Swagger
*   MySQL

## Installation

1.  Clone the repository:

    ```bash
    git clone <repository_url>
    ```

2.  Navigate to the project directory:

    ```bash
    cd node-star
    ```

3.  Install dependencies:

    ```bash
    npm install
    ```

4.  Create a `.env` file in the root directory.  See `.env` file example below.

5.  Configure the `.env` file with your database connection string, JWT secret, and email settings.  Example:

    ```
    PORT=3000
    DATABASE_URL="mysql://root:your_password@localhost:3306/node_star"
    JWT_SECRET="your_jwt_secret"
    EMAIL_HOST="smtp.example.com"
    EMAIL_PORT=587
    EMAIL_USER="your_email@example.com"
    EMAIL_PASSWORD="your_email_password"
    EMAIL_FROM="your_email@example.com"
    ALLOW_REGISTRATION=true
    DEFAULT_USER_ROLE='user'
    ```

6.  Run database migrations:

    ```bash
    npx prisma migrate dev --name init
    ```

7.  Generate the Prisma client:

    ```bash
    npx prisma generate
    ```

8.  Start the server:

    ```bash
    npm start
    ```

    or for development:

    ```bash
    npm run dev
    ```

## API Documentation

API documentation is available at `http://localhost:3000/api-docs` when the server is running.

## Environment Variables

The following environment variables are required:

*   `PORT`: The port the server will listen on (default: 3000).
*   `DATABASE_URL`: The connection string to your MySQL database.
*   `JWT_SECRET`: A secret key used to sign JWTs.
*   `EMAIL_HOST`: The host for your email server.
*   `EMAIL_PORT`: The port for your email server.
*   `EMAIL_USER`: The username for your email account.
*   `EMAIL_PASSWORD`: The password for your email account.
*   `EMAIL_FROM`: The email address used as the sender.
*   `ALLOW_REGISTRATION`:  Boolean value to enable or disable user registration (default: true).
*   `DEFAULT_USER_ROLE`:  The default role assigned to newly registered users (default: 'user').

## Database

This project uses Prisma as an ORM to interact with a MySQL database.  Ensure you have a MySQL server running and update the `DATABASE_URL` in the `.env` file accordingly.

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License

[License] (https://choosealicense.com/licenses/mit/)
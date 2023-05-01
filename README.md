# Nest.js E-commerce Site Backend

This repository contains the backend code for an e-commerce site built with Nest.js. The backend provides APIs for various functionalities of the site, such as managing products, favorite, auth,basket and user.

## Getting Started

To get started with the project, you need to have the following prerequisites installed on your machine:

- Node.js (v14 or higher)
- npm (v6 or higher)

Once you have installed the prerequisites, you can clone the repository and install the dependencies by running the following commands:

```sh
git clone https://github.com/batuhanbaybas/nest-ecommerce.git
cd nest-ecommerce
npm install
```

After the dependencies are installed, you can start the development server by running:

```sh
npm run start:dev
```

This will start the server on `http://localhost:3000`.

## Environment Variables

The following environment variables need to be set before running the server:

- `DATABASE_URL`: The URL of the Postgres database.
- `JWT_SECRET`: The secret key used to sign JWT tokens.

You can set these environment variables by creating a `.env` file in the root directory of the project and adding the key-value pairs in the format `KEY=VALUE`.

## Contributing

If you want to contribute to the project, you can fork the repository, make your changes, and submit a pull request. Please make sure to follow the coding standards and write tests for your code.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

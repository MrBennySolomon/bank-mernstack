# [Bank MERN Stack](https://bank-api-client.netlify.app/)
### Bank MERN Stack is a simple web application built using the MERN stack. The app allows users to create bank accounts, deposit and withdraw money, and transfer money to one another 

### front-end : vite react app
### back-end  : node.js, Express, mongoDB, mongoose

```dependencies
"dependencies": {
		"cors": "^2.8.5",
		"dotenv": "^16.0.3",
		"express": "^4.18.2",
		"mongoose": "^7.0.2",
		"morgan": "^1.10.0",
		"nodemon": "^2.0.21",
		"slugify": "^1.6.5"
	}
  ```

#### MongoDB Atlas

To run this project, you'll also need to have a MongoDB Atlas account and create a project for this project in MongoDB Atlas. Once you have created a project in MongoDB Atlas, you can obtain your MongoDB URI, which you will need to set as an environment variable in the `config.env` file to connect to your database. See the [Local Environment Variables](#local-environment-variables) section in this README for more information.

## Installation
After cloning the repository, run the following command to install the required dependencies:

```bash
npm install
```

## Local Environment Variables
In order to run the project locally, you'll need to set some environment variables. Create a `config` folder in the root directory of the project, and add a file named `config.env` with the following variables:

```env
NODE_ENV=development
PORT=5000
MONGO_URI=<Your MongoDB URI>
```

Make sure to replace `<Your MongoDB URI>` with the actual URI for your MongoDB instance.

## Running the Project
To start the server in development mode with nodemon, run the following command:

```bash
npm run dev
```

The server should now be running on `http://localhost:5000`.

### live preview at: [https://bank-api-client.netlify.app/](https://bank-api-client.netlify.app/)

### first diagram: 
![project_diagram](https://user-images.githubusercontent.com/53153372/227730260-701fc983-a14d-4163-ba2c-8afa4234472f.png)

### screen shots:
![website-screenshot](https://user-images.githubusercontent.com/53153372/227730339-0b27afe4-c43a-4c4d-8903-b7fa51144292.png)

## License
This project is licensed under the MIT License.

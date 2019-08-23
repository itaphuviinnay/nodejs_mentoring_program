Node JS Mentoring Program Application

#### Requirements

- NodeJS version > 8

#### Installing the required dependencies

- npm install

#### Commands to run the application

- **List of scripts**

  - `npm run plain-text-server`
  - Starts a http server with `"Content-Type": "text/plain"` and returns `Hello World` as response

  - `npm run html-server`
  - Starts a http server with `"Content-Type": "text/html"` and returns html file content as response

  - `npm run html-server-stream`
  - Starts a http server with `"Content-Type": "text/html"` and returns html file content as response using streams

  - `npm run json-server`
  - Starts a http server with `"Content-Type": "application/json"` and returns a sample json response

  - `npm run express-server`
  - Starts an express application which responds to the below routes

    | URL                       | Method | Action                               |
    | ------------------------- | ------ | ------------------------------------ |
    | /api/products             | GET    | Return ALL Products                  |
    | /api/products/:id         | GET    | Return details of SINGLE Product     |
    | /api/products/:id         | DELETE | Deletes a SINGLE Product             |
    | /api/products             | POST   | Add NEW Product and returns it       |
    | /api/products/:id/reviews | GET    | Returns reviews for a SINGLE Product |
    | /api/users                | GET    | Returns ALL Users                    |
    | /api/user/:id             | DELETE | Deletes a SINGLE User                |
    | /api/cities               | GET    | Return ALL Cities                    |
    | /api/cities/random        | GET    | Randomly returns details of a city   |
    | /api/cities               | POST   | Add NEW City and returns it          |
    | /api/cities/:id           | PUT    | Updates a SINGLE City                |
    | /api/cities/:id           | DELETE | Deletes a SINGLE City                |

**Running the application with Sequelize**

- After running `npm install`, run the command `npm run express-server`.
- It starts the express server which automatically connects to the cloud mongoDB instance with seed data for products, user and cities
- Now visiting the routes mentioned in the above section, will retrieve data from the database
- Sample payloads can be found under `src/express-app/db/` directory

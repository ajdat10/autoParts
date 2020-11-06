# Make Your Own API 

You will be making your own API with this deliverable. This includes Schemas, Controllers/Routes, and a Server. What you create with your API is totally up to you, however, we do have a few requirements and/or recommendations. Be creative, this API is entirely up to you. Use examples from what we've covered on APIs this week, you can do this! 

## To Get Started
- Create a new repo
- Inside that repo `touch server.js .gitignore`
- `npm init -y` to set up your package.json
- Then `npm i express mongoose nodemon`
- For middleware, `npm i morgan cors body-parser`
- Remember that to use your packages, you need to require them in your server, then use them.
- Add your `node_modules` and `package-lock.json` to your `.gitignore` file.
- If you don't want to make scripts to run your server, change the "main" inside package.json (line 4) to `server.js`
- Once your app is listening to a PORT just run `nodemon` from your repo on the command line.

## Requirements
- Your API should have a MongoDB database connection to create your database.
- Your API should have at least 3 Schemas/models with at least 1 association/relationship between models.
- Your server should require express, use some middleware, connect to your database connection, have a route that connects to your AppRouter, and be listening on a PORT.
- Your API should have routes/controllers with specific paths and include full CRUD on at least one model in your database.

## Recommendations
- Keep it simple, overcomplicating your models will make building routes more difficult.
- Use lessons and labs as a reference for the structure of your API.
- You **don't** need a seed file. You can create data from your routes with `Insomnia`

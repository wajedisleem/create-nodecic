# create-nodecic

A CLI tool to quickly scaffold Node.js Express applications with a clean, organized structure.

## Features

- 🚀 Quick project scaffolding
- 📁 Clean folder structure with MVC pattern
- 🛠️ Pre-configured Express setup
- 🔧 Built-in error handling
- 📦 Automatic dependency installation
- 🎯 ES6 modules support

## Installation

You can use `create-nodecic` without installing it globally by using npm's `create` command:

```bash
npm create nodecic my-app
```

Or install it globally:

```bash
npm install -g create-nodecic
create-nodecic my-app
```

## Usage

```bash
npm create nodecic <project-name>
```

Replace `<project-name>` with your desired project name.

### Example

```bash
npm create nodecic my-express-app
cd my-express-app
node index.js
```

## Generated Project Structure

```
my-express-app/
├── index.js                    # Main application entry point
├── routes.js                   # Route definitions
├── controllers/
│   └── home.controller.js      # Home page controller
├── handlers/
│   ├── error.handler.js        # Global error handler
│   └── notfound.handler.js     # 404 handler
├── package.json                # Project dependencies and scripts
└── public/                     # Static files (created automatically)
```

## What's Included

The generated project includes:

- **Express.js** web framework
- **ES6 modules** support (`"type": "module"` in package.json)
- **MVC architecture** with controllers and routes
- **Error handling** middleware
- **404 handler** for unmatched routes
- **Static file serving** from `public` directory
- **JSON body parsing** enabled

## Generated Code Overview

### Main Server (`index.js`)
- Express app setup
- Middleware configuration
- Route registration
- Error handling setup
- Server startup on port 3000 (or PORT env variable)

### Routes (`routes.js`)
- Router setup using Express Router
- Home route configuration
- Modular route organization

### Controllers (`controllers/`)
- `home.controller.js` - Handles home page requests

### Handlers (`handlers/`)
- `error.handler.js` - Global error handling middleware
- `notfound.handler.js` - 404 error handling

## Getting Started with Generated Project

After creating your project:

1. Navigate to the project directory:
   ```bash
   cd your-project-name
   ```

2. Start the development server:
   ```bash
   node index.js
   ```

3. Open your browser and visit `http://localhost:3000`

## Customization

The generated project provides a solid foundation that you can extend:

- Add more routes in `routes.js`
- Create additional controllers in the `controllers/` directory
- Add middleware for authentication, logging, etc.
- Configure a database connection
- Add environment variable configuration
- Set up testing frameworks

## Requirements

- Node.js 14 or higher
- npm 6 or higher

## Development

To contribute to create-nodecic:

1. Clone the repository
2. Install dependencies: `npm install`
3. Make your changes
4. Test locally: `node index.js test-project`


## Author

Wajed Isleem

---

**Happy coding! 🎉**

# LAB 08: Full-Stack App (OPTIONAL)

Build a full-stack application.

## Back-End

Create a back-end application using `express`. You should have at least one
model and all CRUD routes for that model.

## Front-End

Create a `public` directory with HTML, CSS, and JavaScript files. Serve your
front-end files from your express application using:

```js
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url); // Get the current file's path
const __dirname = path.dirname(__filename); // Get the directory that this file is in

const app = express();

app.use(express.static(`${__dirname}/../public`));
app.use(express.json());

// Rest of your express app here
```

## Rubric

- tests (2 points)
- model class (1 point)
- controller (1 point)
- service class (2 points)
- front-end hosted in `/public` (4 points)

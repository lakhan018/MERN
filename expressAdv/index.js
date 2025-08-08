/*
const express = require('express');

Here are key Express.js concepts for beginners:

1. **What is Express.js?**
    - A minimal and flexible Node.js web application framework.

2. **Setting Up Express**
    ```js
    const app = express();
    const port = 3000;

    app.listen(port, () => {
      console.log(`Server running on port ${port}`);
    });
    ```

3. **Basic Routing**
    ```js
    app.get('/', (req, res) => {
      res.send('Hello World!');
    });
    ```

4. **Middleware**
    - Functions that execute during the request-response cycle.
    ```js
    app.use(express.json());
    ```

5. **Serving Static Files**
    ```js
    app.use(express.static('public'));
    ```

6. **Handling POST Requests**
    ```js
    app.post('/data', (req, res) => {
      res.json(req.body);
    });
    ```

7. **Route Parameters**
    ```js
    app.get('/user/:id', (req, res) => {
      res.send(`User ID: ${req.params.id}`);
    });
    ```

8. **Error Handling**
    ```js
    app.use((err, req, res, next) => {
      res.status(500).send('Something broke!');
    });
    ```

Learn these basics to start building web applications with Express.js.*/

const express = require("express");
const app = express();
const port = 3000;
// assuming you are a patient who is doing checkup to doctor but there are number of procedures like insurecs payment wagera wagera these are called middleware
// prechecks --> authentication // input validation
// what is the best way to handle these prechecks?
// ans --> middleware

app.get("/", (req, res) => {
    //email . pass . kid .

    var email = req.headers.email;
    var password = req.headers.password;
    var kid = req.query.kid;

      if (email != "dushantpariskar@gmail.com") {
        res.status(401).send("Unauthorized: Invalid email");
        return;
      } else {
        if (password  != 123456) {
          res.status(401).send("Unauthorized: Invalid password");
          return;
        } else {
          if (kid != 1) {
            res.status(401).send("Unauthorized: Invalid kid");
            return;
          }
        }
    }
    res.end("your heart is healthy");
  })
  .listen(port, () => {
    console.log(`Server running on port ${port}`);
  });

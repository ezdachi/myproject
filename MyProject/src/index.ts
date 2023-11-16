import { AppDataSource } from "./data-source"
import { User } from "./entity/User"
import * as path from 'path';

import express = require('express');
const app = express();
const port = 3000;
app.use (express.json());   // ეს იმისთვის რომ გაანალიზოს ექსპრესმა შემოსული ჯსონ მოთხოვნები 


app.get('/', (req, res) => {
    res.send('Hello, Express!');
  });


app.get('/games' , async (req , res)  => {
  const game = await AppDataSource.query('SELECT * from games');              //მოაქვს ბაზიდან თამაშები ჯსონის სახით
  res.json(game)
} ) 

app.get('/create', async (req, res) => {
    const useri  = await AppDataSource.query('SELECT * FROM user');
    res.json(useri);
  });

app.post('/create', async(req , res) => {
    try{
        const {username , email , password } = req.body;
        const user = new User();
        user.username = username ;
        user.email = email ;                                        //მოელის JSON მონაცემებს მოთხოვნის სხეულში, ქმნის მომხმარებლის ახალ ობიექტს      
        user.password = password;                                   // ინახავს მას მონაცემთა ბაზაში და პასუხობს 'chaitvirta'-ით.
        await AppDataSource.manager.save(user);
        res.json('chaitvirta')
    } catch {
        console.log("archaitvirta")
    }
});









AppDataSource.initialize().then(async () => {

    app.listen(port, () => {
        console.log(`Server listening at http://localhost:${port}`);
      });

    console.log("Inserting a new user into the database...");



}).catch(error => console.log(error))




// user password avawyo  
//password validacia gavuketo roca login mivce magshemtxevashi paroli agiqvas da authethikacia gaauketos
//autorizacias rom gaivlis am konkretuli useris tamashebis gverdze rom gadavides da yidvis sakitxic davamato rom yidva sheedzlos
//passport funqcia gavnxilo
const express = require('express')
const app = express()
app.use(express.json());

let users = [{
    name:"default",
    email:"default@gmail.com",
    password:"123456"
},{
    name:"default1",
    email:"default1@gmail.com",
    password:"123456"
},{
    name:"default2",
    email:"default2@gmail.com",
    password:"123456"
}];

app.get('/list',(req,res)=>{
    return res.json(users);
})
app.post('/signup',(req,res)=>{
    const data = req.body;
    if(data.email === undefined || data.password === undefined || data.name === undefined){
       return res.status(400).json({
            message: "name, email and password are required"
        })
    }    
    // for(let i=0;i<users.length;i++){
    //     if(users[i].email===data.email){
    //         return res.status(400).json({
    //             message: "User already exists"
    //         })
    //     }
    // }
    const user = users.find(user => user.email === data.email);
    if(user){
        return res.status(400).json({
            message:"user already exists"
        })
    }
    users.push(data);
    //do database changes update models anything 
    //authentication logic
    return res.status(201).json({
        message: "user created successfully",
        token:"token"
    });
})
app.post('/signin',(req,res)=>{
    const data =req.body;
    if(data.email ===undefined || data.password ===undefined){
        return res.status(400).json({
            message:"email and password are required"
        })
    }
    // for(let i=0;i<users.length;i++){
        //     if(users[i].email===data.email){
        //         return res.status(400).json({
        //             message: "User already exists"
        //         })
        //     }
        // }
    const user = users.find(user => user.email === data.email);
    if(!user){
        return res.status(400).json({
            message:"user does not exists"
        })
    }
    if(user.password !== data.password){
        return res.status(400).json({
            message:"password does not match"
        })
    }
    return res.status(200).json({
        message:"user logged in successfully",
        token:"token"
    })
})
app.put('/update',(req,res)=>{
    //update the username
    //check the data is correct or not
    //check if user exists or not
    // change the name 
    // sends back the response
})

app.delete('/delete',(req,res)=>{
    //check the data is correct or not
    //check if the user is present or not
    // check if the password is correct or not
    // deletes the user from data base
    // sends back the response
})

app.listen(3000,()=>{
    console.log('server is running on port 3000')
})



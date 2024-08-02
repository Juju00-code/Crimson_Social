const users = [
    {
        id : 1,
        username : "crimnode",
        firstname : "Connect",
        lastname : "Crimson",
        password : "1234567",
        email : "crimnode@me.in"
    },
    {
        id : 2,
        username : "crimnode",
        firstname : "Connect",
        lastname : "Crimson",
        password : "1234567",
        email : "crimnode@me.in"
    },
    {
        id : 3,
        username : "crimnode",
        firstname : "Connect",
        lastname : "Crimson",
        password : "1234567",
        email : "crimnode@me.in"
    },
    {
        id : 4,
        username : "crimnode",
        firstname : "Connect",
        lastname : "Crimson",
        password : "1234567",
        email : "crimnode@me.in"
    }

]

//handling errors

exports.register = async(req,res)=>{
    //create a json object for a user registration 
    const userId = Math.floor(Math.random() * 1000)
    req.body.id = userId
    const newUsers = users.push(req.body)
    res.status(201).json({msg:"Registration successful.Please login", newUser})
}

exports.login = async(req,res) =>{
    res.status(200).json({message : "You have successfully logged in"})
}

exports.fetchUsers = async(req,res) =>{
    res.status(200).json({users})
}


//Other ways to export functions


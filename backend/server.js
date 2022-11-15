const express=require('express')
const dotenv=require('dotenv').config()
const port=process.env.PORT || 4000;
const {errorHandler}=require('./middleware/errorMiddleware')
const connectDB=require('./config/db')
const app=express()
// const fileUpload=require('express-fileupload')
// const bodyParser = require('body-parser')

connectDB()


// app.use(fileUpload());
const cors = require('cors')

app.use(cors())


app.use(express.json())
app.use(express.urlencoded({extended:false}))

app.use('/api/users',require('./routes/userRoutes'))

app.use('/api/admins',require('./routes/adminRoutes'))


app.use(errorHandler)


app.listen(port,()=>console.log(`Server started on port ${port}`))
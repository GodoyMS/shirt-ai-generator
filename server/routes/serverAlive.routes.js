import express from 'express';

const router = express.Router();

setInterval(()=>{
    router.route('/').get((req, res) => 
        {
        res.status(200).json({ message: "Server alive" })  
        }
     )
  },300000)

  export default router;
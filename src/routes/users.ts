import { Router, Request, Response } from 'express';
import  User  from '../model/userModel';

const router = Router();

router.post('/add', (req: Request, res: Response) => {
    let output = {flag: false, message: "", data:{}}
    const newUser = new User({
        name: req.body,
        state: req.body,
        profession: req.body,
        marital_status: req.body,
      }); 

    newUser.save()

    output.flag = true;
    output.message = "user successfully saved";
    output.data = newUser;

    res.status(200).json(output)
})


export default router;
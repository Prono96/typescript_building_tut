import { Router, Request, Response } from 'express';
import  User  from '../model/userModel';

const router = Router();

router.post('/user/add', (req: Request, res: Response) => {
    let output = {flag: false, message: "", data:{}}
    const newUser = new User({
        name: req.body.name,
        state: req.body.state,
        profession: req.body.profession,
        marital_status: req.body.marital_status,
    }); 

    const savedUser = newUser.save()
    if (!savedUser) {
        output.message = "user saved failed";
        return output
    }

    output.flag = true;
    output.message = "user successfully saved";
    output.data = newUser;

    res.status(200).json(output)
})

export default router;
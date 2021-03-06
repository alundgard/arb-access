import { Request, Response } from 'express';
import config from '../config';

let user = require('../models/task');

class taskController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.session.username;
        console.log("Task, Logged in as: ", id);

        let next = req.query.next;
        console.log("Next task is: ", next);
       
        // Todo: Get correct task based on user progress

        res.redirect('/arb/' + next + '.html?ip=' + config.ip);
    }
}

export default new taskController();
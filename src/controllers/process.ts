import { Request, Response } from 'express';

let process = require('../models/process.ts');

class processController {

    constructor() {};

    public get(req: Request, res: Response) {
        let id = req.query.id;
        if (id === undefined) id = 'undefined';
        res.render('home', {
            id: id
        });
    }

    public post(req: Request, res: Response) {
        
        let data = req.body;
        data.username = req.session.username;

        console.log(data);

        // query a database and save data
        let DB_Proc = new process(data);
        DB_Proc.save();

        // res.status(200).send(data);
        res.redirect('/task'); // go to next task
    }

}

export default new processController()
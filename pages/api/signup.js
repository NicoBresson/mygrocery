import { createUser } from '../../lib/user';

export default function signup(req, res) {
    const {body} = req.body
    const createdUser = createUser(body)
    res.json(createdUser);
};

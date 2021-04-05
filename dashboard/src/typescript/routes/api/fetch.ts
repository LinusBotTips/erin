import * as express from 'express';
const router:express.Router = express.Router();

router.get('/',(req:express.Request,res:express.Response)=>{
    res.send({'msg':'fetch api endpoint is still in prod'})
});

module.exports = router;
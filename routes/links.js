const  express = require('express');
const router = express.Router();
const Link = require('../models/link');
const shortid = require('shortid');

router.post('/short', async (req, res) => {
    const {link} = req.body;
    try {
        let url = await Link.findOne({Link});
        if (url){
            return res.json(url);
        }

        const code = shortid.generate();
        const shortUrl = `localHost:3000/links/${code}`;
        url = new Link({
            code,
            source: link,
            short: shortUrl
        });
        await url.save();
        return res.json(url);
    } catch(e) {
        return res.status(500).json({status: 500, message: JSON.stringify(e)});
    }
    
});

router.get('/:code', (req, res) => {
    
});


module.exports = router;
try {
    const express =  require('express');
    const router = express.Router();
    const userController = require('../controller/user.controller');

    router.post('/', userController.addUser);

    module.exports = router;
} catch (error) {
    
}
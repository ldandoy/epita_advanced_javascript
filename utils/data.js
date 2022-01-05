const mongoose = require('mongoose');

mongoose.connect(
    'mongodb://localhost:27017/eptia-adv', 
    {},
    (error) => {
        if(error) throw error
        console.log('Mongodb connected !')
    }
)
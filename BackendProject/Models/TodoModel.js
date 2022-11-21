const mongoose = require('mongoose');

const TodoInfo = mongoose.Schema({
    Username:{
        type:String
    },
    TodoSubject:{
        type:String,
    },
    TodoDescription:{
        type:String
    },
    TodoStatus:{
        type:String,
    },
    TodoCreateDate:{
        type:Date,
    },
    TodoUpdateDate:{
        type:Date,
    }
});

const TodoModel =mongoose.model("tododatabase",TodoInfo);
module.exports = TodoModel ;
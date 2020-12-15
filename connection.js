var mongoose = require("mongoose");

// create the connection information for the sql database
mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/bootcamp',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    }
);


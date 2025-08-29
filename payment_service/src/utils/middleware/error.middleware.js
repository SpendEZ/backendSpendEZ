const errorMiddleware = (err, req, res, next) => {
    try{
        let error = { ...err};

        error.message = err.message;

        console.error(err);

        // postgres bad request error
        if(err.name === 'SequelizeValidationError') {
            const message = Object.values(err.errors).map(val => val.message);
            error = new Error(message);
            error.statusCode = 400;
        }
        //postgres duplicate key error
        if(err.name === 'SequelizeUniqueConstraintError') { 
            error = new Error('Duplicate field value entered');
            error.statusCode = 400;
        }
        // postgres not found error
        if(err.name === 'SequelizeDatabaseError') {
            error = new Error('Resource not found');
            error.statusCode = 404;
        }
        //postgres foreign key error
        if(err.name === 'SequelizeForeignKeyConstraintError') {     
            error = new Error('Foreign key constraint error');
            error.statusCode = 400;
        }
        //post

    }catch(error){
        next(error)
    }
}

export default errorMiddleware;
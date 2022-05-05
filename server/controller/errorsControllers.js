const globalErrorHandler = ( error, req, res, next ) => {
    
    res.status(500).json({ 
        status: 'error',
        error
     })
} 

module.exports = { globalErrorHandler }
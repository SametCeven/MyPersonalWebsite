function authenticateApiKey(req,res,next){
    const userApiKey = req.header("x-api-key")
    if(!userApiKey || userApiKey !== process.env.API_KEY){
        return res.status(403).json({error:"Invalid API Key"})
    }
    next()
}

module.exports = authenticateApiKey

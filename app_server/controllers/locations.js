// get home page

module.exports.homelist = (req, res, next)=>{
    res.render('index', {title:'Home'});
}

// get Location info page
module.exports.locationInfo = (req, res, next)=>{
    res.render('index', {title:'Location Info'});
}

//get  add review page

module.exports.addReview = (req, res, next)=>{
    res.render('index', {title: 'Add Review'});
}
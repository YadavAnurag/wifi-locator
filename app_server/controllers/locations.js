// get home page

module.exports.homelist = (req, res, next)=>{
    res.render('locations-list', {title:'Home'});
}

// get Location info page
module.exports.locationInfo = (req, res, next)=>{
    res.render('location-info', {title:'Location Info'});
}

//get  add review page

module.exports.addReview = (req, res, next)=>{
    res.render('location-review-form', {title: 'Add Review'});
}
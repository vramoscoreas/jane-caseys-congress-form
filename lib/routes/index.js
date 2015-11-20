
function goHome(req,res){
  res.render('home');
}

function success(req,res){
  res.render('success');
}

function failure(req,res){
  res.render('failed');
}

//register routes
module.exports = function(router){


  router.get('/',goHome);
  router.get('/forms/',goHome);
  router.get('/success',success);
  router.get('/failed',failure);

};
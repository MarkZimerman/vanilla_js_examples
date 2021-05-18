window.onload = function() {
	
    let btn = document.querySelector('.btn');
    btn.addEventListener('click', outerFunction);
    
  }
  
  function outerFunction(e, stop){
      
      console.log('Outer function triggered', stop);
    if (!stop) {
        innerFunction();
    }
    
    function innerFunction(){
        console.log('Inner function triggered');
      outerFunction(null, true);
    }
  }
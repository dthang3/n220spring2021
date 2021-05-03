function checkMemory(element, value){
    if(value){
        element.innerHTML = '<span class="display-grid-value" value='+value+'>'+value+'<span>';
    var grids = document.getElementsByClassName('display-grid-value');
        if(grids.length == 2){
            if(parseInt(grids[0].innerText) == parseInt(grids[1].innerText)){
            setTimeout(function(){
                 while(grids.length > 0) {
                    grids[0].parentNode.remove();
                }
            }, 1000);
            }else{
                setTimeout(function(){
                    while(grids.length > 0) {
                        grids[0].parentNode.removeChild(grids[0]);
                    }
                }, 1000);
            }
        }
    }
    
}
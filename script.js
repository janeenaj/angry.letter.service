window.onload = function(){
    let list = document.querySelectorAll('.tit h2');
    let pro = document.querySelectorAll('#container .list');
    for (let i in list){
    list.item(i).addEventListener('click',function(){
       tab(i);
    });
}            
    
function tab(num){
    for (let j in list){
        list.item(j).removeAttribute('class');
        pro.item(j).style.display = 'none';
    }
    list.item(num).setAttribute('class','on');
    pro.item(num).style.display = 'block';
}
    
};
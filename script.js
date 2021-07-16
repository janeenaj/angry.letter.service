window.onload = function(){
    let tit = document.querySelectorAll('.tit h2');
    let li = document.querySelectorAll('.li');
    for (let i in tit){
    tit.item(i).addEventListener('click',function(){
       tab(i);
    });
}            
    
function tab(num){
    for (let j in tit){
        tit.item(j).removeAttribute('class');
        li.item(j).style.display = 'none';
    }
    tit.item(num).setAttribute('class','on');
    li.item(num).style.display = 'block';
    

    let open = document.querySelector('.open');

    let pop = document.querySelector('.pop');

    open.addEventListener('click',function(){
    pop.style.display = 'block';
    });
    const closeBtn = pop.querySelector(".close")
    closeBtn.addEventListener("click", e => {
        pop.style.display = "none"
    })
   };
};
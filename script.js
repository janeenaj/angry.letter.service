window.onload = function(){
    let list = document.querySelectorAll('.tit h2');
    let pro = document.querySelectorAll('#container .list');
    for (let i in list){
    list.item(i).addEventListener('click',function(){
       tab(i);
    });

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
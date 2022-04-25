const navigation = document.querySelector('.navigation');


window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    if(scroll>60){
        navigation.classList.add("scroll")
    } else navigation.classList.remove("scroll")
})
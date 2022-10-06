const navigation = document.querySelector('.navigation');
const sections = document.querySelectorAll('section')
const navLi = document.querySelectorAll('.navigation li')



window.addEventListener('scroll', ()=>{
    let scroll = window.scrollY;
    let currentY = "";
    if(scroll>60){
    sections.forEach(section =>{
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if(scroll >= sectionTop-400){
            currentY = section.getAttribute('id')
        }
    })
    navLi.forEach( li => {
        li.classList.remove('active')
        if(li.classList.contains(currentY)){
            li.classList.add('active')
        }
    })
    
        navigation.classList.add("scroll")
    } else navigation.classList.remove("scroll")
})
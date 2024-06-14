const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const articales = document.querySelectorAll(".content");

about.addEventListener("click", function(e){
    const id = e.target.dataset.id; 
    if(id){// remove active from all btn
        btns.forEach(function(btn){
            btn.classList.remove("active");
            e.target.classList.add("active");
        });
        //hide other articles
        articales.forEach(function(articale){
            articale.classList.remove("active");
        })
        const element = document.getElementById(id);
        element.classList.add("active");
    }
})
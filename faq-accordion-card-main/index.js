const question = document.querySelectorAll(".faq-questions");
question.forEach((item)=>{
    item.addEventListener('click',()=>{
        let childStyle = item.childNodes[3].style.display
        if(childStyle === "inline"){
            item.childNodes[3].style.display = 'none'
        }else{
            item.childNodes[3].style.display = 'inline'
        }
 })
})

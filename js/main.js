const tables = document.querySelector('.tables');
const tablesImg = document.querySelector('.tablesImg');
tables.addEventListener("mouseover", ()=>{
    tablesImg.src = "./Assets/img/tables_pink.png";
})
tables.addEventListener("mouseout", ()=>{
    tablesImg.src = "./Assets/img/table.png";
})
const about = document.querySelector('.about');
const aboutImg = document.querySelector('.aboutImg');
about.addEventListener("mouseover", ()=>{
    aboutImg.src = "./Assets/img/about_pink.png";
})
about.addEventListener("mouseout", ()=>{
    aboutImg.src = "./Assets/img/about.png";
})
const feed = document.querySelector('.feedback');
const feedbackImg = document.querySelector('.feedbackImg');
feed.addEventListener("mouseover", ()=>{
    feedbackImg.src = "./Assets/img/feedback_pink.png";
})
feed.addEventListener("mouseout", ()=>{
    feedbackImg.src = "./Assets/img/feedback.png";
})

const save = document.querySelector('.save');
const saveImg = document.querySelector('.saveImg');
save.addEventListener("mouseover", ()=>{
    saveImg.src = "./Assets/img/save_pink.png";
})
save.addEventListener("mouseout", ()=>{
    saveImg.src = "./Assets/img/save.png";
})
// POP UP FOR ADD NEW USER(Get Started)
let popUp = document.getElementById('pop-up-bg'),
    showForm = document.getElementById('open-pop-up'),
    closeForm = document.querySelector('.close-pop-up');

showForm.addEventListener('click', function(){
    popUp.style.display = 'block';
})

closeForm.addEventListener('click', function(){
    popUp.style.display = 'none';
})



// SIDE BAR
let sideBar = document.getElementById('side-bar-bg'),
    openSideBar = document.getElementById('open'),
    closeSideBar = document.getElementById('close');

openSideBar.addEventListener('click', function(){
    sideBar.style.display = 'block';
})    
closeSideBar.addEventListener('click', function(){
    sideBar.style.display = 'none';
})    
var 


function toggleDropdown(){
    let navbarToggle = document.getElementById("navbarToggle");
    if(navbarToggle.classname == 'topnav'){
        navbarToggle.className += ' responsive';
    }else{
        navbarToggle.className = 'topnav';
    }
}
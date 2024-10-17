document.addEventListener("DOMContentLoaded", function() {
const searchInput = document.getElementById('searchInput');
const profiles = document.querySelectorAll('.profile');
const date = document.getElementById('dates')

let currentDate  = new Date()
let currentYear  = currentDate.getFullYear()
date.innerHTML = currentYear




searchInput.addEventListener('input', filterProfiles);

function filterProfiles() {
    const query = searchInput.value.toLowerCase();
    profiles.forEach((profile) => {
        const name = profile.querySelector('.name').textContent.toLowerCase(); 
        const skills = Array.from(profile.querySelectorAll('.skills .skill')) 
            .map(skill => skill.textContent.toLowerCase()); 
        if (name.includes(query) || skills.some(skill => skill.includes(query))) {
            profile.style.display = 'block';
        } else {
            profile.style.display = 'none'; 
        }
    });
}

const darkMode = document.querySelector(".dark-btn");
var icon=document.getElementById("icon");


darkMode.addEventListener("click", () => {
    document.body.classList.toggle("light-background");
    if(document.body.classList.contains("light-background")){
        icon.src="Sun.png";
    }else{
        icon.src="Moon.png";
    }
    darkMode.classList.toggle("icon-position")
    darkMode.classList.toggle("light-background");
    darkMode.classList.toggle("icon-color")
    document.querySelector(".title").classList.toggle("text-color");
    document.querySelector("footer").classList.toggle("text-color");
    const buttons = document.querySelectorAll('.add');

    buttons.forEach(button => {
    button.classList.toggle('bg-color');
    });
});
});
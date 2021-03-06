const projects = document.querySelectorAll('.projects-card');
const allTagsArray = [];

projects.forEach(element => {
    allTagsArray.push(element.className.slice(0,9));
})

const filterAll = () => {
    projects.forEach(element => {
        element.classList.remove('hide')
    });
};

const filterTags = (event) => {
    allTagsArray.forEach((tag) => (
        tag !== event.target.id 
        ? (document.querySelector(`.${tag}`).classList.add('hide'))
        : (document.querySelector(`.${tag}`).classList.remove('hide'))  
    ));
}

  
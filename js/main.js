const menuLink = document.querySelector('.menu-icon');
const header = document.querySelector('.header');
const gridItem = document.querySelectorAll('.page__grid-item');

menuLink.addEventListener('touchend', function (event) {
    header.classList.toggle('navigation--active');
    this.classList.toggle('menu-icon--active');
});

function gridSelect (index) {
    for (let i = 0; i < gridItem.length; i++) {
        if (i !== index) {
            gridItem[i].classList.remove('page__grid-item--active');
        }
    };

    gridItem[index].classList.add('page__grid-item--active');
};

gridItem.forEach((current, index) => {
    current.addEventListener('click', () => {
        gridSelect(index);
    });

    current.addEventListener('touchend', () => {
        gridSelect(index);
    });
})
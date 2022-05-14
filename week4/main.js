const form = document.forms['hero'];
form.addEventListener('submit', makeHero, false);
const input = form.elements.searchInput;




function search(event) {
    alert(`You Searched for: ${input.value}`);
    event.preventDefault();
}

function makeHero(event) {

    event.preventDefault(); // prevent the form from being submitted

    const hero = {}; // create an empty object

    hero.name = form.heroName.value; // create a name property based on the input field's value

    hero.powers = [...form.powers].filter(box => box.checked).map(box => box.value);
    
    hero.category = form.category.value;

    hero.age = form.age.value;

    hero.city = form.city.value;

    hero.origin = form.origin.value;

    form.addEventListener('submit',validate,false);

    function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    } else{
        alert(JSON.stringify(hero)); // convert object to JSON string and display in alert dialog
        return hero;
    }
}

}

form.addEventListener('submit',validate,false);

function validate(event) {
    const firstLetter = form.heroName.value[0];
    if (firstLetter.toUpperCase() === 'X') {
        event.preventDefault();
        alert('Your name is not allowed to start with X!');
    }
}
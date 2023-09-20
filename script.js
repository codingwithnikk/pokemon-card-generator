const typeColor = {

    bug: "#26de81",
    
    dragon: "#ffeaa7",
    
    electric: "#fed330",
    
    fairy: "#FF0069",
    
    fighting: "#30336b",
    
    fire: "#f0932b",
    
    flying: "#81ecec",
    
    grass: "#00b894",
    
    ground: "#EFB549",
    
    ghost: "#a55eea",
    
    ice: "#74b9ff",
    
    normal: "#95afc0",
    
    poison: "#6c5ce7",
    
    psychic: "#a29bfe",
    
    rock: "#2d3436",
    
    water: "#0190FF",

}


let requestUrl = 'https://pokeapi.co/api/v2/pokemon/';

async function getData(){
    let id = Math.floor(Math.random() * 150 +1);
    let finalUrl = requestUrl + id;
    const response = await fetch(finalUrl);
    const data = await response.json();
    return data;
}


document.querySelector('.btn').addEventListener( 'click' ,async () => {
    const data = await getData();

    // clear previous data
    document.querySelector('.types').innerHTML = '';
        

    let image = document.querySelector('img');
    image.setAttribute('src', data.sprites.other.dream_world.front_default)

    let name = document.querySelector('.name');
    name.innerHTML = data.name;
    let hp = document.querySelector('.hp-span');
    hp.innerHTML = data.stats[0].base_stat;
    let attack = document.querySelector('.attack');
    attack.innerHTML = data.stats[1].base_stat;
    let defense = document.querySelector('.defense');
    defense.innerHTML = data.stats[2].base_stat;
    let speed = document.querySelector('.speed');
    speed.innerHTML = data.stats[5].base_stat;

    appendTypes(data.types);
    addThemeColor(data.types);
});

// append type of powers
let appendTypes = (types) => {
    types.forEach(element => {
            let span = document.createElement('span');
            span.textContent = element.type.name;
            span.setAttribute('class', 'power');
            document.querySelector('.types').appendChild(span);
    });
}

// add Theme color
let addThemeColor = (type) => {
    let card = document.querySelector('.card');
    let color = typeColor[type[0].type.name];
    const power = document.querySelectorAll('.power');
    power.forEach( ele => {
        ele.style.backgroundColor = color;
    })
    card.style.background = `radial-gradient(circle at 50% 0%, ${color} 50%, white 36%)`
}
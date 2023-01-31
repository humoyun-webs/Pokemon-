let $ = function (element) {
    return document.querySelector(element)
}
let $a = function (element) {
    return document.querySelectorAll(element)
}
let inner = function (el) {

    el.forEach((e) => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
  <img src="${e.img}" alt="${e.name}" class="img">
  <span></span>
  <h2>${e.name}</h2>
  <h3>${e.type[0]} ${e.type[1]? ',' : ""} ${e.type[1]?e.type[1] : ""}</h3>
  <h4>${e.weight}</h4>
  <h4 id="age">${e.height}</h4>
  <i class="bi bi-suit-heart save"></i>`;
        wrapper.appendChild(card);
    })
}
//code
let wrapper = $('.card-wrapper'),
    data = pokemons;

inner(data)





let likedArray = [],
    heart = document.querySelectorAll('.save'),
    likedBtn = $('.liked'),
    body = $('body'),
    hide = $('.bi-chevron-right'),
    blur = $('.blur'),
    wrapper2 = $('.cards2-wrapper'),
    right = $('.right');

heart.forEach((e, i) => {
    e.addEventListener('click', () => {
        if (!e.getAttribute('class').includes('savedd')) {
            e.setAttribute('class', ' bi bi-suit-heart-fill save savedd')
            likedArray.push(data[i])
        } else {
            e.setAttribute('class', ' bi bi-suit-heart save')
            likedArray.splice(likedArray.indexOf(i), 1)
        }
        wrapper2.innerHTML = ''
        likedArray.forEach((e) => {
            right = $('.right');
            let card1 = document.createElement('div')
            card1.classList.add('card')
            card1.classList.add('card22')
            card1.innerHTML = `
  <img src="${e.img}" alt="${e.name}" class="img">
  <span></span>
  <h2>${e.name}</h2>
  <h3>${e.type[0]} , ${e.type[1]}</h3>
  <h4>${e.weight}</h4>
  <h4 id="age">${e.height}</h4>
  <i class="bi bi-trash remove"></i>
  `;
            wrapper2.appendChild(card1);

        })


        // console.log(likedArray);
    })
})
likedBtn.addEventListener('click', () => {
    right.style.width = '539px';
    body.style.overflowY = 'hidden';
    blur.style.zIndex = '33',
        blur.style.background = '#0000004c';    
})
hide.addEventListener('click', () => {
    right.style.width = '0px';
    body.style.overflowY = 'auto';
    blur.style.zIndex = '-1',
        blur.style.background = '';

})
// TYPES //
let type = $('.type-select'),
    typesArray = [];


pokemons.forEach((e) => {
    e.type.forEach((m) => {
        if (!typesArray.includes(m)) {
            typesArray.push(m)
        }
    })
})
typesArray.forEach((e) => {
    let opt = document.createElement('option');
    opt.innerHTML = e;
    type.appendChild(opt)
})
type.addEventListener('change', () => {
    wrapper.innerHTML = ''
    pokemons.forEach((e) => {

        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
          <img src="${e.img}" alt="${e.name}" class="img">
          <span></span>
          <h2>${e.name}</h2>
          <h3>${e.type[0]} , ${e.type[1]}</h3>
          <h4>${e.weight}</h4>
          <h4 id="age">${e.height}</h4>
          <i class="bi bi-suit-heart save"></i>`;
        if (e.type.includes(type.value) || type.value == "")
            wrapper.appendChild(card);
    })
})
let i = 0;
let search = $('.search')
search.addEventListener('input', () => {

    wrapper.innerHTML = ''
    pokemons.forEach((e) => {
        let card = document.createElement('div')
        card.classList.add('card')
        card.innerHTML = `
          <img src="${e.img}" alt="${e.name}" class="img">
          <span></span>
          <h2>${e.name}</h2>
          <h3>${e.type[0]} , ${e.type[1]}</h3>
          <h4>${e.weight}</h4>
          <h4 id="age">${e.height}</h4>
          <i class="bi bi-suit-heart save"></i>`;
        if (e.name.toLowerCase().includes(search.value.trim()) || search.value == "") {
            wrapper.appendChild(card);
        }
    })
})

//sort

dataCopy = [];

for (i = 0; i < data.length; i++) {
    dataCopy[i] = data[i];
}

let sortInp = $('.sort')
sortInp.addEventListener('change', () => {
    if (sortInp.value == 1) {
        wrapper.innerHTML = ""

        let abc = dataCopy.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })

        inner(abc)
    } else if (sortInp.value == 2) {
        let abc = dataCopy.sort(function (a, b) {
            return a.name.localeCompare(b.name);
        })
        let cba = abc.reverse()
        wrapper.innerHTML = ''
        inner(cba)
    } else if (sortInp.value == 0) {
        wrapper.innerHTML = ""
        inner(data)
        console.log(pokemons);

    }
})
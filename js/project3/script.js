let arr = [
    {
      'name': '1',
       'img': 'pic1.jpeg'
    },
    {
        'name': '2',
        'img': 'pic2.jpg'
    },
    {
        'name': '3',
        'img': 'pic3.avif'
    },
    {
        'name': '4',
        'img': 'pic4.avif'
    },
    {
        'name': '5',
        'img': 'pic5.avif'
    },
    {
        'name': '6',
         'img': 'pic6.jpg'
    }
];
const parentdiv = document.querySelector("#card-section");

const gameCard = arr.concat(arr);

const myNumbers = (array) =>{
    for(let i=array.length-1; i>0; i--){
        let j = Math.floor(Math.random()* (i+1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
const shuffleChild = myNumbers(gameCard);

let clickCount = 0;
let firstCard = "";
let secondCard = "";

const card_matches = () =>{
    let card_selected = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) =>{
        curElem.classList.add('card_match');
    })
}

const resetgame = ()=>{
    firstCard = "";
    secondCard = "";
    clickCount = 0;

    let selected_card = document.querySelectorAll('.card_selected');
    card_selected.forEach((curElem) =>{
        curElem.classList.remove('card_selected');
    })
}

parentdiv.addEventListener('click', (event) =>{
    let currCard = event.target;
    clickCount++;
    if(clickCount < 3){
        if(clickCount === 1){
            firstCard = currCard.dataset.name;
            currCard.classList.add('card_selected');
        }
        else{
            secondCard = currCard.dataset.name;
            currCard.classList.add('card_selected');
        }

        if(firstCard !== "" && secondCard !== ""){
            if(firstCard === secondCard){
                // currCard.classList.add('card_match');
                setTimeout(()=>{
                    card_matches();
                    resetgame();
                }, 1000);
            }
            else{
                setTimeout(()=>{
                    resetgame();
                }, 1000);
            }
        }
    }
    if(currCard.id === "card-section"){
        return false;
    }
    
});




for(let i=0; i<shuffleChild.length; i++){
    const childiv = document.createElement('div');
    childiv.classList.add('card');
    childiv.dataset.name = shuffleChild[i].name;
    // childiv.style.backgroundImage = `url(${shuffleChild[i].img})`;

    const front_div = document.createElement('div');
    front_div.classList.add('front-card');

    const back_div = document.createElement('div');
    back_div.classList.add('back-card');
    back_div.style.backgroundImage = `url(${shuffleChild[i].img})`;

    parentdiv.appendChild(childiv);
    childiv.appendChild(front_div);
    childiv.appendChild(back_div);


}
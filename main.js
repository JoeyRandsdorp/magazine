window.addEventListener('load', init);

let pokedexBox;
let monEntry;
let pokemons = [];
let reserves = [];
let monId;

function init(){
    pokedexBox = document.getElementById(`pokedexBox`);
    monEntry = document.getElementById(`monEntry`);

    fetchRequestHandler();

    pokedexBox.addEventListener("click", pokedexBoxClick);
}

function fetchRequestHandler(){
    fetch(`https://localhost/programmeren3/webservices`)
    .then((response) => {
        if(!response.ok){
            throw new Error(response.statusText)
        }
        return response.json();
    })
    .then(SuccesConfirm)
    .catch(AJAXErrorHandler);
}

function fetchDetails(id){
    fetch(`https://localhost/programmeren3/webservices?id=${id}`)
    .then((response) => {
        if(!response.ok){
            throw new Error(response.statusText)
        }
        return response.json();
    })
    .then(detailsLoading)
    .catch(AJAXErrorHandler);
}

function pokedexBoxClick(e){
 let currentTarget = e.target;
 let targetPokemon;

    if(currentTarget.nodeName === 'SECTION'){
        targetPokemon = document.getElementById(currentTarget.id);
        fetchRequestHandler(targetPokemon.id)
        detailsLoading(e);
    }else if(currentTarget.nodeName === 'DIV'){
        targetPokemon = document.getElementById(currentTarget.id);
        fetchRequestHandler(targetPokemon.id)
        detailsLoading(e);
        }else if(currentTarget.nodeName === 'BUTTON'){
            targetPokemon = document.getElementById(currentTarget.id)
            fetchDetails(targetPokemon.id)
        }else{
            console.log('nothing happens')
        }
}

function SuccesConfirm(data){
    while(pokedexBox.firstChild) {
        pokedexBox.removeChild(pokedexBox.firstChild);  //this removes all items in pokedexBox that aren't needed.
    }

    for(let pokemon of data){
        pokemons.push(pokemon)      

        let newBox = document.createElement('section');    //create box for the pokemon "card"  
        newBox.id = pokemon.Id; 
        newBox.className = 'box';

        let imgBox = document.createElement('div');
        imgBox.className = 'dexImg';
    
        let titleImg = document.createElement('img');
        titleImg.className = `imgMon${pokemon.id}`;  
        titleImg.src = pokemon.detailsImg;
        imgBox.appendChild(titleImg);
        
        newBox.appendChild(imgBox);

        let titleBox = document.createElement('div');
        titleBox.className = 'dexName';

        let titleName = document.createElement('p');
        titleName.className =  `nameMon${pokemon.id}`; 
        titleName.innerHTML = pokemon.name;
        titleBox.appendChild(titleName);

        newBox.appendChild(titleBox);

        // let buttonBox = document.createElement('div');
        // buttonBox.className = 'button';

        // let buttonText = document.createElement('p');
        // buttonText.innerHTML = 'Add this Pokemon';
        // buttonBox.appendChild(buttonText);

        // newBox.appendChild(buttonBox);
        
        // pokedexBox.appendChild(newBox);
        let button = document.createElement('button');
        button.dataset.targetId = monId;
        button.className = 'button';
        button.innerHTML = 'Add this Pokemon';
        button.addEventListener('click', addTeam)
        newBox.appendChild(button);

        pokedexBox.appendChild(newBox);
    }

    keepTeam()
}

function AJAXErrorHandler(data){
    console.error("AJAX load error: " + data)
}

function detailsLoading(data){
    //aanmaken van elementen
    while(monEntry.firstChild) {
        monEntry.removeChild(monEntry.firstChild);  //this removes all items in pokedexBox that aren't needed.
    }

    monId = data.detailsId;

    let detailsBox = document.createElement(`section`);
    detailsBox.id = `monEntry`;

    let detailsImgBox = document.createElement(`div`);
    detailsImgBox.className = `rightImg`;

    let detailsImg = document.createElement('img');
    detailsImg.className = `rightMon`;  
    titleImg.src = data.detailsImg;
    detailsImgBox.appendChild(detailsImg);
    detailsBox.appendChild(detailsImgBox);

    let typesBox = document.createElement(`div`);
    typesBox.className = `elementalTypes`;

    let typesText = document.createElement(`p`);
    let typesArray = [];
    for(let types of data.types){
        typesArray.push(types);
    }
    typesText.className = 'typesText';
    typesText.innerHTML = typesArray.join(' / ');
    typesBox.appendChild(typesText);
    detailsBox.appendChild(typesBox);

    let detailsStatsBox = document.createElement(`div`);
    detailsStatsBox.className = `monText`;

    let detailsDexName = document.createElement(`p`);
    detailsDexName.id = `detailsName`;
    detailsDexName.innerHTML = `${data.dexNumber}  ${data.detailsName}`;
    detailsStatsBox.appendChild(detailsDexName);

    let detailsNickname = document.createElement(`p`);
    detailsNickname.className = `nickname`;
    detailsNickname.innerHTML = data.detailsNickname;
    detailsStatsBox.appendChild(detailsNickname);

    let abilityText = document.createElement(`p`);
    let abilityArray = [];
    for(let ability of data.abilities){
        abilityArray.push(abilities);
    }
    abilityText.className = 'abilities';
    abilityText.innerHTML = abilityArray.join(' / ');
    detailsStatsBox.appendChild(abilityText)
 
}

function keepTeam(){
    let teamMembers = JSON.parse(localStorage.getItem('reserves'))
    if(teamMembers !== null){
        for(let teamMember of teamMembers){
            reserves.push(teamMember)

        let reserve = document.getElementById(teamMember)                      
        
        let teamMemberBox = document.createElement('section');   
        teamMemberBox.id = reserve; 
        teamMemberBox.className = `pokemon`;

        let teamMemberImgBox = document.createElement('div');
        teamMemberImgBox.id = reserve;
        teamMemberImgBox.className = img;

        let teamMemberImg = document.createElement('img');
        teamMemberImg.src = data.detailsImg;

        teamMemberImgBox.appendChild(teamMemberImg);
        teamMemberBox.appendChild(teamMemberImgBox);

        let teamMemberNameBox = document.createElement('div') ;
        teamMemberNameBox.id = reserve;
        teamMemberNameBox.className = `naam`;

        let teamMemberName = document.createElement('p'); 
        teamMemberName.innerHTML = data.name;

        teamMemberNameBox.appendChild(teamMemberName);
        teamMemberBox.appendChild(teamMemberNameBox);
        }
    }
}

function addTeam(e){
    console.log('hi');
    let target = e.target.targetId;

    let reserve = document.getElementById(target)                       //hier maak je de favourite elementen (naam en img)
    //reserve = favourite id, gebruik die om elements te maken.

    let reserveBank = reserves.indexOf(target);

    if(reserveBank !== -1) {
        reserves.splice(reserveBank, 1);
        localStorage.setItem(`reserves`, JSON.stringify(reservers));
    } else {
        reserves.push(target)
        localStorage.setItem(`reserves`, JSON. stringify(reserves));
    }
}
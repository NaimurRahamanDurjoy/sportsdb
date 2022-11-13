const loadSportsDB = () => {
    const searchField = document.getElementById('search-field');
    const searchValue = searchField.value;

    // Clear search Field
    searchField.value = '';
    if(searchValue == ''){
        // Remove error message
        const errorMsg = document.getElementById('error-msg');
        errorMsg.textContent = '';
        //-----------------------------------------------------

        // Clear previous players
        const playersDiv = document.getElementById('players');
        playersDiv.textContent = '';
        //---------------------------------------------------

        // clear previous player details
        const detailsDiv = document.getElementById('player-details');
        detailsDiv.textContent = '';
        //-------------------------------------------------------

        // Empty Alart message
        const emptyAlart = document.getElementById('empty-msg');
        emptyAlart.innerText = 'Something went wrong! Please write something which you want to see.';
    }
    else{
        // Remove empty alart message
        const emptyAlart = document.getElementById('empty-msg');
        emptyAlart.textContent = '';
        //------------------------------------------------------
        // Remove Erron Message
        const errorMsg = document.getElementById('error-msg');
        errorMsg.textContent = '';
        //-----------------------------------------------------
        // Players Loading file
        const url = `https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${searchValue}`;
        fetch(url)
        .then(res => res.json())
        .then(data => displayPlayers(data.player))
    }

    
}

const displayPlayers = players => {
    // console.log(players);
    const playersDiv = document.getElementById('players');
    // Clear previous players
    playersDiv.textContent = '';
    if(players == null){
        const errorMsg = document.getElementById('error-msg');
        errorMsg.innerText = 'Something went wrong! Please try again.';
    }
    else{
        players.forEach(player => {
            // console.log(player);
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
                <div onclick = "loadDetailsById('${player.idPlayer}')" class="card h-100 w-75">
                    <img src="${player.strThumb}" class="card-img-top" alt="${player.strPlayer}">
                    <div class="card-body">
                        <h5 class="card-title">${player.strPlayer}</h5>
                        <p class="card-text">Position: ${player.strPosition}</p>
                        <p class="card-text">Description: ${player?.strDescriptionEN?.slice(0, 150)}</p>
                    </div>
                </div>
            `;
            playersDiv.appendChild(div);
    
        })
    }
    
    
}

const loadDetailsById = id => {
    const url = `https://www.thesportsdb.com/api/v1/json/2/lookupplayer.php?id=${id}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayDetails(data.players[0]))
}

const displayDetails = details => {
    // console.log(details);
    const detailsDiv = document.getElementById('player-details');
    // clear previous details
    detailsDiv.textContent = '';
    const div = document.createElement('div');
    div.classList.add('row');
    div.classList.add('g-0');
    div.innerHTML = `
        <div class="col-md-4">
            <img src="${details.strThumb}" class="img-fluid rounded-start" alt="...">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${details.strPlayer}</h5>
                <p class="card-text">Position: ${details.strPosition}</p>
                <p class="card-text">${details.strDescriptionEN.slice(0,150)}</p>
            </div>
        </div>
    `;
    detailsDiv.appendChild(div);
}
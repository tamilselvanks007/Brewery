async function getData(){
    const data = await fetch("https://api.openbrewerydb.org/breweries");
    const breweries = await data.json();
     console.log(breweries);
    breweries.forEach(brewery => displayBrewery(brewery));
}
getData();

function displayBrewery(brewery){

    const createDiv = document.createElement("div");
    createDiv.setAttribute("class","brewery");
    createDiv.innerHTML = `
    <div class="details">
        <h3 class="name">${brewery.name}</h3>
        <div class="type">🍻 ${brewery.brewery_type}</div>
        <section>
            <div class="contact"> 
                 <p> <i class="fas fa-map-marker-alt fa-xs"></i> </p> 
                 <p> ${brewery.city}, ${brewery.state}</br> ${brewery.country} </p> 
            </div>
            <div class="contact"> 
                 <p> <i class="fas fa-info fa-xs"></i> </p> 
                 <p> <a href="${brewery.website_url}">About us</a> </p> 
            </div>
            <div class="contact"> 
                 <p> <i class="fas fa-phone-alt fa-xs"></i></p> 
                 <p> ${brewery.phone===null? "🙂NA":brewery.phone}</p> 
            </div>
        </section>
    </div>
    `;

    document.body.append(createDiv);
}
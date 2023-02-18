function displayPetCards(){
    const DIV = document.getElementById("pets");
    let card="";
    //travel the array
    for(let i=0;i< petSalon.pets.length;i++){
        let pet= petSalon.pets[i];
        //create the card tmp
        card += `
        <div class="pets">
            <h5>${pet.name}</h5>
            <p>Age:${pet.age}</p>
            <p>Gender:${pet.gender}</p>
            <p>Breed:${pet.breed}</p>
            <p>Service:${pet.service}</p>
            <p>Owner:${pet.owner}</p>
            <p>Phone:${pet.phone}</p>
        </div>`;

        console.log(card);
    
    }
    
    //add the card into the DIV
    DIV.innerHTML=card;

}

function displayPetTable(){
    //get an element form the DOM
    const tbody = document.getElementById("tbPets-body");
    let rows = "";

    for(let i =0; i< petSalon.pets.length; i++){
       let pet = petSalon.pets[i]; 
       rows += `
       <tr>
            <td>${pet.name}</td>
            <td>${pet.age}</td>
            <td>${pet.gender}</td>
            <td>${pet.breed}</td>
            <td>${pet.service}</td>
            <td>${pet.owner}</td>
            <td>${pet.phone}</td>
            <td> <button class="btn btn-sm btn-outline-danger" onclick="deletePet('${pet.name}')">Remove</button> </td>
       </tr>`;
     }


     // add the rows to the tbody
     tbody.innerHTML = rows;

    
}
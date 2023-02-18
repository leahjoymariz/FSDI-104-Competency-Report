function Pet (n, a, g, b, s, o, p) {
        this.name = n;
        this.age = a;
        this.gender = g;
        this.breed = b;
        this.service = s;
        this.owner = o;
        this.phone = p;
    }



let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");
let inputOwner = document.getElementById("txtOwner");
let inputPhone = document.getElementById("txtPhone");

function isValid(aPet){
    let valid=true;
    if(aPet.name === ""){
        valid=false;
        inputName.classList.add("input-alert-error");
    }
    if(aPet.age === ""){
        valid=false;
        inputAge.classList.add("input-alert-error");
    }
    if(aPet.gender === ""){
        valid=false;
        inputGender.classList.add("input-alert-error");
    }
    if(aPet.breed === ""){
        valid=false;
        inputBreed.classList.add("input-alert-error");
    }
    if(aPet.service === ""){
        valid=false;
        inputService.classList.add("input-alert-error");
    }
    if(aPet.owner === ""){
    valid=false;
    inputService.classList.add("input-alert-error");
    }
    if(aPet.phone === ""){
    valid=false;
    inputService.classList.add("input-alert-error");
    }
   
    return valid;
}

function register(){
    

    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,inputOwner.value,inputPhone.value);
    
    console.log(newPet);
    if(isValid(newPet) === true){
        petSalon.pets.push(newPet);
    }
    petSalon.pets.push(newPet);
    updateInfo();
    displayPetTable();
    clearform();


    
    
}
function updateInfo(){
    document.getElementById("numberOfPets").innerHTML=petSalon.pets.length;
}

function deletePet(name){
    let proceed = confirm('Are you sure you want to remove' + name + 'from the salon?');
    if (proceed) {

    for(let i=0; i< petSalon.pets.length; i++){
        const pet = petSalon.pets[i];
        if (pet.name === name){
            petSalon.pets.splice(i, 1);
            displayPetTable();
        }
    }

  }
}   

function clearform(){
    inputName.value = '';
    inputAge.value = '';
    inputGender.value = '';
    inputBreed.value = '';
    inputService.value = '';
    inputOwner.value = '';
    inputPhone.value = '';


}

function search(){
    let text = document.getElementById("txtSearch").value;
    console.log("search text is: " +text);

    let results = [];
    for(let i=0; i < petSalon.pets.length; i++){
        const pet = petSalon.pets[i];
        if(pet.name.toLowerCase().includes(text.toLowerCase()) ) {
            results.push(pet);
        }
    }

    console.log(results);

}


function init(){

    displayFooterInfo();
    
   
    let scooby = new Pet('Scooby',60,'Male','Dane','Grooming','Jon Snow',222-222-222);

    let bella = new Pet('Bella',5,'Female','Pomeranian','Bath','Sansa Stark',333-333-333);
    
    let luna = new Pet('Luna',8,'Female','Chihuahua','Nail Trimming','Arya Stark',444-444-444);
    
    petSalon.pets.push(scooby,bella,luna);
    
    updateInfo();
    displayPetTable();
  

}
window.onload = init;









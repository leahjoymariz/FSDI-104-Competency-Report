//this is the constructor
function Pet(n,a,g,b,s){
    this.name =n;
    this.age =a;
    this.gender =g;
    this.breed =b;
    this.service =s;
}
// global vars for the html inputs
let inputName = document.getElementById("txtName");
let inputAge = document.getElementById("txtAge");
let inputGender = document.getElementById("txtGender");
let inputBreed = document.getElementById("txtBreed");
let inputService = document.getElementById("txtService");

function isValid(aPet){
    let valid=true;// we start assuming that the pet is valid
    if(aPet.name === ""){
        let valid=false;
        inputName.classList.add("input-alert-error");

    }
    if(aPet.age === ""){
        let valid=false;
        inputAge.classList.add("input-alert-error");
    }
    if(aPet.gender === ""){
        let valid=false;
        inputGender.classList.add("input-alert-error");
    }
    if(aPet.breed === ""){
        let valid=false;
        inputBreed.classList.add("input-alert-error");
    }
    if(aPet.service===""){
        valid=false;
        inputService.classList.add("input-alert-error");
        
    }

    return valid;

}

function register(){
   //create a new pet
    let newPet = new Pet(inputName.value,inputAge.value,inputGender.value,inputBreed.value,inputService.value,)
    //validation
    if(isValid(newPet)===true){
    //push the pet into the array
    petSalon.pets.push(newPet);
     //display the number of registered pets
     alert(`You have ${petSalon.pets.length} pets in the salon.`);
    updateInfo();
    displayPetTable();
    clearform();
}else{``
    alert("Please fill out the form");
}

}
function updateInfo(){
    document.getElementById("numberofPets").innerHTML=petSalon.pets.length;
}

function deletePet(name) {
    let proceed = confirm("Are you sure you want ro remove" + name + "from the salon?") == false;
        
    }
     for (let i = 0; i <petSalon.pets.length; i++) {
        const pet = petSalon.pets[i];
        if(pet.name == name) {
            petSalon.pets.splice(i, 1); //delete 1 element from an array
            displayPetTable();
        }
     }



//create a clearform function
function clearform(){
    inputName.value="";
    inputAge.value="";
    inputGender.value="";
    inputBreed.value="";
    inputService.value="";
    
}

function search(){
    let text = document.getElementById("txtSearch").value;
    console.log("search text is: " +text);

    /** 
     
    */
    let results = [];
    for(let i=0; i < petSalon.pets.length; i++) {
        const pet = petSalon.pets[i];
        if(pet.name.toLowerCase() ===text.toLowerCase().includes(text.toLowerCase())) {
            results.push(pet);
        }
    }

    console.log(results);
}

function init() {
    //events
    //call the functions
   displayFooterInfo();
    
   
    //create obj
    let scooby = new Pet("Scooby",60,"Male","Dane","Grooming");
    console.log(scooby);
    
    let bella = new Pet("Bella",5,"Female","Pomeranian","Grooming");
    console.log=(bella);

    let luna = new Pet("Luna",8,"Female","Chihuahua","Nail Trimming");
    console.log=(luna);

    petSalon.pets.push(scooby,bella,luna);//adding the pets into the array

    updateInfo();
    displayPetTable();
    
}
window.onload=init; //wait to render html
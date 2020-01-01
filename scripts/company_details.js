window.addEventListener('load', doStuff);

function doStuff(){
    let boothForm = document.getElementById('assignBooth');

    if(boothForm){

       let boothSelect = document.getElementById("emptyBooths");
       let initialBooths = document.querySelectorAll("#emptyBooths option");
       let inputs = document.querySelectorAll("#assignBooth input");

       let boothObject ={
           boothId:"",
           hasPower:"",
           locationId: ""
       };

       updateInputs();
       boothSelect.addEventListener("change", updateInputs);


        function updateInputs(){
            let selectedBooth = boothSelect.value;

            initialBooths.forEach(booth=>{
                if(selectedBooth === booth.value){
                    boothObject.boothId = booth.value;
                    boothObject.locationId = booth.id;
                    boothObject.hasPower = booth.className;
                }
            });

            inputs.forEach(input =>{
                if(input.name === "Location"){
                    input.value=boothObject.locationId;
                }

                if(input.name === "boothID"){
                    input.value=boothObject.boothId;
                }

                if(input.name === "has_power"){
                    input.value=boothObject.hasPower;
                }
            });

            console.log(inputs);

        }

    }
}


function addexWEField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("exField");
    newNode.setAttribute("row", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let exOb = document.getElementById("ex");
    let exAddButtonOb = document.getElementById("exAddButton");

    exOb.insertBefore(newNode, exAddButtonOb);

}








function addNewWEField() {
    // console.log("Adding new Field");

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.setAttribute("row", 3);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let weOb = document.getElementById("we");
    let weAddButtonOb = document.getElementById("weAddButton");

    weOb.insertBefore(newNode, weAddButtonOb);

}

function addNewAQField() {

    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("aqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("placeholder", "Enter here")

    let aqOb = document.getElementById("aq");
    let aqAddButtonOb = document.getElementById("aqAddButton");

    aqOb.insertBefore(newNode, aqAddButtonOb);


}




function generateCV() {

    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;

    ///////////////////////////////////////////////////////////////////////////////

    document.getElementById("nickT").innerHTML = document.getElementById("nickField").value;

    ///////////////////////////////////////////////////////////////////////////////

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("emailT").innerHTML = document.getElementById("EmailField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("jobT").innerHTML = document.getElementById("jobField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("twitT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("pinT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("linkT").innerHTML = document.getElementById("linkedField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;
    /////////////////////////////////////////////////////////////////////////

    let exs = document.getElementsByClassName("exField");

    let str = "";


    for (let i of exs) {
        str += `<li> ${i.value} </li>`;
    }

    document.getElementById("exT").innerHTML = str;

    /////////////////////////////////////////////////////////////////////////////

    let wes = document.getElementsByClassName("weField");

    let str1 = "";


    for (let e of wes) {
        str1 += `<li> ${e.value} </li>`;
    }

    document.getElementById("eduT").innerHTML = str1;

    /////////////////////////////////////////////////////////////////////////////////

    let aqs = document.getElementsByClassName("aqField");

    let str2 = "";

    for (let e of aqs) {
        str2 += `<p> ${e.value} </p>`;
    }

    document.getElementById("weT").innerHTML = str2;
    

    ///////////////////////////////////////////////////////////////////////////////////

    let file = document.getElementById("imgField").files[0];

    console.log(file);

    let reader = new FileReader();

    reader.readAsDataURL(file);

    console.log(reader.result);

    // send Image to tempate//

    reader.onloadend = function() {
        document.getElementById("imgTe").src = reader.result;
    }




























    document.getElementById("CV-form").style.display = "none"; ////////////////////////////////////
    document.getElementById("CV-template").style.display = "block";
}

function printCV() {

    window.print();

}
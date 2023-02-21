








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

function generateCV() {


    let exs = document.getElementsByClassName("exField");

    let str = "";


    for (let i of exs) {
        str += `<li> ${i.value} </li>`;
    }

    document.getElementById("skT").innerHTML = str;
    ///////////////////////////////////////////////////////////////////////////////////////
    let nameField = document.getElementById("nameField").value;

    let nameT = document.getElementById("nameT");

    nameT.innerHTML = nameField;
    //////////////////////////////////////////////////////////////////////////////////

    document.getElementById("objectiveT").innerHTML = document.getElementById("objectiveField").value;

    ///////////////////////////////////////////////////////////////////////////////////////////
    document.getElementById("hobT").innerHTML = document.getElementById("hobiesField").value;

    ///////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("emailT").innerHTML = document.getElementById("EmailField").value;

    //////////////////////////////////////////////////////////////////////////////

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //////////////////////////////////////////////////////////////////////////////////

    document.getElementById("twitT").innerHTML = document.getElementById("fbField").value;
    document.getElementById("dribT").innerHTML = document.getElementById("instaField").value;
    document.getElementById("codeT").innerHTML = document.getElementById("linkedField").value;
    /////////////////////////////////////////////////////////////////////////////


    document.getElementById("comp1T").innerHTML = document.getElementById("com1Field").value;

    document.getElementById("comp2T").innerHTML = document.getElementById("com2Field").value;

    document.getElementById("comp3T").innerHTML = document.getElementById("com3Field").value;

    document.getElementById("comp1T3").innerHTML = document.getElementById("comj1Field").value;

    document.getElementById("comp2T3").innerHTML = document.getElementById("comj2Field").value;

    document.getElementById("comp3T3").innerHTML = document.getElementById("comj3Field").value;

    document.getElementById("comp1T4").innerHTML = document.getElementById("comd1Field").value;

    document.getElementById("comp2T4").innerHTML = document.getElementById("comd2Field").value;

    document.getElementById("comp3T4").innerHTML = document.getElementById("comd3Field").value;
    /////////////////////////////////////////////////////////////////////////////////////////


    document.getElementById("comp1T2").innerHTML = document.getElementById("year1Field").value;

    document.getElementById("comp2T2").innerHTML = document.getElementById("year2Field").value;

    document.getElementById("comp3T2").innerHTML = document.getElementById("year3Field").value;







    document.getElementById("CV-form").style.display = "none"; ////////////////////////////////////
    document.getElementById("container_content").style.display = "block";
    
}

function printCV() {

    window.print();

}




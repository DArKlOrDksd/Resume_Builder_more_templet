function addNewTEField() {


    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("teField");
    newNode.setAttribute("row", 1);
    newNode.classList.add("mt-2");
    newNode.setAttribute("placeholder", "Enter here");

    let teOb = document.getElementById("te");
    let teAddButtonOb = document.getElementById("teAddButton");

    teOb.insertBefore(newNode, teAddButtonOb);

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

    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;

    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("emailT").innerHTML = document.getElementById("fbField").value;

    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("profilT").innerHTML = document.getElementById("objectiveField").value;

    /////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("eduT").innerHTML = document.getElementById("eduField").value;

    //////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("jobT").innerHTML = document.getElementById("aboField").value;

    ///////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("sk1").innerHTML = document.getElementById("skill1Field").value;

    document.getElementById("sk2").innerHTML = document.getElementById("skill2Field").value;

    document.getElementById("sk3").innerHTML = document.getElementById("skill3Field").value;
    ////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("skp1").innerHTML = document.getElementById("skilld1Field").value;

    document.getElementById("skp2").innerHTML = document.getElementById("skilld2Field").value;

    document.getElementById("skp3").innerHTML = document.getElementById("skilld3Field").value;
    //////////////////////////////////////////////////////////////////////////////////////////

    document.getElementById("job1T").innerHTML = document.getElementById("com1Field").value;

    document.getElementById("job2T").innerHTML = document.getElementById("com2Field").value;

    document.getElementById("job3T").innerHTML = document.getElementById("com3Field").value;

    document.getElementById("job1T2").innerHTML = document.getElementById("comj1Field").value;

    document.getElementById("job2T2").innerHTML = document.getElementById("comj2Field").value;

    document.getElementById("job3T2").innerHTML = document.getElementById("comj3Field").value;

    document.getElementById("job1T4").innerHTML = document.getElementById("comd1Field").value;

    document.getElementById("job2T4").innerHTML = document.getElementById("comd2Field").value;

    document.getElementById("job3T4").innerHTML = document.getElementById("comd3Field").value;
    /////////////////////////////////////////////////////////////////////////////////////////


    document.getElementById("job1T3").innerHTML = document.getElementById("year1Field").value;

    document.getElementById("job2T3").innerHTML = document.getElementById("year2Field").value;

    document.getElementById("job3T3").innerHTML = document.getElementById("year3Field").value;
    ////////////////////////////////////////////////////////////////////////////////////////

    let tes = document.getElementsByClassName("teField");

    let str = "";


    for (let e of tes) {
        str = str + `<li> ${e.value} </li>`;
    }

    document.getElementById("techT").innerHTML = str;


    ///////////////////////////////////////////////////////////////////////////////////////////


    ///////////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////////////////////////////////////////////////
    ////////////////////
    //////////
    document.getElementById("CV-form").style.display = "none"; ////////////////////////////////////
    document.getElementById("doc2").style.display = "block";
    ////////////////////////////////////////////////////////////////////////



}


function printCV() {

    window.print();

}
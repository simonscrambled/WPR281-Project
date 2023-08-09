let saved =[];//array for objects
//object constructer with name user
function User(names, surname, email, phonenum, userid, country, state, city, refcode ) { // object constructor
this.names = names;
this.surname = surname;
this.email = email;
this.phonenum = phonenum;
this.userid = userid;
this.country = country;
this.city = city;
this.refcode = refcode;
saved.push({Name:this.names, Surname: this.surname, email: this.email, phonenum: this.phonenum, userid: this.userid, country: this.country, city: this.city, refcode: this.refcode});
}

let name1;
let lastname; 
let email; 
let tel;
let userid;
let country;
let state;
let city;
let refencecode;

let inputarr = [name1, lastname, email, tel, userid, country, state, city, refencecode];

function adds() {
    let fnames = document.getElementById("first_name").value;
    let flastname = document.getElementById("lastName").value;
    let femail = document.getElementById("Email").value;
    let ftel = document.getElementById("phoneNumber").value;
    let fuserid = document.getElementById("your_user_ID").value;
    let fcountry = document.getElementById("countryName").value;
    let fstate = document.getElementById("state").value;
    let fcity = document.getElementById("city").value;
    let frefencecode = 565 //document.getElementById("ref").value;
    let finputarr = [fnames, flastname, femail, ftel, fuserid, fcountry, fstate, fcity, frefencecode];
    for (let i = 0; i < inputarr.length; i++) {
        inputarr[i] = finputarr[i];
    }
    update();
}
function update(){ 
    new User(inputarr[0],inputarr[1],inputarr[2],inputarr[3],inputarr[4],inputarr[5],inputarr[6],inputarr[7],inputarr[8]);
    // for (let i = 0; i < inputarr.length; i++)
    // {
    //     console.log(inputarr[i]);
    // }
    console.log(inputarr);
};

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
}
let arrflag = [nflag = false,lflag= false,eflag= false,tflag= false,uflag= false,ctflag= false,sflag= false,cflag= false,rcflag= false];
for (let i = 0; i < arrflag.length;i++) {//this flags the field that has been let empty

    if ( inputarr[i] == null )
    {
      arrflag[i] = true
      console.log("fields are empty");
    } 

      
}
//remember to reset the flags to false after the alert has been generated
// match varaiable.match(/^.*abc$/)) ends with abc
// match varaiable.match(/^abc.*$/)) starts with
let phonenum = /^\d{10}$/;
let valid = confirm("Are you sure you want to check validity");
if (valid == true){
    for (let i = 0; i < arrflag.length; i++){
switch (i){

case 0 :
    if (arrflag[0] == true)
    {
    alert("Name invalid");
    }
    break;

case 1 :
    if (arrflag[1] == true)
    {
    alert("LASTName invalid");
    }
    break;

case 2 :
    if (arrflag[2] == true && email == "")
    {
    alert("email empty");
    }  
    if (inputarr[2].match(/^.*@gmail.com$/) == null)
    {
    alert("Email must include @gmail.com");
    }
    break;

case 3 :
    if (arrflag[3] == true)
    {
    alert("Phone num invalid");
    }
    let phone = arrflag[3].match(phonenum);
    break;

case 4 :
    if (arrflag[4] == true)
    {
    alert("userid invalid");
    }
    break;

case 5 :
    if (arrflag[5] == true)
    {
    alert("country invalid");
    }
    break;

case 6 :
    if (arrflag[6] == true)
    {
    alert("state invalid");
    }
    break;

case 7 :
if (arrflag[7] == true)
{
alert("city invalid");
}
break;

case 8 :
if (arrflag[8] == true)
{
alert("refcode invalid");
}
break;
        }
    }
}

let saved =[];//array for objects
//object constructer with name user
function User(name, surname, email, phonenum, userid, country, state, city, refcode ) { // object constructor
this.name = name;
this.surname = surname;
this.email = email;
this.phonenum = phonenum;
this.userid = userid;
this.country = country;
this.city = city;
this.refcode = refcode;
saved.push({Name:this.name, Surname: this.surname, email: this.email, phonenum: this.phonenum, userid: this.userid, country: this.country, city: this.city, refcode: this.refcode});
}
// this fills the object with the information provided by the inputs
// new User(inputarr[0],inputarr[1],inputarr[2],inputarr[3],inputarr[4],inputarr[5],inputarr[6],inputarr[7],inputarr[8]);
for (let i = 0; i < arrflag.length;i++) {//when user is input into the saved array
    arrflag[i] = false;
}

// this fills the object with the information provided by the inputs
// new User(inputarr[0],inputarr[1],inputarr[2],inputarr[3],inputarr[4],inputarr[5],inputarr[6],inputarr[7],inputarr[8]);
for (let i = 0; i < arrflag.length;i++) {//when user is input into the saved array
    arrflag[i] = false;
}

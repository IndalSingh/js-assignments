function validateForm(event) {
    event.preventDefault();
    // console.log("indal");
    var user = document.getElementById('user').value;
    // console.log("indal");
    var email = document.getElementById('email').value;
    // console.log("indal");
    var phone = document.getElementById('phone').value;
    // console.log("indal");
    var pass = document.getElementById('pass').value;
    // console.log("indal");
    var cpass = document.getElementById('cpass').value;
    // console.log("indal");

    //user

    if (!user.length == 0) {
        if (user.length < 3) {
            document.getElementById('formerror1').innerHTML = "**name can  not be of 2 words";
        }
        else {
            if (!isNaN(user)) {
                document.getElementById('formerror1').innerHTML = "** name can not be number";
                console.log("praveen sir");
            }
            else {
                document.getElementById('formerror1').innerHTML = " ";
                console.log("praveen sir1");
            }
        }
    }
    else {
        document.getElementById('formerror1').innerHTML = "** please enter your name ";
        console.log("praveen sir3");
    }


    // email
    if (!email.length == 0) {
        document.getElementById('formerror2').innerHTML = " ";
        console.log("praveen sir4");
    } else {
        document.getElementById('formerror2').innerHTML = "**please enter your email id";
        console.log("praveen sir5");
    }

    //phone number
    if (!phone.length == 0) {
        if (phone.length == 10) {
            document.getElementById('formerror3').innerHTML = " ";
            console.log("ish");
        } else {
            document.getElementById('formerror3').innerHTML = "** please enter correct number";
        }

    } else {
        document.getElementById('formerror3').innerHTML = "** please enter your number";
    }


    //password
    if (!pass.length == 0) {
        if (pass.length < 5) {
            document.getElementById('formerror4').innerHTML = "**password should be at least 6 char";
        } else {
            document.getElementById('formerror4').innerHTML = " ";
            console.log("ish");
        }

    } else {
        document.getElementById('formerror4').innerHTML = "** please enter your password";
    }

    // confirm password
    if (!cpass.length == 0) {
        if (cpass !== pass) {
            document.getElementById('formerror5').innerHTML = "** password does not match";
        } else {
            document.getElementById('formerror5').innerHTML = " ";
            console.log("ish")
        }
    }
    else {
        document.getElementById('formerror5').innerHTML = "** please enter your password again";
    }





    //validating button

    console.log("innu")
    var button = document.getElementById('but').value;
    {
        {
            if (!user.length == 0) {
                if (user.length < 3) {
                    document.getElementById('formerror1').innerHTML = "**name can  not be of 2 words";
                }
                else {
                    if (!isNaN(user)) {
                        document.getElementById('formerror1').innerHTML = "** name can not be number";
                        console.log("praveen sir");
                    }
                    else {
                        document.getElementById('formerror1').innerHTML = " ";
                        console.log("praveen sir1");
                    }
                }
            }
            else {
                document.getElementById('formerror1').innerHTML = "** please enter your name ";
                console.log("praveen sir3");
            }


            // email
            if (!email.length == 0) {
                document.getElementById('formerror2').innerHTML = " ";
                console.log("praveen sir4");
            } else {
                document.getElementById('formerror2').innerHTML = "**please enter your email id";
                console.log("praveen sir5");
            }

            //phone number
            if (!phone.length == 0) {
                if (phone.length == 10) {
                    document.getElementById('formerror3').innerHTML = " ";
                    console.log("ish");
                } else {
                    document.getElementById('formerror3').innerHTML = "** please enter correct number";
                }

            } else {
                document.getElementById('formerror3').innerHTML = "** please enter your number";
            }


            //password
            if (!pass.length == 0) {
                if (pass.length < 5) {
                    document.getElementById('formerror4').innerHTML = "**password should be at least 6 char";
                } else {
                    document.getElementById('formerror4').innerHTML = " ";
                    console.log("ish");
                }

            } else {
                document.getElementById('formerror4').innerHTML = "** please enter your password";
            }

            // confirm password
            if (!cpass.length == 0) {
                if (cpass !== pass) {
                    document.getElementById('formerror5').innerHTML = "** password does not match";
                } else {
                    document.getElementById('formerror5').innerHTML = " ";
                    console.log("ish")
                }
            }
            else {
                document.getElementById('formerror5').innerHTML = "** please enter your password again";
            }
        }
        var a = document.createElement('a');
        a.href = "welcome.html";
    }

}
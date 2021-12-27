function validateForm(event) {
    event.preventDefault();

    // document.getElementById('login-form').value;
    var user00001 = document.getElementById('USER001').value;
    var pass00001 = document.getElementById('PASS001').value;


    var USERiD = localStorage.getItem('User_ID');
    console.log("inu");
    var PASSWORD = localStorage.getItem('Password');
    console.log('inn');

    if (!USERiD == 0) {
        if (USERiD === user00001) {
            if (PASSWORD===pass00001) {
                 window.location.href = "./welcome.html";
            } else {
                document.getElementById('formerror02').innerHTML="*invalid password*"

            }

        } else {
            document.getElementById('formerror1').innerHTML = "*enter valid username*"
        }

    } else {
        document.getElementById('formerror01').innerHTML = "*enter user name*"
    }

   

}
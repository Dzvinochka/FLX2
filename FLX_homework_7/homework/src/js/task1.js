let login = prompt("Please enter your login");
if (login === "User" || login === "Admin") { 
    let password = prompt("Please enter your password");
    let currentHour = new Date().getHours();
    if (login === "User" && password === "UserPass") {
        if (currentHour < 20) {
        alert("Good day, dear User!");
        } else {
alert ("Good evening, dear User!");
}
     } else if (login === "Admin" && password === "RootPass") {
        if (currentHour < 20) {
        alert("Good day, dear Admin!");
        } else {
 alert ("Good evening, dear Admin!"); 
}
     } else if (!password) {
    alert ("Canseled");
    } else {
 alert ("Wrong password");
    }
} else if (!login) {
    alert ("Canseled");
} else if (login.length <=3) {
        alert ("I don't know any users having name length less than 4 symbols");
    } else {
 alert ("I don’t know you"); 
}
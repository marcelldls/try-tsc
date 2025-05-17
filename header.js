"use strict";
// Set a cookie with name, value, and expiration days
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
// Clear a specific cookie by setting its expiration date in the past
function clearCookie(cname) {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// Get a cookie value by name
function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i].trim();
        if (c.indexOf(name) === 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
// Save input to cookie and display it
function saveAndDisplay() {
    var input = document.getElementById("inputText").value;
    if (input) {
        setCookie("myString", input, 7); // cookie expires in 7 days
        displayCookie();
    }
}
// Clear cookie and display it
function clearAndDisplay() {
    clearCookie("myString");
    displayCookie();
}
// Display the cookie value on the page
function displayCookie() {
    var doc = document.getElementById("displayArea");
    if (doc) {
        var cookieValue = getCookie("myString");
        doc.textContent = cookieValue ? "Saved string: " + cookieValue : "No saved string found.";
    }
}
// Display cookie value on page load
window.onload = function () {
    displayCookie();
};
//# sourceMappingURL=header.js.map
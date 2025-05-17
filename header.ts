// Set a cookie with name, value, and expiration days
function setCookie(cname: string, cvalue: string, exdays: number): void {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    const expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + encodeURIComponent(cvalue) + ";" + expires + ";path=/";
}
// Clear a specific cookie by setting its expiration date in the past
function clearCookie(cname:string): void {
    document.cookie = cname + "=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
}
// Get a cookie value by name
function getCookie(cname: string): string {
    const name = cname + "=";
    const decodedCookie = decodeURIComponent(document.cookie);
    const ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
    let c = ca[i].trim();
    if (c.indexOf(name) === 0) {
        return c.substring(name.length, c.length);
    }
    }
    return "";
}
// Save input to cookie and display it
function saveAndDisplay() {
    const input = (<HTMLInputElement>document.getElementById("inputText")).value;
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
function displayCookie(): void {
    let doc = document.getElementById("displayArea");
    if (doc) {
        const cookieValue = getCookie("myString");
        doc.textContent = cookieValue ? "Saved string: " + cookieValue : "No saved string found.";
    }
}

// Display cookie value on page load
window.onload = function() {
    displayCookie();
};

//-------------------------------------------------------------------------------------------------------------------+++
// Javascript with some common context-unaware functions
// and global variables.

// help:
// https://codecyprus.org/th/testing

const TEAM_NAME = "exampleTeam"; // prefixes/postfixes are appended automatically
const PLAYER_NAME = ""; //TEAM_NAME;
const URL_ROOT_REAL = "https://codecyprus.org/th/api" // is appended automatically
const URL_ROOT_TEST = "https://codecyprus.org/th/test-api" // is appended automatically
const COOKIE_EXPIRY_DAYS = 20;

// select current mode
var URL_ROOT = URL_ROOT_TEST; // i will use URL_ROOT for all requests

function setCookie( cookieName, cookieValue, expireDays=COOKIE_EXPIRY_DAYS ) {

    // Content-unaware function that sets a cookie.

    // The code is adapted from worksheet "co1111-worksheet15a - Cookies.pdf".

    let date = new Date();
    date.setTime( date.getTime() + (expireDays*24*60*60*1000) );
    let expires = "expires=" + date.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
}

function getCookie(cname) {

    // Content-unaware function that gets a cookie value.

    // The code is used from publicly available snippet https://www.w3schools.com/js/js_cookies.asp.

    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return undefined;

}

function eraseCookie(name) {

    // Content-unaware function that deletes a cookie.

    // The code is used from publicly available snippet https://stackoverflow.com/questions/2144386/how-to-delete-a-cookie.

    document.cookie = name+'=; Max-Age=-99999999;';

}

//-------------------------------------------------------------------------------------------------------------------+++
// 2022.02.24
// added cookie deletion function
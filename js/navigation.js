//-------------------------------------------------------------------------------------------------------------------+++
// Creates standardised header/footer navigation.
// For app pages.

//-------------------------------------------------------------------------------------------------------------------+++
// Definitions.

async function populateHeader() {

    // Populates app header.

    // The code is adapted from worksheet "CO1111-w15-lec-NetworkingAndProgrammableWeb.pdf".

    // object to populate
    let header = document.getElementById("app_header"); // object to populate

    // link to index.html
    let bt_home = "<a class='app_navi' href='./index.html'>Back to main page</a>";

    // link to reload page
    // help:
    // https://www.w3schools.com/howto/howto_js_get_url.asp
    let bt_reload = "<a class='app_navi' href='" + window.location.href + "'>Reload</a>";

    // link to abandon challenge
    // help:
    // https://www.tutorialspoint.com/JavaScript-function-in-href-vs-onClick
    let bt_stop="<a hidden id='navi_quiz' class='app_navi' href='javascript:treasureHuntCancelledEvent(\""+window.location.href+"\")'>Abandon challenge</a>";

    // assemble
    header.innerHTML = bt_home + bt_reload + bt_stop;

} // function getChallenges

//-------------------------------------------------------------------------------------------------------------------+++
// Actual code.

populateHeader();

// 2022.02.18
// updated index.html link
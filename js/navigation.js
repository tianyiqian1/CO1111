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
    let bt_reload = `<a class='app_navi' href='${window.location.href}'>Reload</a>`;

    let bt_stop = "";
    if( PAGE_STATE=='quiz' || PAGE_STATE=='leaderboard' ) {
        // link to abandon challenge
        // help:
        // https://www.tutorialspoint.com/JavaScript-function-in-href-vs-onClick
        let link = window.location.href;
        bt_stop=`<a hidden class='app_navi quiz_navi' href='javascript:treasureHuntCancelledEvent()'>Abandon challenge</a>`;
    }

    // assemble

    header.innerHTML = bt_home + bt_reload + bt_stop;

} // function getChallenges

//-------------------------------------------------------------------------------------------------------------------+++
// Actual code.

// 2022.02.24
// switched to `
// made contents unmanipulateable from outside
// added PAGE_STATE dependency
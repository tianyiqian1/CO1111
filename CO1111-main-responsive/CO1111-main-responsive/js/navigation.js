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
    if( PAGE_STATE=='quiz' ) {
        // link to abandon challenge
        // help:
        // https://www.tutorialspoint.com/JavaScript-function-in-href-vs-onClick
        bt_stop=`<a hidden class='app_navi quiz_navi' href='javascript:treasureHuntCancelledEvent()'>Abandon challenge</a>`;
    }
    else if( PAGE_STATE=='leaderboard' ) {
        // link to abandon challenge but with different text
        bt_stop=`<a hidden class='app_navi quiz_navi' href='javascript:treasureHuntCancelledEvent()'>Another challenge</a>`;
    }

    let bt_name = "";
    if( PAGE_STATE=='list' ) {
        // link to change player name
        bt_name=`<a hidden class='app_navi quiz_navi' href='javascript:playerNameChangeRequestEvent()'>Change player name</a>`;
    }

    // assemble

    header.innerHTML = bt_home + bt_reload + bt_stop + bt_name;

} // function getChallenges

//-------------------------------------------------------------------------------------------------------------------+++
// Actual code.
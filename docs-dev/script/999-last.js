//Check settings cookies
(() => {
    try {
        const rpSettingsKeys = ["gLinesMinor", "gLinesMajor", "gLinesMega", "showOutline", "gridSize", "guidesEnabled", "showLabels", "showExeOrder"];
        const cSettings = (!!getCookie("settings")) ? JSON.parse2(getCookie("settings")) : Object.assign({}, settings);
        Object.keys(cSettings).forEach(function (key) {
            if (!!settings[key]) settings[key] = cSettings[key];
            if (rpSettingsKeys.indexOf(key) >= 0) editorVue.$set(editorVue.$data.rpSettings, key, cSettings[key]);
        });
        settingsVue.updateHideBtnText();
    } catch (e) {
        console.log(e);
    }
})();






//todo below this



suspendUserInterface.suspendInterface();
kbshort.suspend(false);



var searchBox = document.querySelectorAll('.search-box input[type="text"] + span');
searchBox.forEach((elm) => {
    elm.addEventListener('click', () => {
        elm.previousElementSibling.value = '';
    });
});

//window.onbeforeunload = function() { return "Sure?"; };



/* recMessage */

window.addEventListener("message", function (event) {
    console.log(event)
}, true);
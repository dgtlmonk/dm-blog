
// Media Queries in EM
// $target_px / 16px  = $em;
//
// Layout Reference
// http://css-tricks.com/snippets/css/media-queries-for-standard-devices/

/* Smartphones (portrait and landscape) ----------- */
var _q_smartphones = "screen and (min-device-width : 320px) and (max-device-width : 480px)";
var q_smartphones = "screen and (min-device-width : 20em) and (max-device-width : 30em)";

/* iPads (portrait and landscape) ----------- */
var _q_tablets = "screen and (min-device-width : 768px) and (max-device-width : 1024px)";
var q_tablets = "screen and (min-device-width : 48em) and (max-device-width : 64em)";

/* Desktops and laptops ----------- */
var _q_desktop = "screen and (min-width : 1224px)";
var q_desktop = "screen and (min-width : 76.5em)";


// enquire.js setup
enquire
.register(q_desktop,{
    setup : function (args) {

     }
})
.register(q_smartphones,{
    setup: function (args) {

    }
})
.register(q_tablets,{
    setup: function (args) {

    }
})


;

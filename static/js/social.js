const url_fb =
    "https://www.facebook.com/share/5FgbhiZ4CmS9mao5/";

const url_insta =
    "https://www.instagram.com/el__asfoor?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";

const url_tripadvisor =
    "https://www.tripadvisor.com/Restaurant_Review-g297947-d4461610-Reviews-El_Asfour-Mahdia_Mahdia_Governorate.html";


    
function openUrlInNewTab(url) {
    window.open(url, '_blank').focus();
}


$('.facebook').first().click(function() {
    openUrlInNewTab(url_fb);
});

$('.instagram').first().click(function() {
    openUrlInNewTab(url_insta);
});

$('.tripadvisor').first().click(function() {
    openUrlInNewTab(url_tripadvisor);
});




const base_url_menu_list = "../Menu-choice/Choix-menu-";

function menuListFR() {
    let url_menu_list = base_url_menu_list + "FR.html";
    window.location.href = url_menu_list;
}
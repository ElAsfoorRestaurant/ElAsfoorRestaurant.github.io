const url_fb =
    "https://www.facebook.com/El-Asfoor-Salon-De-Th%C3%A9Restaurant-109861641429696/";

const url_insta =
    "https://www.instagram.com/el_asfoor_salon_de_the_resto/";

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
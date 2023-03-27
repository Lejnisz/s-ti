var pénz = 0;
var növekedés = 1;
var fixnöv = 0

function gombokfel(á,k,c,i){
    document.getElementById(i).onmouseover = function(){
        document.getElementById("cím").innerHTML = c
        document.getElementById("közép").innerHTML = k
        document.getElementById("ár").innerHTML = á
    }
    document.getElementById(i).onmouseout = function(){
        document.getElementById("cím").innerHTML = "Információk"
        document.getElementById("közép").innerHTML = ""
        document.getElementById("ár").innerHTML = ""
    }
}

gombokfel("100 pengő", "Új friss felszerelést vásárolsz a műhelybe, ezzel növelve a hatékonyságot", "Eszközök minőségén való javítás", "gomb-1")
gombokfel("500 pengő", "Beszerzel 1-2 présgépet hogy képes legyél automatizálni az egész folyamatot", "Présgépek vásárlása", "gomb-2")
gombokfel("2000 pengő", "Itt az ideje átköltözni egy nagyobb helyre, és tudjuk nagyobb hely nagyobb nagyobb mennyiség", "Nagyobb gyárhely", "gomb-3")
gombokfel("4000 pengő", "Nem bírod ezt már egyed valami folyton zárlatos lessz, meghibásodik, inkább vegyünk fel valakit", "Munkaválalók felvétele", "gomb-4")
gombokfel("8000 pengő", "Minek szórakoznánk bármivel is ha egy minimális munkával kioszthatlyuk az egészet alválalkozoknak?", "Alválalkozók", "gomb-5")
gombokfel("12000 pengő", "új friss felszerelést vásárolsz a műhelybe ezzel növelve a hatékonyságot", "Vezetőség felvétele", "gomb-6")
gombokfel("15000 pengő", "új friss felszerelést vásárolsz a műhelybe ezzel növelve a hatékonyságot", "Produktivitás növelése", "gomb-7")
gombokfel("20000 pengő", "új friss felszerelést vásárolsz a műhelybe ezzel növelve a hatékonyságot", "A tőzsdére való bevonulás", "gomb-8")
gombokfel("30000 pengő", "új friss felszerelést vásárolsz a műhelybe ezzel növelve a hatékonyságot", "MENEKÜLÉS", "vég")

//setInterval(function(){
//    pénz += fixnöv
//    document.getElementById("Számláló").innerHTML = pénz + " pengőd van."
//}, 1000)
//document.getElementById("pénz").onclick = function () {
//    pénz += növekedés;
//    document.getElementById("Számláló").innerHTML = pénz + " pengőd van.";
//};


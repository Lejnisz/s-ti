var pénz = 0;
var növekedés = 1;
var fixnöv = 0
var óra = 250

setInterval(function(){
    pénz += fixnöv
    document.getElementById("Pénz").innerHTML = pénz + " pengőd van!"
}, 1000)

setInterval(function(){
    if (óra <= 0){
        window.open("veszedelem.html", "_self")
    }
    óra -= 1
    document.getElementById("óra").innerHTML = óra
}, 1000)

document.getElementById("Pengő").onclick = function(){
    pénz += növekedés
    document.getElementById("Pénz").innerHTML = pénz + " pengőd van!"
}

function gombokFel(á,k,c,i){
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

gombokFel("100 pengő", "Új friss felszerelést vásárolsz a műhelybe, ezzel növelve a hatékonyságot <br> (+1 pengő/kattintás)", "Eszközök minőségén való javítás", "gomb-1")
gombokFel("500 pengő", "Beszerzel 1-2 présgépet hogy képes legyél automatizálni az egész folyamatot <br> (+1 pengő/másodperc)", "Présgépek vásárlása", "gomb-2")
gombokFel("2000 pengő", "Itt az ideje átköltözni egy nagyobb helyre, és tudjuk nagyobb hely nagyobb nagyobb mennyiség <br> (+50 pengő/kattintás)", "Nagyobb gyárhely", "gomb-3")
gombokFel("4000 pengő", "Nem bírod ezt már egyed valami folyton zárlatos lessz, meghibásodik, inkább vegyünk fel valakit <br> (+50 pengő/másodperc)", "Munkaválalók felvétele", "gomb-4")
gombokFel("8000 pengő", "Minek szórakoznánk bármivel is ha egy minimális munkával kioszthatlyuk az egészet alválalkozoknak? <br> (+250 pengő/kattintás)", "Alválalkozók", "gomb-5")
gombokFel("12 000 pengő", "Egyáltalán minek fektetnél bármi erőt és energiát ebbe az egészbe, csak oszt ki a feladatot egy vezetőségi osztálynak akik megcsinálják kemény 1 ember munkáját közösen <br> (+250 pengő/másodperc)", "Vezetőség felvétele", "gomb-6")
gombokFel("15 000 pengő", "Itt az ideje az igazi termelés elkezdésének a dolgozók helyet vegyél automatizált gyártósort és a vezetőséget cseréld le egy MI-re <br> (+800 pengő/kattintás)", "Produktivitás növelése", "gomb-7")
gombokFel("20 000 pengő", "Az az abszulút semmit tevés, gyakorlatilag az emmberek pénzt vágnakhozzád azért mert vagy <br> (+800 pengő/másodperc)", "A tőzsdére való bevonulás", "gomb-8")
gombokFel("500 000 pengő", "A NAV a segedben és nincs mit csinálni, add oda az egéssz céget egy szerényebb képseggékel rendelkező személynek és fuss a profittal", "MENEKÜLÉS", "vég")

function fejlesztésKat(f, á, i){
    document.getElementById(i).onclick = function(){
        if(pénz >= á){
            pénz -= á
            növekedés += f
            document.getElementById("Pénz").innerHTML = pénz + " pengőd van!"
        }
    }
}

fejlesztésKat(1, 100, "gomb-1")
fejlesztésKat(50, 2000, "gomb-3")
fejlesztésKat(250, 8000, "gomb-5")
fejlesztésKat(800, 15000, "gomb-7")

function fejlesztésMás(f, á, i){
    document.getElementById(i).onclick = function(){
        if(pénz >= á){
            pénz -= á
            fixnöv += f
            document.getElementById("Pénz").innerHTML = pénz + " pengőd van!"
        }
    }
}

fejlesztésMás(1, 500, "gomb-2")
fejlesztésMás(50, 4000, "gomb-4")
fejlesztésMás(250, 12000, "gomb-6")
fejlesztésMás(800, 20000, "gomb-8")

document.getElementById("vég").onclick = function(){
    if(pénz >= 500000){
        window.open("győzelem.html", "_self")
    }
}
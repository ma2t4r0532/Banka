function Para_Çekme () {
    Hesap = Hesap - game.askForNumber("Çekilecek Miktar?")
    game.splash("Hesapta Kalan:", Hesap)
}
function Giriş () {
    if (game.askForString("Adınız?") == "Mert") {
        if (game.askForNumber("Şifreniz?") == 123) {
            return true
        } else {
            game.splash("Giriş Yanlış")
            return false
        }
    } else {
        return false
    }
}
function Para_Yatırma () {
    Hesap = Hesap + game.askForNumber("Yatırılacak Miktar?")
    game.splash("Hesapta Kalan:", Hesap)
}
let Hesap = 0
Hesap = 1000
forever(function () {
    if (Giriş()) {
        if (game.askForNumber("Para Çekmek İçin 1, Yatırmak İçin 2 Girin") == 1) {
            Para_Çekme()
        } else {
            Para_Yatırma()
        }
    } else {
        game.splash("Giriş Yapılamadı")
    }
})

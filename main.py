def Giriş():
    if game.ask_for_string("Adınız?") == "Mert":
        if game.ask_for_number("Şifreniz?") == 123:
            return True
        else:
            game.splash("Giriş Yanlış")
            return False
    else:
        return False
def Para_Çekme():
    global Hesap
    Hesap = Hesap - game.ask_for_number("Çekilecek Miktar?")
    game.splash("Hesapta Kalan:", Hesap)
def Para_Yatırma():
    global Hesap
    Hesap = Hesap + game.ask_for_number("Yatırılacak Miktar?")
    game.splash("Hesapta Kalan:", Hesap)
Hesap = 0
Hesap = 1000

def on_forever():
    if Giriş():
        if game.ask_for_number("Para Çekmek İçin 1, Yatırmak İçin 2 Girin") == 1:
            Para_Çekme()
        else:
            Para_Yatırma()
    else:
        game.splash("Giriş Yapılamadı")
forever(on_forever)

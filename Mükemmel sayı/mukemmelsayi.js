//1000'e kadarki tüm mükemmel sayıları listeleyen programı yazınız.
var sayi=1;
for (var sayi=1; sayi<=1000; sayi++)
{
    var toplam = 0;
    for (var i = 1 ; i < sayi ; i++) {
      if(sayi %i == 0)  
        toplam += i;
    }

    if (toplam == sayi) 
      console.log(sayi + " mükemmel bir sayidir");

}
sayi = prompt("sayi giriniz : ")
function faktoriyel(sayi){

    var sonuc = 1;

    for(var i=2;i<=sayi;i++){
        sonuc*=i;
    }
    return sonuc;
}


console.log(faktoriyel(sayi));

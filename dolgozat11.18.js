//2.feladat
szam=int(input("Adjon meg egy számot!"));
function prime(szam) {
    if (szam <= 1) return false;
let osztok = [];
    for (let i = 1; i <= szam; i++) {
        if (szam % i === 0) {
            osztok.push(i); 
        }
    }
    console.log(`A ${szam} osztói: ${osztok.join(', ')}`);
}
//3.feladat
function MinMax(szamok) {
    if (!Array.isArray(szamok) || szamok.length < 1) {
      return "Több számot is adjon meg." ;
    }
    const min = Math.min(szamok);
    const max = Math.max(szamok);
    return { min, max };
  }
  const szamok = [5, 2, 8, 1, 4];
  const eredmeny = MinMax(szamok);
  console.log("Legkisebb szám: " ${eredmeny.min});
  console.log("Highest number: " ${eredmeny.max});



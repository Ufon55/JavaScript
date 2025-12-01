/*****************************************************************/
// Uloha: Spočítej součet dvou čísel zadaných uživatelem
// Požádej uživatele o dvě čísla pomocí `prompt()` a vypiš jejich součet do konzole.
 
// zde bude tvoje řešení

/*let cislo1, cislo2;

cislo1 = prompt("zadej cislo");
cislo2 = prompt("zadej cislo");

cislo1=parseFloat(cislo1);
cislo2=parseFloat(cislo2);

console.log(cislo1 + cislo2);*/
 
/*****************************************************************/
// Uloha: Zjisti, zda je číslo sudé nebo liché
/* 
    Požádej uživatele o číslo a zjisti, zda je sudé nebo liché.
    Výsledek zapiš do konzole.
*/
 
// zde bude tvoje řešení

/*let cislo

cislo = prompt("zadej cislo")

switch(cislo%2){
    case 0: console.log("sude"); break
    default: console.log("liche"); break
}*/
 
 
/*****************************************************************/
// Uloha: Převod stupňů Celsia na Fahrenheity
/*
    Požádej uživatele o teplotu ve stupních Celsia a převeď ji na Fahrenheity.
    Vzorec: `F = C * 9/5 + 32`
*/
 
// zde bude tvoje řešení

/*let stupne,fahrenheit;

stupne = Number(prompt("zadej stupne celsia"))
fahrenheit = parseFloat(stupne * 9/5 + 32)

console.log("je", stupne, "celsia", "coz je", fahrenheit,"fahrenheit")*/

 
 
/*****************************************************************/
// Úloha: Zjisti, zda je číslo kladné, záporné nebo nula
/*
    Požádej uživatele o číslo. Do konzole vypiš zda:
    - číslo je kladné, záporné či je nula
*/
 
// zde bude tvoje řešení

/*let cislo;

cislo=Number(prompt("zadej cislo"))

if(cislo<0) { console.log("cislo je zaporne")}
if(cislo>0) { console.log("cislo je kladne")}
if(cislo==0) { console.log("cislo je nula")}*/
 
 
/*****************************************************************/
// Úloha: Zjisti, zda zadané slovo obsahuje písmeno „a“
/**
* Požádej uživatele o slovo. Pomocí .include() zjisti,
* zda slovo obsahuje písmeno "a". Vypiš do konzole
*/
 
// zde bude tvoje řešení

/*let string
string = prompt("zadej slovo")
if(string.includes('a')){ console.log(string)} */

 
/*****************************************************************/
// Uloha: Analyzátor textu
/**
* Požádej uživatele o slovo. Zjisti kolik kterých písmen obsahuje.
* Použij .include() nad zadaným slovem. Vypiš do konzole.
*/

// zde bude tvoje řešení

let slovo
slovo = prompt("zadej slovo")

 
/*****************************************************************/
// 6️⃣ Zjisti, zda zadané číslo je prvočíslo
/**
* Požádej uživatele o číslo. Pomocí ternárního operátoru zjisti,
* zda je číslo prvočíslo či nikoliv.
*/
 
// zde bude tvoje řešení


 
 
/*****************************************************************/
// Příklady na práci se **scope (zastínění proměnné)**
 
let x = 10; // globální scope
 
function prikladScope() {
    let x = 5; // lokální scope – zastínění globální x
    console.log("Lokální x: " + x); // 5
}
 
prikladScope();
console.log("Globální x: " + x); // 10
 
/*****************************************************************/
// Příklad **redeclaration proměnné**
 
var a = 5;
var a = 10; // var umožňuje redeklaraci
console.log(a); // 10
 
// let b = 5;
// let b = 10; // chybové, let neumožňuje redeklaraci
 
/*****************************************************************/
// # 🔹 Rozdíl mezi `==` a `===`
console.log(5 == "5");  // true -> porovnává hodnotu, typ ignoruje
console.log(5 === "5"); // false -> porovnává hodnotu i typ
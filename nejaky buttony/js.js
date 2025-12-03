let buttonControl = document.getElementById("button1")
buttonControl.addEventListener("click",funkce)

function funkce(){
    let cisla = []
    let i=0;
    let x=1;
    let nejvetsi=0
    let pocet=0
    let prumer=0
    let max=-2147483648, min=21474836948
    let sudy=0, lichy=0
        for(i=0;i!=x;x++,i++){
            cisla[i] = Number(prompt("zadej cislo")) 
            pocet++
            if(cisla[i]==0)
            {
                i=x;
            }
        }
        for(i=0;i<pocet;i++){
            if(cisla[i]>max) (max=cisla[i])
            prumer += cisla[i]
            if(cisla[i]%2==0) { sudy++  }
            if(cisla[i]%2!=0) { lichy++ }
        }
        pocet=pocet-1
        console.log("nejvetsi cislo", max)
        console.log("prumer je", prumer/pocet)
        console.log("lichy: ", lichy)
        console.log("sudy:", sudy-1)

        
    }
var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")
var botao3 = document.getElementById("botao3")
var botao4 = document.getElementById("botao4")
var botao5 = document.getElementById("botao5")
var botao6 = document.getElementById("botao6")
var botao7 = document.getElementById("botao7")
var botao8 = document.getElementById("botao8")
var botao9 = document.getElementById("botao9")
var botao10 = document.getElementById("botao10")
var botao11 = document.getElementById("botao11")
var botao12 = document.getElementById("botao12")
var botao13 = document.getElementById("botao13")
var botao14 = document.getElementById("botao14")
var botao15 = document.getElementById("botao15")
var botao16 = document.getElementById("botao16")

botao1.addEventListener("click", () => {
    botao1.innerHTML = "🛠"
})
botao2.addEventListener("click", () => {
    botao2.innerHTML = "🛠"
})
botao3.addEventListener("click", () => {
    botao3.innerHTML = "🛠"
})
botao4.addEventListener("click", () => {
    botao4.innerHTML = "🛠"
})
botao5.addEventListener("click", () => {
    botao5.innerHTML = "🛠"
})
botao6.addEventListener("click", () => {
    botao6.innerHTML = "🛠"
})
botao7.addEventListener("click", () => {
    botao7.innerHTML = "🛠"
})
botao8.addEventListener("click", () => {
    botao8.innerHTML = "🛠"
})
botao9.addEventListener("click", () => {
    botao9.innerHTML = "🛠"
})
botao10.addEventListener("click", () => {
    botao10.innerHTML = "🛠"
})
botao11.addEventListener("click", () => {
    botao11.innerHTML = "🛠"
})
botao12.addEventListener("click", () => {
    botao12.innerHTML = "🛠"
})
botao13.addEventListener("click", () => {
    botao13.innerHTML = "🛠"
})
botao14.addEventListener("click", () => {
    botao14.innerHTML = "🛠"
})
botao15.addEventListener("click", () => {
    botao15.innerHTML = "🛠"
})
botao16.addEventListener("click", () => {
    botao16.innerHTML = "🛠"
})
////////////////////////////////////////////
botao1.addEventListener("dblclick", () => {
    botao1.innerHTML = "💣"
})
botao2.addEventListener("dblclick", () => {
    botao2.innerHTML = "💣"
})
botao3.addEventListener("dblclick", () => {
    botao3.innerHTML = "💣"
})
botao4.addEventListener("dblclick", () => {
    botao4.innerHTML = "💣"
})
botao5.addEventListener("dblclick", () => {
    botao5.innerHTML = "💣"
})
botao6.addEventListener("dblclick", () => {
    botao6.innerHTML = "💣"
})
botao7.addEventListener("dblclick", () => {
    botao7.innerHTML = "💣"
})
botao8.addEventListener("dblclick", () => {
    botao8.innerHTML = "💣"
})
botao9.addEventListener("dblclick", () => {
    botao9.innerHTML = "💣"
})
botao10.addEventListener("dblclick", () => {
    botao10.innerHTML = "💣"
})
botao11.addEventListener("dblclick", () => {
    botao11.innerHTML = "💣"
})
botao12.addEventListener("dblclick", () => {
    botao12.innerHTML = "💣"
})
botao13.addEventListener("dblclick", () => {
    botao13.innerHTML = "💣"
})
botao14.addEventListener("dblclick", () => {
    botao14.innerHTML = "💣"
})
botao15.addEventListener("dblclick", () => {
    botao15.innerHTML = "💣"
})
botao16.addEventListener("dblclick", () => {
    botao16.innerHTML = "💣"
})
//////////////////////////////////////////check

////////////////////////////////////////////////////////
document.getElementById("verificar").addEventListener("click", () => {
    for (let i = 0; i < 16; i++) {
        console.log(document.getElementsByClassName("botao")[i].innerHTML)
        localStorage.setItem(i, document.getElementsByClassName("botao")[i].innerHTML)
    }
    //////////////////////////////////check
    var flag = true
    while (flag == true) {
        if (localStorage.getItem(0) == "🛠" && localStorage.getItem(1) == "🛠" && localStorage.getItem(2) == "🛠" && localStorage.getItem(3) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(4) == "🛠" && localStorage.getItem(5) == "🛠" && localStorage.getItem(6) == "🛠" && localStorage.getItem(7) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(8) == "🛠" && localStorage.getItem(9) == "🛠" && localStorage.getItem(10) == "🛠" && localStorage.getItem(11) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(12) == "🛠" && localStorage.getItem(13) == "🛠" && localStorage.getItem(14) == "🛠" && localStorage.getItem(15) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "🛠" && localStorage.getItem(4) == "🛠" && localStorage.getItem(8) == "🛠" && localStorage.getItem(12) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(1) == "🛠" && localStorage.getItem(5) == "🛠" && localStorage.getItem(9) == "🛠" && localStorage.getItem(13) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(2) == "🛠" && localStorage.getItem(6) == "🛠" && localStorage.getItem(10) == "🛠" && localStorage.getItem(14) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(3) == "🛠" && localStorage.getItem(7) == "🛠" && localStorage.getItem(11) == "🛠" && localStorage.getItem(15) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "🛠" && localStorage.getItem(5) == "🛠" && localStorage.getItem(10) == "🛠" && localStorage.getItem(15) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(3) == "🛠" && localStorage.getItem(6) == "🛠" && localStorage.getItem(9) == "🛠" && localStorage.getItem(12) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (localStorage.getItem(0) == "💣" && localStorage.getItem(1) == "💣" && localStorage.getItem(2) == "💣" && localStorage.getItem(3) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(4) == "💣" && localStorage.getItem(5) == "💣" && localStorage.getItem(6) == "💣" && localStorage.getItem(7) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(8) == "💣" && localStorage.getItem(9) == "💣" && localStorage.getItem(10) == "💣" && localStorage.getItem(11) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(12) == "💣" && localStorage.getItem(13) == "💣" && localStorage.getItem(14) == "💣" && localStorage.getItem(15) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "💣" && localStorage.getItem(4) == "💣" && localStorage.getItem(8) == "💣" && localStorage.getItem(12) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(1) == "💣" && localStorage.getItem(5) == "💣" && localStorage.getItem(9) == "💣" && localStorage.getItem(13) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(2) == "💣" && localStorage.getItem(6) == "💣" && localStorage.getItem(10) == "💣" && localStorage.getItem(14) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(3) == "💣" && localStorage.getItem(7) == "💣" && localStorage.getItem(11) == "💣" && localStorage.getItem(15) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "💣" && localStorage.getItem(5) == "💣" && localStorage.getItem(10) == "💣" && localStorage.getItem(15) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(3) == "💣" && localStorage.getItem(6) == "💣" && localStorage.getItem(9) == "💣" && localStorage.getItem(12) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
    }
}
)
document.getElementById("limpar").addEventListener("click", () => {

    botao1.innerHTML = ""
    botao2.innerHTML = ""
    botao3.innerHTML = ""
    botao4.innerHTML = ""
    botao5.innerHTML = ""
    botao6.innerHTML = ""
    botao7.innerHTML = ""
    botao8.innerHTML = ""
    botao9.innerHTML = ""
    botao10.innerHTML = ""
    botao11.innerHTML = ""
    botao12.innerHTML = ""
    botao13.innerHTML = ""
    botao14.innerHTML = ""
    botao15.innerHTML = ""
    botao16.innerHTML = ""
}
)


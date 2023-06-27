var botao1 = document.getElementById("botao1")
var botao2 = document.getElementById("botao2")
var botao3 = document.getElementById("botao3")
var botao4 = document.getElementById("botao4")
var botao5 = document.getElementById("botao5")
var botao6 = document.getElementById("botao6")
var botao7 = document.getElementById("botao7")
var botao8 = document.getElementById("botao8")
var botao9 = document.getElementById("botao9")

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
//////////////////////////////////////////

////////////////////////////////////////////////////////
document.getElementById("verificar").addEventListener("click", () => {
    for (let i = 0; i < 9; i++) {
        console.log(document.getElementsByClassName("botao")[i].innerHTML)
        localStorage.setItem(i, document.getElementsByClassName("botao")[i].innerHTML)
    }
    var flag = true
    while (flag == true) {
        if (localStorage.getItem(0) == "🛠" && localStorage.getItem(1) == "🛠" && localStorage.getItem(2) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(3) == "🛠" && localStorage.getItem(4) == "🛠" && localStorage.getItem(5) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(6) == "🛠" && localStorage.getItem(7) == "🛠" && localStorage.getItem(8) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "🛠" && localStorage.getItem(3) == "🛠" && localStorage.getItem(6) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(1) == "🛠" && localStorage.getItem(4) == "🛠" && localStorage.getItem(7) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(2) == "🛠" && localStorage.getItem(5) == "🛠" && localStorage.getItem(8) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "🛠" && localStorage.getItem(4) == "🛠" && localStorage.getItem(8) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(2) == "🛠" && localStorage.getItem(4) == "🛠" && localStorage.getItem(6) == "🛠") {
            alert("🛠 ganhou!!!")
            flag = false
        }
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////
        if (localStorage.getItem(0) == "💣" && localStorage.getItem(1) == "💣" && localStorage.getItem(2) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(3) == "💣" && localStorage.getItem(4) == "💣" && localStorage.getItem(5) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(6) == "💣" && localStorage.getItem(7) == "💣" && localStorage.getItem(8) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "💣" && localStorage.getItem(3) == "💣" && localStorage.getItem(6) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(1) == "💣" && localStorage.getItem(4) == "💣" && localStorage.getItem(7) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(2) == "💣" && localStorage.getItem(5) == "💣" && localStorage.getItem(8) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(0) == "💣" && localStorage.getItem(4) == "💣" && localStorage.getItem(8) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (localStorage.getItem(2) == "💣" && localStorage.getItem(4) == "💣" && localStorage.getItem(6) == "💣") {
            alert("💣 ganhou!!!")
            flag = false
        }
        if (flag == true) {
            alert("Deu velha!!!")
            break
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
}
)


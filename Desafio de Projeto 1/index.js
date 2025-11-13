// Matriz para armazenar as informações do herois como ficha de personagem (nome, classe, sexo, nivel e EXP)
let fichaDoHeroi = [
    ["Aragorn", "Guerreiro", "M", 20, 1500],
    ["Legolas", "Arqueiro", "F", 11, 880],
    ["Gandalf", "Mago", "M", 25, 3000],
    ["Tio Patinhas", "Bilionário", "M", 31, 5480],
    ["Capitão Gancho", "Pirata", "M", 15, 2000],
    ["Mulan", "Guerreira", "F", 18, 2200],
    ["Merlin", "Mago", "M", 22, 2700],
    ["Zelda", "Princesa", "F", 14, 1600],
    ["Link", "Aventureiro", "M", 16, 1900],
    ["Lara Croft", "Exploradora", "F", 19, 2400]
]

let exp = fichaDoHeroi[0][4]

let classLevel = ""

if (exp >= 1001 && exp <= 2000) {
  classLevel = "Bronze"
} else if (exp >= 2001 && exp <= 5000) {
  classLevel = "Prata"
} else if (exp >= 5001 && exp <= 6000) {
  classLevel = "Ouro"
} else if (exp >= 6001 && exp <= 7000) {
  classLevel = "Diamante"
} else if (exp >= 7001 && exp <= 8000) {
  classLevel = "Platina"
} else if (exp >= 8001 && exp <= 9000) {
  classLevel = "Ascendente"
} else if (exp >= 9001 && exp <= 10000) {
  classLevel = "Imortal"
} else if (exp > 10000) {
  classLevel = "Lendário"
} else {
  classLevel = "Ferro"
}

console.log(`O Herói ${fichaDoHeroi[0][0]}, ${fichaDoHeroi[0][1]}, sexo ${fichaDoHeroi[0][2]}, nível ${fichaDoHeroi[0][3]}, esta no nível de Herói ${classLevel}!`)
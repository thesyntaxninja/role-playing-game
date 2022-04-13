import characterData from "./data.js"
import Character from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"];

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}


function attack() {
    wizard.getDiceHtml()
    monster.getDiceHtml()
    wizard.takeDamage(monster.currentDiceScore)
    monster.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.dead || monster.dead) {
        endGame()
    }
}

function endGame() {
    const endMessage = wizard.dead && monster.dead ? `No victors`
        : monster.dead ? `The Wizard Wins!`
            : `The Orc is victorious`

    const endEmoji = wizard.dead ? `☠️` : `🔮`

    document.body.innerHTML =
        `<div class="end-game">
            <h2>Game Over</h2>
            <h3>${endMessage}</h3>
            <p class="end-emoji">${endEmoji}</p>
        </div>`
}

function render() {
    document.getElementById("hero").innerHTML = wizard.getCharacterHtml()
    document.getElementById("monster").innerHTML = monster.getCharacterHtml()
}

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
let monster = getNewMonster()
render()
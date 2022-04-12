import characterData from "./data.js"
import Character from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"];


function attack() {
    wizard.getDiceHtml()
    orc.getDiceHtml()
    wizard.takeDamage(orc.currentDiceScore)
    orc.takeDamage(wizard.currentDiceScore)
    render()

    if (wizard.dead || orc.dead) {
        endGame()
    }
}

function endGame() {
    const endMessage = wizard.dead && orc.dead ? `No victors`
        : orc.dead ? `The Wizard Wins!`
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
    document.getElementById("monster").innerHTML = orc.getCharacterHtml()
}

document.getElementById("attack-button").addEventListener("click", attack)

const wizard = new Character(characterData.hero)
const orc = new Character(characterData.monster)
render()
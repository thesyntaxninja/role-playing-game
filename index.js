import characterData from "./data.js"
import Character from "./Character.js"

let monstersArray = ["orc", "demon", "goblin"];
let isWaiting = false

function getNewMonster() {
    const nextMonsterData = characterData[monstersArray.shift()]
    return nextMonsterData ? new Character(nextMonsterData) : {}
}


function attack() {
    if (!isWaiting) {
        wizard.setDiceHtml()
        monster.setDiceHtml()
        wizard.takeDamage(monster.currentDiceScore)
        monster.takeDamage(wizard.currentDiceScore)
        render()

        if (wizard.dead) {
            setTimeout(() => endGame(), 1500)
        } else if (monster.dead) {
            if (monstersArray.length > 0) {
                isWaiting = true
                monster = getNewMonster()
                setTimeout(() => {
                    render()
                    isWaiting = false
                }, 1500)
            } else {
                setTimeout(() => endGame(), 1500)
            }
        }
    }
}

function endGame() {
    const endMessage = wizard.dead && monster.dead ? `No victors - all creatures are dead`
        : monster.dead ? `The Wizard Wins!`
            : `The monsters are victorious`

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
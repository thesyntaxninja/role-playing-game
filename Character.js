import {getRollDiceArray} from "./utils.js"

function Character(data) {
    Object.assign(this, data)

    this.getDiceHtml = (diceCount) => {
        return getRollDiceArray(diceCount).map(die => {
            return `<div class="dice">${die}</div>`
        }).join("")
    }

    this.getCharacterHtml = () => {
        const {elementId, name, avatar, health, diceCount} = this

        const diceHtml = this.getDiceHtml(diceCount)

        return (`
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src=${avatar} />
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
        )
    }
}

export default Character
import {getDicePlaceHolderHtml, getRollDiceArray} from "./utils.js"


function Character(data) {
    Object.assign(this, data)

    this.diceArray = getDicePlaceHolderHtml(this.diceCount)

    this.getDiceHtml = (diceCount) => {
        this.currentDiceScore = getRollDiceArray(this.diceCount)
        return this.diceArray = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join("")
    }

    this.takeDamage = (attackScoreArray) => {
        const totalAttackScore = attackScoreArray.reduce((total, diceNum) => {
            return total + diceNum
        })

        this.health -= totalAttackScore
        if (this.health <= 0) {
            this.dead = true
            this.health = 0
        }
    }

    this.getCharacterHtml = () => {
        const {elementId, name, avatar, health, diceCount, diceArray} = this

        return (`
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src=${avatar} />
                <p class="health">health: <b> ${health} </b></p>
                <div class="dice-container">
                    ${diceArray}
                </div>
            </div>`
        )
    }
}

export default Character
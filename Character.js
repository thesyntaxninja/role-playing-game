import {getDicePlaceHolderHtml, getPercentage, getRollDiceArray} from "./utils.js"

function Character(data) {
    Object.assign(this, data)

    this.maxHealth = this.health

    this.diceHtml = getDicePlaceHolderHtml(this.diceCount)

    this.setDiceHtml = (diceCount) => {
        this.currentDiceScore = getRollDiceArray(this.diceCount)
        return this.diceHtml = this.currentDiceScore.map((num) => {
            return `<div class="dice">${num}</div>`
        }).join("")
    }

    this.getHealthBarHtml = () => {
        const percent = getPercentage(this.health, this.maxHealth)
        return `
        <div class="health-bar-outer">
            <div class="health-bar-inner ${percent < 26 ? "danger" : ""} " 
            style="width: ${percent}%;">
            </div>
        </div>`
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
        const {elementId, name, avatar, health, diceCount, diceHtml} = this
        const healthBar = this.getHealthBarHtml()
        return (`
            <div class="character-card">
                <h4 class="name">${name}</h4>
                <img class="avatar" src=${avatar} />
                <p class="health">health: <b> ${health} </b></p>
                ${healthBar}
                <div class="dice-container">
                    ${diceHtml}
                </div>
            </div>`
        )
    }
}

export default Character
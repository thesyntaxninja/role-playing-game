function getRollDiceArray(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return Math.floor(Math.random() * 6) + 1
    })
}

function getDicePlaceHolderHtml(diceCount) {
    return new Array(diceCount).fill(0).map(() => {
        return `<div class="placeholder-dice"></div>`
    }).join("")
}

const getPercentage = (reamainingHealth, maximumHealth) => {
    return (100 * reamainingHealth) / maximumHealth
}

export {getRollDiceArray, getDicePlaceHolderHtml, getPercentage}
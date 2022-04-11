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

export {getRollDiceArray, getDicePlaceHolderHtml}
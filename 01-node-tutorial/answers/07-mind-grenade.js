team1Score = 1
team2Score = 0
const grenade = () => {
    if (team1Score > team2Score) {
        console.log("Team 1 Wins!")
    }
    else
        console.log("Team 2 Wins!")

}

grenade();
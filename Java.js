//switch statment on teams
const favoriteTeam = "dreamScape";

switch (favoriteTeam) {
    case "faze":
        console.log("Faze, can be such a good fit for you.");
        break;
    case "cloud9":
        console.log("Cload9 is fast past playing style, are you ready for it.");
        break;
    case "teamLiquad":
            console.log("Team Liquad is slow past style, allow the attackers to come at them.");
        break;
    case "dreamScape":
        console.log("You have chosen the right team, be ready to feel like you at home.");
        break;
    default:
        console.log("We do not have the team");
}

// validating Email

function validateEmail(email) {
    return email.includes(`@`) && email.includes(`.`);
}

console.log(validateEmail("Dillon_O_Stein97@yahoo.com"));

// Random Team Generator
const team = [`DreamScape`, `Faze`, `Cloud9`, `TeamLiquid`]
 const pickRandomTeam = () => {
    const index = Math.floor(Math.random() * PromiseRejectionEvent.length);
    return team[index];
 }
 console.log(`Random team picker: ${pickRandomTeam()}`);


 //Game selector

const gameSelection = [`FragPunk`, `Apex Legends`, `RSS`];
for(let game of gameSelection) {
    console.log(game);
}

const ar: string[] = [
    "apple", "banana", "cherry", "dragon", "elephant", "flamingo",
    "giraffe", "horizon", "island", "jungle", "kangaroo", "lantern",
    "mountain", "nebula", "octopus", "penguin", "quasar", "rainbow",
    "sunflower", "tornado", "umbrella", "volcano", "whisper", "xylophone",
    "yogurt", "zeppelin", "avocado", "butterfly", "cactus", "diamond",
    "emerald", "firefly", "galaxy", "harbor", "illusion", "jigsaw",
    "koala", "lighthouse", "meadow", "nocturnal", "ocean", "paradise",
    "quicksand", "rhinoceros", "starlight", "treasure", "underwater",
    "vortex", "waterfall", "xenon", "yellow", "zodiac", "albatross",
    "blizzard", "crimson", "dolphin", "eclipse", "fjord", "gondola",
    "hibiscus", "iceberg", "javelin", "kingfisher", "labyrinth",
    "miracle", "nightfall", "opal", "phantom", "quiver", "radiance",
    "sapphire", "twilight", "universe", "victory", "wanderlust",
    "xylophonist", "yearning", "zenith", "asteroid", "basilisk",
    "comet", "dandelion", "evergreen", "fireworks", "glacier",
    "hummingbird", "infinity", "jasmine", "kryptonite", "lightning",
    "moonlight", "nectar", "obsidian", "periwinkle", "quintessence",
    "riviera", "serenity", "tangerine", "utopia", "vibrance", "whimsical",
    "xerox", "yonder", "zeppelin"
];
let customName = ar[Math.floor(Math.random()*ar.length)];
console.log(ar);
console.log(customName);
const hidden_name_array = [...Array(customName.length)].map(_ => "_")
const hidden_name = hidden_name_array.join(" ");
const main = document.getElementById('main');
const array_guess: string[] = [];
let count =8;
let isGameOver = false; // Flag to track if the game is over

if (main) {
    document.addEventListener("keydown", (event) => {
        if (isGameOver) return; // Stop processing if the game is over

        const key = event.key.toLowerCase();
        if (/^[a-z]$/.test(key) && !array_guess.includes(key)) {
            array_guess.push(key); 
            let isCorrectGuess = false;

            hidden_name_array.forEach((char, index) => {
                if (customName[index] === key) {
                    hidden_name_array[index] = key;
                    isCorrectGuess = true; 
                }
            });

            if (!isCorrectGuess) {
                count--;
            }

            const updated_hidden_name = hidden_name_array.join(" ");

            main.innerHTML = `
                <p> ${updated_hidden_name}</p>
                <p>Your Guesses: [${array_guess.join(", ")}]</p>
                <p>You have ${count} lives remaining</p>
            `;

            if (count == 0) {
                isGameOver = true; 
                main.innerHTML = `
                    <p> ${updated_hidden_name}</p>
                    <p>Your Guesses: [${array_guess.join(", ")}]</p>
                    <p>You have ${count} lives remaining</p>
                    <p>You lose!</p>
                    <p>The phrase was: ${customName}</p>
                `;
                return;
            }

            if (updated_hidden_name.replace(/ /g, "") == customName) {
                isGameOver = true; 
                main.innerHTML = `
                    <p> ${updated_hidden_name}</p>
                    <p>Your Guesses: [${array_guess.join(", ")}]</p>
                    <p>You have ${count} lives remaining</p>
                    <p>You won!</p>
                    <p>The phrase was: ${customName}</p>
                `;
                return;
            }
        }
    });

    main.innerHTML = `
        <p> ${hidden_name}</p>
        <p>Your Guesses: [${array_guess.join(", ")}]</p>
        <p>You have ${count} lives remaining</p>
    `;
}

const resetbtn = document.getElementById('Reset');
resetbtn?.addEventListener("click", () => {
    window.location.reload(); 
});
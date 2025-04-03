var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var ar = [
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
var customName = ar[Math.floor(Math.random() * ar.length)];
console.log(ar);
console.log(customName);
var hidden_name_array = __spreadArray([], Array(customName.length), true).map(function (_) { return "_"; });
var hidden_name = hidden_name_array.join(" ");
var main = document.getElementById('main');
var array_guess = [];
var count = 8;
var isGameOver = false; // Flag to track if the game is over
if (main) {
    document.addEventListener("keydown", function (event) {
        if (isGameOver)
            return; // Stop processing if the game is over
        var key = event.key.toLowerCase();
        if (/^[a-z]$/.test(key) && !array_guess.includes(key)) {
            array_guess.push(key);
            var isCorrectGuess_1 = false;
            hidden_name_array.forEach(function (char, index) {
                if (customName[index] === key) {
                    hidden_name_array[index] = key;
                    isCorrectGuess_1 = true; // Replace underscore with the guessed key
                }
            });
            if (!isCorrectGuess_1) {
                count--;
            }
            var updated_hidden_name = hidden_name_array.join(" ");
            main.innerHTML = "\n                <p> ".concat(updated_hidden_name, "</p>\n                <p>Your Guesses: [").concat(array_guess.join(", "), "]</p>\n                <p>You have ").concat(count, " lives remaining</p>\n            ");
            if (count == 0) {
                isGameOver = true; // Set the game over flag
                main.innerHTML = "\n                    <p> ".concat(updated_hidden_name, "</p>\n                    <p>Your Guesses: [").concat(array_guess.join(", "), "]</p>\n                    <p>You have ").concat(count, " lives remaining</p>\n                    <p>You lose!</p>\n                    <p>The phrase was: ").concat(customName, "</p>\n                ");
                return;
            }
            if (updated_hidden_name.replace(/ /g, "") == customName) {
                isGameOver = true; // Set the game over flag
                main.innerHTML = "\n                    <p> ".concat(updated_hidden_name, "</p>\n                    <p>Your Guesses: [").concat(array_guess.join(", "), "]</p>\n                    <p>You have ").concat(count, " lives remaining</p>\n                    <p>You won!</p>\n                    <p>The phrase was: ").concat(customName, "</p>\n                ");
                return;
            }
        }
    });
    main.innerHTML = "\n        <p> ".concat(hidden_name, "</p>\n        <p>Your Guesses: [").concat(array_guess.join(", "), "]</p>\n        <p>You have ").concat(count, " lives remaining</p>\n    ");
}
var resetbtn = document.getElementById('Reset');
resetbtn === null || resetbtn === void 0 ? void 0 : resetbtn.addEventListener("click", function () {
    window.location.reload(); // Reload the page to reset the game
});

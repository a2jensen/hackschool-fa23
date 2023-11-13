const getGame = async (req, res) => {

    const game = {
            sentence: 'Hello there!',
            correctCharacters: 12,
            incorrectCharacters: 0,
            wpm: 100,
            time: 13.33
        }

    res.status(200).json(game);
}


// Controller for our POST request
// Creates a new game in the database
const postGame = async (req, res) => {
    
    const { game } = req.body;
    const { sentence, correctCharacters, incorrectCharacters, wpm, time } = game;

    // Creates a new game in the database
    const newGame = await GameStats.create(req.body);

    res.status(200).json(newGame);
}

module.exports = { getGame, postGame };

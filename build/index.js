
const getFestivalsOccitanie = require('../index');

(async () => {
    try {
        const festivals = await getFestivalsOccitanie();

        console.log(festivals);

    }

    catch (error) {
        console.error(error);
    }
})();


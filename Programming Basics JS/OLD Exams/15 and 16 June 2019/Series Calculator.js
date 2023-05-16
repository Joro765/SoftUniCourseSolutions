function seriesCalculator(input) {
    let seriesTitle = input[0];
    let seasonsCount = Number(input[1]);
    let episodeCount = Number(input[2]);
    let minutesPerEpisode = Number(input[3]);


    let adverts = minutesPerEpisode * 0.2;
    let minutesPerEpisodewithAds = minutesPerEpisode + adverts;

    let episodes = seasonsCount * episodeCount;
    let specialEpisodes = seasonsCount * 10;

    let total = (episodes * minutesPerEpisodewithAds) + specialEpisodes;


    console.log(`Total time needed to watch the ${seriesTitle} series is ${total} minutes.`);


}







seriesCalculator(["Lucifer",
    "3",
    "18",
    "55"]);


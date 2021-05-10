const { GenreStatsRepo, TrackRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

async function extractGenres(req, res, next) {
  const {
    params: { id: trackId },
  } = req;

  const trackResponse = await TrackRepo.findById(trackId);

  if (trackResponse.data) {
    const genres = [...trackResponse.data.genres];
    req.genres = genres;
  }
  next();
}

async function addGenresStats(req, res, next) {
  const { genres } = req;

  if (genres.length > 0) {
    await Promise.all(
      genres.forEach(async (genreId) => {
        await addGenreStat(genreId);
      }),
    );
  }

  next();
}

async function addGenreStat(genreId) {
  try {
    const currDate = new Date(Date.now());
    const currYear = currDate.getUTCFullYear();
    const monthKey = `${currDate.getUTCMonth() + 1}`;
    const dailyKey = `${currDate.getUTCDate()}`;

    const queryFilter = {
      "metadata.genre": genreId,
      "metadata.date": currYear,
    };

    let dbResponse = await GenreStatsRepo.findOne(queryFilter);

    if (!dbResponse.error) {
      if (dbResponse.data) {
        const monthValue =
          dbResponse.data.playbacks.monthly[monthKey].totalPlaybacks + 1;
        const dailyValue =
          dbResponse.data.playbacks.monthly[monthKey].daily[dailyKey] + 1;
        dbResponse = await GenreStatsRepo.updateOneStats({
          query: queryFilter,
          monthKey: monthKey,
          monthValue: monthValue,
          dailyKey: dailyKey,
          dailyValue: dailyValue,
        });
      } else {
        dbResponse = await GenreStatsRepo.create({
          genreId: genreId,
          currYear: currYear,
          monthKey: monthKey,
          dailyKey: dailyKey,
        });
      }
    }
  } catch (error) {}
}

async function fetchStats(req, res, next) {
  const { params } = req;

  try {
    const dbResponse = await GenreStatsRepo.find(params);
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchStatsByGenre(req, res, next) {
  const {
    params: { id: genreId },
  } = req;

  try {
    const dbResponse = await GenreStatsRepo.findOne({
      "metadata.genre": genreId,
    });
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addGenresStats: addGenresStats,
  fetchStats: fetchStats,
  fetchStatsByGenre: fetchStatsByGenre,
  extractGenres: extractGenres,
};

const db = require("../../models");
const normalizeDBQuery = require("../../utils/normalizeDBQuery");

class GenreStatsRepository {
  create({ genreId, currYear, monthKey, dailyKey }) {
    return normalizeDBQuery(
      db.GenreStatistics.create({
        metadata: {
          genre: genreId,
          date: currYear,
        },
        totalPlaybacks: 1,
        playbacks: {
          monthly: {
            [monthKey]: {
              totalPlaybacks: 1,
              daily: {
                [dailyKey]: 1,
              },
            },
          },
        },
      }),
    );
  }

  updateOne({ queryFilter, monthKey, monthValue, dailyKey, dailyValue }) {
    return normalizeDBQuery(
      db.GenreStatistics.updateOne(queryFilter, {
        $inc: {
          totalPlaybacks: 1,
        },
        $set: {
          playbacks: {
            monthly: {
              [monthKey]: {
                totalPlaybacks: monthValue,
                daily: { [dailyKey]: dailyValue },
              },
            },
          },
        },
      }),
    );
  }

  find(query) {
    return normalizeDBQuery(db.GenreStatistics.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.GenreStatistics.findOne(query, "-__v"));
  }
}

module.exports = new GenreStatsRepository();

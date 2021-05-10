const db = require("../../models");
const normalizeDBQuery = require("../../utils/normalizeDBQuery");

/*
options = { trackId, userId, lat, long, agent }
*/
class TrackPlaybackRepository {
  create(options) {
    return normalizeDBQuery(
      db.TrackPlayback.create({
        metadata: {
          track: options.trackId,
          date: options.currDay,
        },
        totalPlaybacks: 1,
        playbacks: [
          {
            lat: options.lat,
            long: options.long,
            user: options.user,
            agent: options.agent,
            date: Date.now(),
          },
        ],
      }),
    );
  }

  createStat(options) {
    return normalizeDBQuery(
      db.TrackStatistics.create({
        metadata: {
          track: options.trackId,
          date: options.currYear,
        },
        totalPlaybacks: 1,
        playbacks: {
          monthly: {
            [options.monthKey]: {
              totalPlaybacks: 1,
              daily: {
                [options.dailyKey]: 1,
              },
            },
          },
        },
      }),
    );
  }

  findOneAndUpdate({ query, data }) {
    return normalizeDBQuery(
      db.TrackPlayback.findOneAndUpdate(
        query,
        {
          $push: {
            playbacks: {
              lat: data.lat,
              long: data.long,
              user: data.user,
              agent: data.agent,
              date: data.date,
            },
          },
        },
        { new: true },
      ),
    );
  }

  find(query) {
    return normalizeDBQuery(db.TrackPlayback.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.TrackPlayback.findOne(query, "-__v"));
  }

  findStats(query) {
    return normalizeDBQuery(db.TrackStatistics.find(query, "-__v"));
  }

  findOneStats(query) {
    return normalizeDBQuery(db.TrackStatistics.findOne(query, "-__v"));
  }

  updateOne(queryFilter, queryData) {
    return normalizeDBQuery(db.TrackPlayback.updateOne(queryFilter, queryData));
  }

  updateOneStats({ queryFilter, monthKey, monthValue, dailyKey, dailyValue }) {
    return normalizeDBQuery(
      db.TrackStatistics.updateOne(queryFilter, {
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
}

module.exports = new TrackPlaybackRepository();

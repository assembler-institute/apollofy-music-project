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

  createMonthly(options) {
    return normalizeDBQuery(
      db.MonthlyTrackPlayback.create({
        metadata: {
          track: options.trackId,
          date: options.currMonth,
        },
        totalPlaybacks: 0,
        [options.dailyKey]: 1,
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

  findOneMonthlyAndUpdate({ query, dailyKey }) {
    return normalizeDBQuery(
      db.MonthlyTrackPlayback.findOneAndUpdate(query, {
        $inc: {
          totalPlaybacks: 1,
          [dailyKey]: 1,
        },
      }),
    );
  }

  find(query) {
    return normalizeDBQuery(db.DailyTrackPlayback.find(query, "-__v"));
  }

  findOne(query) {
    return normalizeDBQuery(db.DailyTrackPlayback.findOne(query, "-__v"));
  }

  findMonthly(query) {
    return normalizeDBQuery(db.MonthlyTrackPlayback.find(query, "-__v"));
  }

  findOneMonthly(query) {
    return normalizeDBQuery(db.MonthlyTrackPlayback.findOne(query, "-__v"));
  }
}

module.exports = new TrackPlaybackRepository();

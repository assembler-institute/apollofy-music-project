const { TrackPlaybackRepo, TrackRepo } = require("../repositories");
const { handleDbResponse } = require("../repositories/repo-utils");

// options: { trackId, userId, lat, long, agent }
async function addPlayback(req, res, next) {
  const {
    params: { id: trackId },
    body: { lat, long, agent },
    user: { id: userId },
  } = req;

  try {
    let dbResponse;
    dbResponse = await TrackRepo.findById(trackId);

    if (dbResponse.error) {
      res.status(400).send({
        data: null,
        error: dbResponse.error,
      });
    }

    if (dbResponse.data && !dbResponse.error) {
      const currDate = new Date(Date.now());
      const currDay = currDate.toISOString().substring(0, 10);

      dbResponse = await TrackPlaybackRepo.findOneAndUpdate({
        query: {
          "metadata.track": trackId,
          "metadata.date": currDay,
        },
        data: {
          lat: lat,
          long: long,
          user: userId,
          agent: agent,
          date: currDate,
        },
      });

      if (dbResponse.error) {
        res.status(400).send({
          data: null,
          error: dbResponse.error,
        });
      }

      if (!dbResponse.data) {
        dbResponse = await TrackPlaybackRepo.create({
          trackId: trackId,
          currDay: currDay,
          user: userId,
          lat: lat,
          long: long,
          agent: agent,
        });
      }

      if (dbResponse.error) {
        res.status(400).send({
          data: null,
          error: dbResponse.error,
        });
      }

      // eslint-disable-next-line no-unused-vars
      const currYear = currDate.getUTCFullYear();
      const monthKey = `${currDate.getUTCMonth() + 1}`;
      const dailyKey = `${currDate.getUTCDate()}`;

      dbResponse = await TrackPlaybackRepo.findOneStats({
        "metadata.track": trackId,
        "metadata.date": currYear,
      });

      if (!dbResponse.error) {
        if (dbResponse.data) {
          const monthValue =
            dbResponse.data.playbacks.monthly[monthKey].totalPlaybacks + 1;
          const dailyValue =
            dbResponse.data.playbacks.monthly[monthKey].daily[dailyKey] + 1;
          dbResponse = await TrackPlaybackRepo.updateOneStats({
            query: {
              "metadata.track": trackId,
              "metadata.date": currYear,
            },
            monthKey: monthKey,
            monthValue: monthValue,
            dailyKey: dailyKey,
            dailyValue: dailyValue,
          });
        } else {
          dbResponse = await TrackPlaybackRepo.createStat({
            trackId: trackId,
            currYear: currYear,
            monthKey: monthKey,
            dailyKey: dailyKey,
          });
        }
      }
    }
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchPlaybacks(req, res, next) {
  const { params } = req;

  try {
    const dbResponse = await TrackPlaybackRepo.find(params);
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchById(req, res, next) {
  const {
    params: { id },
  } = req;

  try {
    const dbResponse = await TrackPlaybackRepo.findOneDaily({
      id: id,
    });
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchStats(req, res, next) {
  const { params } = req;

  try {
    const dbResponse = await TrackPlaybackRepo.findStats(params);
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchStatsById(req, res, next) {
  const {
    params: { id },
  } = req;

  try {
    const dbResponse = await TrackPlaybackRepo.findOneStats({
      id: id,
    });
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

module.exports = {
  addPlayback: addPlayback,
  fetchPlaybacks: fetchPlaybacks,
  fetchById: fetchById,
  fetchStats: fetchStats,
  fetchStatsById: fetchStatsById,
};

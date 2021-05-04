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

      const currMonth = currDate.toISOString().substring(0, 7);
      const dailyKey = `daily.${currDate.getUTCDate()}`;

      dbResponse = await TrackPlaybackRepo.findOneMonthlyAndUpdate({
        query: {
          "metadata.track": trackId,
          "metadata.date": currMonth,
        },
        dailyKey: dailyKey,
      });

      if (dbResponse.error) {
        res.status(400).send({
          data: null,
          error: dbResponse.error,
        });
      }

      if (!dbResponse.data) {
        dbResponse = await TrackPlaybackRepo.createMonthly({
          trackId: trackId,
          currMonth: currMonth,
          dailyKey: dailyKey,
        });
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
    const dbResponse = await TrackPlaybackRepo.findDaily(params);
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

async function fetchMonthlyPlaybacks(req, res, next) {
  const { params } = req;

  try {
    const dbResponse = await TrackPlaybackRepo.findMonthly(params);
    handleDbResponse(res, dbResponse);
  } catch (error) {
    next(error);
  }
}

async function fetchMonthlyById(req, res, next) {
  const {
    params: { id },
  } = req;

  try {
    const dbResponse = await TrackPlaybackRepo.findOneMonthly({
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
  fetchMonthlyPlaybacks: fetchMonthlyPlaybacks,
  fetchMonthlyById: fetchMonthlyById,
};

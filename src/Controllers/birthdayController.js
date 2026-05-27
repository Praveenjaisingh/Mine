const birthdayService = require("../Services/birthdayService");

exports.getInitData = (req, res, next) => {
  try {
    const data = birthdayService.getInitData();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.unlockSurprise = (req, res, next) => {
  try {
    const result = birthdayService.unlockSurprise(req.body);
    res.json(result);
  } catch (err) {
    next(err);
  }
};

exports.getLetters = (req, res, next) => {
  try {
    const data = birthdayService.getLetters();
    res.json(data);
  } catch (err) {
    next(err);
  }
};

exports.getMemories = (req, res, next) => {
  try {
    const data = birthdayService.getMemories();
    res.json(data);
  } catch (err) {
    next(err);
  }
};
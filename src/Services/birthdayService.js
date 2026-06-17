const repo = require("../Repositories/birthdayRepository");
const colorHelper = require("../Helpers/colorHelper");
const messageHelper = require("../Helpers/messageHelper");

exports.getInitData = () => {
  const base = repo.getBaseData();

  return {
    name: base.name,
    message: messageHelper.formatMessage(base.message),
    colors: colorHelper.getGradient(),
  };
};

exports.unlockSurprise = (payload) => {
  const valid = repo.validateUser(payload?.name);

  if (!valid) {
    return {
      success: false,
      message: "Try again ❤️"
    };
  }

  return {
    success: true,
    message: "Unlocked 🎉",
    redirect: "/surprise.html"
  };
};

exports.getLetters = () => {
  return repo.getLetters();
};

exports.getMemories = () => {
  return repo.getMemories();
};

exports.getQuiz = () => {
  return repo.getQuiz();
};

exports.getWishes = () => {
  return repo.getWishes();
};

exports.getPlaylist = () => {
  return repo.getPlaylist();
};

exports.getCountdown = () => {
  const cfg = repo.getBirthdayConfig();
  const base = repo.getBaseData();
  return {
    name: base.name,
    birthDate: cfg.birthDate
  };
};
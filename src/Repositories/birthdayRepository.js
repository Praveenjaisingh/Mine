const baseData = {
  name: "Mom ❤️",
  message: {
    en: "Happy Birthday Princess! You are my world 💖",
    ta: "இனிய பிறந்தநாள் வாழ்த்துகள் என் இளவரசியே! நீயே என் உலகம் 💖"
  },
};

const letters = [

  {
    title: {
      en: "When you miss me",
      ta: "என்னை நினைக்கும் போது"
    },
    message: {
      en: "No matter where I go Amma, my heart always stays with you ❤️",
      ta: "நான் எங்கு சென்றாலும் அம்மா, என் மனம் எப்போதும் உங்களுடனே இருக்கும் ❤️"
    }
  },

  {
    title: {
      en: "When you're sad",
      ta: "நீங்கள் கவலையில் இருக்கும் போது"
    },
    message: {
      en: "Your smile gives me strength every single day 💖",
      ta: "உங்கள் சிரிப்பு தினமும் எனக்கு வலிமை தருகிறது 💖"
    }
  },

  {
    title: {
      en: "Thank you Princess",
      ta: "நன்றி இளவரசியே"
    },
    message: {
      en: "Everything beautiful in my life started from your love ❤️",
      ta: "என் வாழ்க்கையின் அழகான அனைத்தும் உங்கள் அன்பிலிருந்து தொடங்கியது ❤️"
    }
  },

  {
    title: {
      en: "My Safe Place",
      ta: "என் பாதுகாப்பான இடம்"
    },
    message: {
      en: "Your hug is the safest place in this world.. 🤗",
      ta: "உங்கள் அணைப்பு தான் இந்த உலகில் எனக்கு மிகவும் பாதுகாப்பான இடம் 🤗"
    }
  },

  {
    title: {
      en: "Forever Grateful",
      ta: "என்றும் நன்றியுடன்"
    },
    message: {
      en: "Thank you for every sacrifice you made for me ❤️",
      ta: "எனக்காக நீங்கள் செய்த ஒவ்வொரு தியாகத்திற்கும் நன்றி ❤️"
    }
  }
];

const memories = [

  {
    image: "/images/shared image6.png",
    caption: {
      en: "My childhood with you 💕",
      ta: "உங்களுடன் என் குழந்தைப் பருவம் 💕"
    }
  },

  {
    image: "/images/shared image.png",
    caption: {
      en: "Best birthday moments 🎂",
      ta: "சிறந்த பிறந்தநாள் தருணங்கள் 🎂"
    }
  },

  {
     image: "/images/shared image5.png",
    caption: {
      en: "Forever memories ❤️",
      ta: "என்றும் மறக்க முடியாத நினைவுகள் ❤️"
    }
  },

  {
    image: "/images/shared image1.jpeg",
    caption: {
      en: "Your smile is my happiness 😊",
      ta: "உங்கள் சிரிப்பு தான் என் மகிழ்ச்சி 😊"
    }
  },

  {
    image: "/images/shared image2.jpeg",
    caption: {
      en: "Beautiful family moments 👨‍👩‍👦",
      ta: "அழகான குடும்ப தருணங்கள் 👨‍👩‍👦"
    }
  }
];

exports.getBaseData = () => baseData;

exports.validateUser = (name) => {
  return name && name.toLowerCase().trim() === "princess";
};

exports.getLetters = () => letters;

exports.getMemories = () => memories;
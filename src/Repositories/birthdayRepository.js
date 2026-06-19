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

const quiz = [
  {
    question: { en: "What is Mom's favorite color?", ta: "அம்மாவின் பிடித்த நிறம் என்ன?" },
    options: [
      { en: "Red", ta: "சிவப்பு" },
      { en: "Blue", ta: "நீலம்" },
      { en: "Pink", ta: "இளஞ்சிவப்பு" },
      { en: "Green", ta: "பச்சை" }
    ],
    correctIndex: 2
  },
  {
    question: { en: "What is Mom's favorite festival?", ta: "அம்மாவின் பிடித்த பண்டிகை எது?" },
    options: [
      { en: "Diwali", ta: "தீபாவளி" },
      { en: "Pongal", ta: "பொங்கல்" },
      { en: "New Year", ta: "புத்தாண்டு" },
      { en: "Her Birthday 🎂", ta: "அவளுடைய பிறந்தநாள் 🎂" }
    ],
    correctIndex: 0
  },
  {
    question: { en: "What dish does Mom make best?", ta: "அம்மா சமைக்கும் சிறந்த உணவு எது?" },
    options: [
      { en: "Biryani", ta: "பிரியாணி" },
      { en: "Sambar", ta: "சாம்பார்" },
      { en: "Sweets", ta: "இனிப்புகள்" },
      { en: "Everything! 😋", ta: "எல்லாமே! 😋" }
    ],
    correctIndex: 3
  },
  {
    question: { en: "What does Mom love doing the most?", ta: "அம்மா எதை மிகவும் விரும்பி செய்வாள்?" },
    options: [
      { en: "Taking care of us", ta: "எங்களை கவனித்துக்கொள்வது" },
      { en: "Watching her favorite serials", ta: "அவள் பிடித்த சீரியல் பார்ப்பது" },
      { en: "Gardening", ta: "தோட்டக்கலை" },
      { en: "Talking with family", ta: "குடும்பத்துடன் பேசுவது" }
    ],
    correctIndex: 0
  },
  {
    question: { en: "What does Mom always tell us?", ta: "அம்மா எப்போதும் எங்களிடம் என்ன சொல்வாள்?" },
    options: [
      { en: "Eat well 🍲", ta: "சாப்பிடு நன்றாக 🍲" },
      { en: "Take care of yourself 🥰", ta: "உன்னை கவனித்துக்கொள் 🥰" },
      { en: "Be kind to everyone ❤️", ta: "எல்லோரிடமும் அன்பாக இரு ❤️" },
      { en: "All of the above, always! 💖", ta: "இவை அனைத்தும், எப்போதும்! 💖" }
    ],
    correctIndex: 3
  }
];

const wishes = [
  {
    from: { en: "Your Loving Family", ta: "உங்கள் அன்பு குடும்பம்" },
    message: {
      en: "Happy Birthday Amma! Every year with you is a blessing. We love you endlessly 🎂❤️",
      ta: "இனிய பிறந்தநாள் வாழ்த்துகள் அம்மா! உங்களுடன் கடக்கும் ஒவ்வொரு வருடமும் ஒரு வரம். எங்கள் அன்பு எல்லையற்றது 🎂❤️"
    }
  },
  {
    from: { en: "Your Children", ta: "உங்கள் குழந்தைகள்" },
    message: {
      en: "Thank you for being our superhero. Wishing you all the happiness in the world today 🦸‍♀️💕",
      ta: "எங்கள் சூப்பர்ஹீரோவாக இருந்ததற்கு நன்றி. இன்று உலகின் அனைத்து மகிழ்ச்சியும் உங்களுக்கு கிடைக்க வேண்டும் 🦸‍♀️💕"
    }
  },
  {
    from: { en: "Your Best Friend", ta: "உங்கள் சிறந்த தோழி" },
    message: {
      en: "To the kindest soul I know — may this year bring you so much joy and laughter 🌸✨",
      ta: "நான் அறிந்த மிக அன்பான மனம் கொண்டவளுக்கு — இந்த வருடம் மகிழ்ச்சியும் சிரிப்பும் நிறைந்திருக்கட்டும் 🌸✨"
    }
  },
  {
    from: { en: "Your Sister", ta: "உங்கள் சகோதரி" },
    message: {
      en: "We've shared a lifetime of memories and I cherish every one. Happy Birthday! 🥳💝",
      ta: "நாம் பல வாழ்நாள் நினைவுகளை பகிர்ந்துள்ளோம், அவை எல்லாம் எனக்கு மதிப்புமிக்கது. இனிய பிறந்தநாள்! 🥳💝"
    }
  },
  {
    from: { en: "Everyone Who Loves You", ta: "உங்களை நேசிக்கும் அனைவரும்" },
    message: {
      en: "The world is brighter because you're in it. Have the most beautiful birthday, today and always 🌷💖",
      ta: "நீங்கள் இருப்பதால் இந்த உலகம் இன்னும் பிரகாசமாக இருக்கிறது. இன்றும் எப்போதும் மிக அழகான பிறந்தநாள் வாழ்த்துகள் 🌷💖"
    }
  }
];


const playlist = [
  {
    title: { en: "Anbe En Anbe", ta: "அன்பே என் அன்பே" },
    note: { en: "A soft melody full of love, just for you 💕", ta: "அன்பு நிறைந்த மென்மையான மெல்லிசை, உங்களுக்காக மட்டும் 💕" },
    src: "/music/Anbe%20En%20Anbe%20Bgm.mp3",
    emoji: "🎻"
  },
  {
    title: { en: "Vikram Vedha — Love Theme", ta: "விக்ரம் வேதா — லவ் தீம்" },
    note: { en: "A beautiful tune for beautiful memories ✨", ta: "அழகான நினைவுகளுக்கான அழகான இசை ✨" },
    src: "/music/Vikram%20Vedha%20Love%20Bgm.mp3",
    emoji: "🎶"
  }
];


const birthdayConfig = {
  birthDate: "1975-01-01"
};


const prizeCategories = [
  {
    key: "flowers",
    emoji: "🌸",
    label: { en: "Flowers", ta: "பூக்கள்" },
    items: [
      { emoji: "🌹", name: { en: "Rose", ta: "ரோஜா" } },
      { emoji: "🌷", name: { en: "Tulip", ta: "டுலிப்" } },
      { emoji: "🌻", name: { en: "Sunflower", ta: "சூரியகாந்தி" } }
    ],
    gift: {
      en: "You matched all the Flowers! 🌸 A real bouquet is coming your way!",
      ta: "நீங்கள் அனைத்து பூக்களையும் பொருத்திவிட்டீர்கள்! 🌸 உண்மையான பூங்கொத்து உங்களுக்காக காத்திருக்கிறது!"
    }
  },
  {
    key: "fruits",
    emoji: "🍎",
    label: { en: "Fruits", ta: "பழங்கள்" },
    items: [
      { emoji: "🍎", name: { en: "Apple", ta: "ஆப்பிள்" } },
      { emoji: "🍇", name: { en: "Grapes", ta: "திராட்சை" } },
      { emoji: "🍓", name: { en: "Strawberry", ta: "ஸ்ட்ராபெரி" } }
    ],
    gift: {
      en: "You matched all the Fruits! 🍓 A basket of fresh fruits is on its way!",
      ta: "நீங்கள் அனைத்து பழங்களையும் பொருத்திவிட்டீர்கள்! 🍓 புதிய பழக் கூடை உங்களுக்காக காத்திருக்கிறது!"
    }
  },
  {
    key: "chocolates",
    emoji: "🍫",
    label: { en: "Chocolates", ta: "சாக்லேட்" },
    items: [
      { emoji: "🍫", name: { en: "Chocolate Bar", ta: "சாக்லேட் பார்" } },
      { emoji: "🍪", name: { en: "Cookie", ta: "குக்கீ" } },
      { emoji: "🧁", name: { en: "Cupcake", ta: "கப்கேக்" } }
    ],
    gift: {
      en: "You matched all the Chocolates! 🍫 Something sweet is waiting for you!",
      ta: "நீங்கள் அனைத்து சாக்லேட்களையும் பொருத்திவிட்டீர்கள்! 🍫 இனிப்பான ஒன்று உங்களுக்காக காத்திருக்கிறது!"
    }
  },
  {
    key: "vegetables",
    emoji: "🥦",
    label: { en: "Vegetables", ta: "காய்கறிகள்" },
    items: [
      { emoji: "🥕", name: { en: "Carrot", ta: "கேரட்" } },
      { emoji: "🥦", name: { en: "Broccoli", ta: "ப்ரோக்கோலி" } },
      { emoji: "🌽", name: { en: "Corn", ta: "சோளம்" } }
    ],
    gift: {
      en: "You matched all the Vegetables! 🥦 Fresh veggies are coming your way too!",
      ta: "நீங்கள் அனைத்து காய்கறிகளையும் பொருத்திவிட்டீர்கள்! 🥦 புதிய காய்கறிகளும் உங்களுக்காக காத்திருக்கின்றன!"
    }
  }
];

const finalMessage = {
  en: "You matched EVERYTHING, Mom! 🎉 All 4 gifts — flowers, fruits, chocolates & veggies — are yours!",
  ta: "நீங்கள் எல்லாவற்றையும் பொருத்திவிட்டீர்கள் அம்மா! 🎉 நான்கு பரிசுகளும் — பூக்கள், பழங்கள், சாக்லேட் மற்றும் காய்கறிகள் — உங்களுடையதே!"
};

exports.getBaseData = () => baseData;

exports.validateUser = (name) => {
  return name && name.toLowerCase().trim() === "princess";
};

exports.getLetters = () => letters;

exports.getMemories = () => memories;

exports.getQuiz = () => quiz;

exports.getWishes = () => wishes;

exports.getPlaylist = () => playlist;

exports.getBirthdayConfig = () => birthdayConfig;

exports.getPrizeCategories = () => prizeCategories;

exports.getFinalMessage = () => finalMessage;
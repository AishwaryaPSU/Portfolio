import objectDetection from "../assets/object_detection_logo.png";
import twitterLogo from "../assets/twitter-icon.png";
import weather from "../assets/weather.png";
import lostNfound from "../assets/lost-n-found.jpg";

const PROJECTS = [
  {
    id: 1,
    title: "Object Recogniser",
    description: "Android application",
    link: "https://github.com/AishwaryaPSU/ImageRecognizerClient",
    image: objectDetection
  },
  {
    id: 2,
    title: 'Lost "n" Found',
    description: "Android application",
    link: "https://github.com/AishwaryaPSU/LoFo",
    image: lostNfound
  },
  {
    id: 3,
    title: "Weather Finder",
    description:
      "A React App that I built, involving JS. First react app built to introduce self to React and front-end in general.",
    link: "https://github.com/AishwaryaPSU/theweatherfinderapp",
    image: weather
  },
  {
    id: 4,
    title: "Tweedle",
    description:
      "TWEEDLE: Stream tweets in realtime based on plain text to kafka.Stream the tweets from kafka to realtime sentiment analysis engine using Apache Storm Framework.",
    link: "https://github.com/AishwaryaPSU/Tweedle",
    image: twitterLogo
  }
];

export default PROJECTS;

import captions from "./captions.json";

const maxLength = captions.length;

const generateCaption = () => {
  const randomIndex = Math.floor(Math.random() * maxLength);
  return captions[randomIndex];
};

export default generateCaption;

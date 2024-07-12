const calculateDuration = (text: string, speed: number, basedOn = "words") => {
  const words = text.split(" ").length;
  const letters = text.replace(/\s+/g, "").length; // Remove spaces and count letters

  const normalWPM = 150;
  const adjustedWPM = normalWPM * speed;
  const adjustedLPM = adjustedWPM * 5; // Assuming average word length is 5 letters

  const secondsPerWord = 60 / adjustedWPM;
  const secondsPerLetter = 60 / adjustedLPM;

  if (basedOn === "words") {
    return Math.floor(words * secondsPerWord);
  } else if (basedOn === "letters") {
    return letters * secondsPerLetter;
  }

  return 0;
};


export default calculateDuration;
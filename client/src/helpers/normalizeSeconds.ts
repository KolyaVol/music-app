export const normalizeSeconds = (seconds: number): string => {
  if (seconds) {
    const minutes = Math.floor(seconds / 60);
    const restSec = seconds - minutes * 60;
    return `${minutes > 10 ? minutes : "0" + minutes}:${restSec}`;
  } else return "00:00";
};

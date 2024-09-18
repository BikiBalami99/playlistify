//Converts time in ms to "x min x seconds" format
export const formatDuration = (ms: number) =>
  `${Math.floor(ms / 60000)} min ${Math.floor((ms % 60000) / 1000)} seconds`;

export const timeAgo = (isoDateString: string) => {
  const date = new Date(isoDateString);
  const now = new Date();
  const diff = now.getTime() - date.getTime();
  const min = 60 * 1000;
  const hour = min * 60;
  const day = hour * 24;

  if (diff < min) {
    return Math.round(diff / 1000) + "초 전";
  } else if (diff < hour) {
    return Math.round(diff / min) + "분 전";
  } else if (diff < day) {
    return Math.round(diff / hour) + "시간 전";
  } else {
    return Math.round(diff / day) + "일 전";
  }
};

export const formatDate = (isoDateString: string) => {
  const date = new Date(isoDateString);
  return `${date.getFullYear()}년 ${
    date.getMonth() + 1
  }월 ${date.getDate()}일 ${date.getHours()}시 ${date.getMinutes()}분`;
};

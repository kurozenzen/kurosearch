/**
 * @param {number} amount
 * @param {string} singular
 */
function getAgoString(amount, singular) {
  const fixedAmount = amount.toFixed();
  return `${fixedAmount} ${singular}${fixedAmount === "1" ? "" : "s"} ago`;
}

/**
 * @param {string} createdAt
 */
export function formatCreatedAt(createdAt) {
  const then = new Date(createdAt);
  const now = new Date();

  const yearsAgo = now.getFullYear() - then.getFullYear();
  if (yearsAgo) {
    return getAgoString(yearsAgo, "year");
  }

  const monthsAgo = now.getMonth() - then.getMonth();
  if (monthsAgo) {
    return getAgoString(monthsAgo, "month");
  }

  const minutesAgo = (now.getTime() - then.getTime()) / 60000;
  if (minutesAgo === 0) {
    return "just now";
  }

  if (minutesAgo < 60) {
    return getAgoString(minutesAgo, "minute");
  }

  const hoursAgo = minutesAgo / 60;
  if (hoursAgo < 24) {
    return getAgoString(hoursAgo, "hour");
  }

  const daysAgo = hoursAgo / 24;
  if (daysAgo < 7) {
    return getAgoString(daysAgo, "day");
  }

  const weeksAgo = daysAgo / 7;
  if (weeksAgo < 5) {
    return getAgoString(weeksAgo, "week");
  }

  return "rip";
}

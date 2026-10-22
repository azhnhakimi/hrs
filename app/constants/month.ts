export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const getCurrentMonth = () => {
  return new Date().toLocaleString("en-US", {
    month: "long",
  });
};

export const getCurrentYear = () => {
  return new Date().getFullYear();
};

export const getLastFiveYears = () => {
  const currentYear = getCurrentYear();

  return Array.from({ length: 6 }, (_, i) => currentYear - i);
};

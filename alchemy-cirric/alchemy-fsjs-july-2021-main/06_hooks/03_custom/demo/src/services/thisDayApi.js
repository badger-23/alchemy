export const fetchEvents = async (month, day) => {
  const res = await fetch(
    `https://history.muffinlabs.com/date/${month}/${day}`
  );
  const { data } = await res.json();

  return data.Events;
};

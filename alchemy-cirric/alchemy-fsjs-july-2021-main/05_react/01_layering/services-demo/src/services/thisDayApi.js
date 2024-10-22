export const fetchEvents = async () => {
  const res = await fetch('http://history.muffinlabs.com/date');
  const json = await res.json();

  return json.data.Events;
};

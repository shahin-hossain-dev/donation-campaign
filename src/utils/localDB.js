const getDonateFromDB = () => {
  const storedDonate = localStorage.getItem("donate");
  if (storedDonate) {
    return JSON.parse(storedDonate);
  }
  return [];
};

const setDonateToDB = (id) => {
  const storedDonate = getDonateFromDB();
  const exist = storedDonate.find((storedId) => storedId === id);

  if (!exist) {
    storedDonate.push(id);
    localStorage.setItem("donate", JSON.stringify(storedDonate));
  }
};

export { getDonateFromDB, setDonateToDB };

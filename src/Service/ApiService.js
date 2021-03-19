export const generateRandomMovie = () => {
  return {
    title: "Die Hard",
    imageURL:
      "https://upload.wikimedia.org/wikipedia/en/4/4c/Die_Hard_With_A_Vengance.jpg",
  };
};

export const addToYesList = (filmTitle, yesList) => {
  //TODO - This is where I would call the database and add to the yes list for this user
  yesList.push(filmTitle);
  return yesList;
};

export const addToNoList = (filmTitle, noList) => {
  //TODO - This is where I would call the database and add to the no list for this user
  noList.push(filmTitle);
  return noList;
};

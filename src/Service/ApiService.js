export const generateRandomMovie = () => {
  return [
    {
      title: "Die Hard",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/7/7e/Die_hard.jpg",
    },
    {
      title: "Die Hard 2",
      imageURL: "https://upload.wikimedia.org/wikipedia/en/2/2c/Die_Hard_2.jpg",
    },
    {
      title: "Die Hard 3",
      imageURL:
        "https://upload.wikimedia.org/wikipedia/en/4/4c/Die_Hard_With_A_Vengance.jpg",
    },
  ];
};

const addList = (list, filmTitle) => {
  if (!list.includes(filmTitle)) {
    list.push(filmTitle);
  }
  return list;
};

const removeList = (list, filmTitle) => {
  if (list.includes(filmTitle)) {
    list = list.filter((title) => title !== filmTitle);
  }
  return list;
};
export const addToList = (filmTitle, yesNoLists, listToAdd) => {
  //TODO - This is where I would call the database and add to the no list for this user
  let yesList = yesNoLists[0];
  let noList = yesNoLists[1];
  if (listToAdd === "Yes") {
    yesList = addList(yesList, filmTitle);
    noList = removeList(noList, filmTitle);
  } else {
    noList = addList(noList, filmTitle);
    yesList = removeList(yesList, filmTitle);
  }
  return [yesList, noList];
};

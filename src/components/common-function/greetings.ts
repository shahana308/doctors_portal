const greetings = () => {
  var greetingsData = [
    [18, "Good Evening"],
    [12, "Good Afternoon"],
    [5, "Good Morning"],
    [0, "Whoa, Early bird"],
  ];

  const currentHours: Number = new Date().getHours();
  for (var i = 0; i < greetingsData.length; i++) {
    if (currentHours >= greetingsData[i][0]) {
      return greetingsData[i][1];
    }
  }
};

export { greetings };

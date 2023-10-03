// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
  }
  
  const mondayWork = function(activity = "go to the office") {
    return `This Monday, I will ${activity}.`;
  };
  
  function wrapAdjective(emphasis = "*") {
    return function(adjective) {
      return `You are ${emphasis}${adjective}${emphasis}!`;
    };
  }
  
  // Export the functions if needed
  module.exports = {
    saturdayFun,
    mondayWork,
    wrapAdjective,
  };
  

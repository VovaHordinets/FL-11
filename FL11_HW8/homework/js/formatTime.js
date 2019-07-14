let formatTime = timeMinutes => {
    let days = Math.floor(timeMinutes/1440);
    let hours = Math.floor(timeMinutes/60)%24;
    let minutes = timeMinutes%60;
    return(`${days} day(s) ${hours} hour(s) ${minutes} minute(s)`);
  }
  formatTime(3601);
  
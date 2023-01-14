const stringifyDate = (asteroidInfo) => {
  if (asteroidInfo) {
    let dateArr = asteroidInfo.close_approach_data[0].close_approach_date_full.split(' ')
    dateArr = [...dateArr[0].split('-'), dateArr[1]]
    // swap
    let strDate = [[dateArr[2], dateArr[1], dateArr[0]].join(' '), dateArr[3]].join(', ')
    return strDate;
  }
}

export default stringifyDate;
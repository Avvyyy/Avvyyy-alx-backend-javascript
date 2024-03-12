function cleanSet(set, startString) {
  if (!startString || startString.length === 0) return '';

  let result = '';

  for (const item of set) {
    if (item && item.startsWith(startString)) {
      // Append the substring after startString and a hyphen if result is not empty
      result += `${result ? '-' : ''}${item.slice(startString.length)}`;
    }
  }

  return result;
}

export default cleanSet;


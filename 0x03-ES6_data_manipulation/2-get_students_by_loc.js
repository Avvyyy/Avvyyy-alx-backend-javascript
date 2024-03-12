export default function getStudentsByLocation(array, city) {
  return (Array.isArray(array) ? array.filter(arr => city === arr.location) : []);
}

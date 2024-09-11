import { Seq } from 'immutable';

export default function printBestStudents(object) {
  const capFirstLetter = (string) =>
    string.charAt(0).toUpperCase() + string.slice(1);

  const filtered = Seq(object)
    .filter((student) => student.score > 70)
    .map((student) => ({
      ...student,
      firstName: capFirstLetter(student.firstName),
      lastName: capFirstLetter(student.lastName),
    }));

  console.log(filtered.toJS());
}

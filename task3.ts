import { task1 } from './task1';
import { capitalizeFirstLetter } from './task4';

export const task3 = async () => {
  return task1().then(topics => {
    let year: string;
    let subject: string;
    topics.map((topic) => {
      topic.units.map((unit) => {
        unit.lessons.map((lesson) => {
          const newYear = lesson.years[0].name;
          if (year !== newYear) {
            console.log('Year', newYear);
            year = newYear;
          }
          const newSub = capitalizeFirstLetter(lesson.subjects[0].name);
          if (subject !== newSub) {
            console.log('  ', capitalizeFirstLetter(lesson.subjects[0].name));
            subject = capitalizeFirstLetter(lesson.subjects[0].name);
          }
          console.log('    ', lesson.name);
        });
      });
    });
  })
}
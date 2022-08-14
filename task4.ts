import { task1 } from './task1';

export const task4 = async () => {
  return task1().then(topics => {
    const fields = ['Year', 'Subject', 'Lesson'];
    const data: string[] = [];
    topics.map((topic) => {
      topic.units.map((unit) => {
        unit.lessons.map((lesson) => {
          data.push([`Year ${lesson.years[0].name}`, capitalizeFirstLetter(lesson.subjects[0].name), lesson.name].join(','));
        });
      });
    });
    data.unshift(fields.join(','));
    return data;
  })
}

export const capitalizeFirstLetter = (string: string): string => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
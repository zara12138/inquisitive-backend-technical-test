export type Topic = {
  name: string,
  units: Unit[]
};

type Unit = {
  name: string,
  lessons: Lesson[]
};

type Lesson = {
  id: number,
  name: string,
  subjects: Subject[],
  years: Year[]
};

type Subject = {
  id: number,
  name: string
};

type Year = {
  id: number,
  name: string
};

import { task1 } from './task1';
import { task3 } from './task3';
import { task4 } from './task4';
import { task5 } from './task5';

const hello = async (): Promise<void> => {
  console.log('Hello World');

  console.log(`----------------------This is task 1-----------------------`);
  const result1 = await task1();
  console.log(result1)

  console.log(`----------------------This is task 3-----------------------`);
  await task3();

  console.log(`----------------------This is task 4-----------------------`);
  const result4 = await task4();
  console.log(result4);

  console.log(`----------------------This is task 5-----------------------`);
  await task5();

}
hello();
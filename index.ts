import { task1 } from './task1';

const hello = async (): Promise<void> => {
  console.log('Hello World');
  await task1();

}
hello();
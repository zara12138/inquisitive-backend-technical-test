import * as dotenv from 'dotenv'

export const task5 = async (): Promise<void> => {
  dotenv.config();
  console.log(`AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID}`);
  console.log(`AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY}`);
}
import * as dotenv from 'dotenv'
import AWS from 'aws-sdk';
import { PutObjectRequest } from 'aws-sdk/clients/s3';
import { task1 } from './task1';

export const task5 = async (): Promise<void> => {
  dotenv.config();
  console.log(`AWS_ACCESS_KEY_ID=${process.env.AWS_ACCESS_KEY_ID}`);
  console.log(`AWS_SECRET_ACCESS_KEY=${process.env.AWS_SECRET_ACCESS_KEY}`);

  task1().then(data => {
    let csv = data.join('\r\n');

    const s3 = new AWS.S3({
      accessKeyId: process.env.AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY
    });
    const params: PutObjectRequest = {
      Bucket: 'inquisitive-backend-developer-tests',
      Key: 'zara/year_subject_lesson.csv',
      Body: csv
    };
    s3.putObject(params, (error: any, data: any) => {
      if (error) {
        console.error(error, error.stack);
        return;
      }
      console.log(data);
      console.log('File uploaded successfully');
    })
  })
}
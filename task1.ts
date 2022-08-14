import axios from 'axios';
import { Topic } from './task2';

export const task1 = async (): Promise<Topic[]> => {
  const body = {
    "operationName": "ContentBrowser",
    "query": "query ContentBrowser($input: ContentBrowserInput!) { contentBrowser(input: $input) {  topics { name  units { name  lessons { id name   subjects { id name } years { id name } }  } } }}",
    "variables": {
      "input": {
        "years": ["1", "2", "3", "4"],
        "subjects": ["history", "science-and-technology", "english", "maths"],
        "curriculums": [],
        "includingDraft": false,
        "includingComingSoon": false,
        "includingFuture": false,
        "includingEmptyTopic": false,
        "initialTopics": 10,
        "topicIds": []
      }
    }
  };
  return axios
    .post('https://api2.inquisitive.com/latest/graphql', body)
    .then(({ data }) => {
      return data.data.contentBrowser.topics;
    })
    .catch(err => {
      console.error(`Failed to call API: ${err.response.status}, ${err.response.statusText}, ${err.response.data}`);
    });
}

import axios from 'axios';
import { youtubeKey } from '../keys';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params : {
    part: 'snippet',
    maxResults: 5,
    key: youtubeKey
  }
})
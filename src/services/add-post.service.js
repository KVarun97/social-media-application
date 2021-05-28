import axios from 'axios';
import { URL } from '../constants/url';

export const addPost = async (postDetails) => {
  const posts = await axios.post(URL,postDetails);
  return posts;
}
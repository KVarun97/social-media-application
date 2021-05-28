import axios from 'axios';
import { URL } from '../constants/url';
export const deletePost = async (postId) => {
  const posts = await axios.delete(URL + `/${postId}`);
  return posts;
}
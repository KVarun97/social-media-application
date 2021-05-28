import axios from "axios";
import { URL } from "../constants/url";
export const getPosts = async () => {
  const posts = await axios.get(URL);
  return posts.data;
};

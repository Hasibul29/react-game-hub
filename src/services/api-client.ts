import axios from "axios";

export default axios.create({
  baseURL: "https://api.rawg.io/api",
  params: {
    key: "e0cc9120cf1e412681c080a065ca548b",
  },
});

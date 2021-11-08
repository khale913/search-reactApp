import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID HX8rfS-T3USzdE3dSJ1erUnijUR6Mt86760sSIvX5mw",
  },
});

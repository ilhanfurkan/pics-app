import axios from "axios";

const searchImages = async (term) => {
    const response = await axios.get('https://api.unsplash.com/search/photos',{
        headers: {
            Authorization: "Client-ID 8kH_O0jfD03SeQy9gyzfSrdYc5YgkZqYtOvOtwTttCs",
        },
        params: {
            query: term,
        }
    });
  return response.data.results;
};

export default searchImages;
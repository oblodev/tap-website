import axios from "axios";

export default async (req, res) => {
  try {
    const { data } = await axios.get(
      "https://www.googleapis.com/youtube/v3/search",
      {
        params: {
          key: process.env.API_KEY,
          channelId: req.query.channelId,
          part: "snippet",
          maxResults: 10,
        },
      }
    );
    res.status(200).json(data);
  } catch (err) {
    res.status(err.response.status).json(err.response.data);
  }
};

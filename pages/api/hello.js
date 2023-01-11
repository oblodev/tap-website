// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import axios from "axios";

export default async function handler(req, res) {
  const data = await fetch(
    `https://graph.facebook.com/101502198272121/feed?fields=id,message,full_picture,created_time,permalink_url,attachments{media}&limit=6&access_token=${process.env.FACEBOOK_ACCESS_TOKEN}`
  ).then((response) => response.json());

  res.json(data); // Send the response
}

import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const apikey = process.env.YOUTUBE_API_KEY;

  try {
    const categoryResponse = await fetch(
      `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${apikey}`,
    );

    if (!categoryResponse.ok) {
      return res
        .status(500)
        .json({ error: `Failed to fetch categories from Youtube API` });
    }

    const categoryData = await categoryResponse.json();
    res.status(200).json(categoryData); // send categories back to the client
  } catch (error: unknown) {
    console.error(error);
    res.status(500).json({ error: `Failed to fetch categories` });
  }
}

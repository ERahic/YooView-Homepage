import React from "react";
import ClientComponent from "./client"; // Import client-side component

// Function that will fetch data from the YouTube API
async function fetchYoutubeData() {
  const apiKey = process.env.YOUTUBE_API_KEY;
  // Fetch videos (not working at the moment)
  const videoResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&key=${apiKey}`,
  );
  // Fetch categories
  const categoryResponse = await fetch(
    `https://www.googleapis.com/youtube/v3/videoCategories?part=snippet&regionCode=US&key=${apiKey}`,
  );

  // Give error in console to indicate that fetching data failed
  if (!videoResponse.ok || !categoryResponse.ok) {
    throw new Error(`Failed to fetch Youtube Data`);
  }

  // Transfer the data to variables and set the property of videos and categories as the items of the data from the json
  const videoData = await videoResponse.json();
  const categoryData = await categoryResponse.json();

  console.log(videoData);
  return { videos: videoData.items, categories: categoryData.items };
}

const ServerComponent = async () => {
  const { categories } = await fetchYoutubeData();

  return (
    <div>
      <h1>Popular YooView Videos!</h1>
      {/* will pass the fetched videos to the client component as props */}
      <ClientComponent categories={categories} />
    </div>
  );
};

export default ServerComponent;

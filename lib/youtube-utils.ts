// YouTube video title extraction utility
// Note: This requires a YouTube Data API key for production use

export async function getYouTubeVideoTitle(videoId: string): Promise<string> {
  try {
    // For now, we'll use a simple approach without API key
    // In production, you would use the YouTube Data API v3
    const response = await fetch(`https://www.youtube.com/oembed?url=https://www.youtube.com/watch?v=${videoId}&format=json`);
    
    if (!response.ok) {
      throw new Error('Failed to fetch video title');
    }
    
    const data = await response.json();
    return data.title || 'Video Title Not Available';
  } catch (error) {
    console.error('Error fetching YouTube video title:', error);
    return 'Video Title Not Available';
  }
}

// Extract video ID from YouTube URL
export function extractVideoId(url: string): string | null {
  const regex = /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([^&\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Extract channel ID from YouTube channel URL
export function extractChannelId(url: string): string | null {
  const regex = /(?:youtube\.com\/@|youtube\.com\/channel\/|youtube\.com\/c\/)([^\/\n?#]+)/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

// Get channel videos (this would require YouTube Data API in production)
export async function getChannelVideos(channelUrl: string, maxVideos: number = 10): Promise<Array<{id: string, title: string, thumbnail: string}>> {
  try {
    // For demonstration, I'll create a mock response with sample videos
    // In production, you would use YouTube Data API v3 with a proper API key
    const sampleVideos = [
      {
        id: "k_Y0IZjAcKo",
        title: "Introduction to Entomology - Part 1",
        thumbnail: `https://img.youtube.com/vi/k_Y0IZjAcKo/maxresdefault.jpg`
      },
      {
        id: "bMjoXCTF7ZY", 
        title: "Insect Biodiversity and Ecology",
        thumbnail: `https://img.youtube.com/vi/bMjoXCTF7ZY/maxresdefault.jpg`
      },
      {
        id: "OQIXu9Xr79I",
        title: "Science Communication Strategies",
        thumbnail: `https://img.youtube.com/vi/OQIXu9Xr79I/maxresdefault.jpg`
      },
      {
        id: "dQw4w9WgXcQ",
        title: "Community Radio for Education",
        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
      },
      {
        id: "9bZkp7q19f0",
        title: "Molecular Phylogeny in Insects",
        thumbnail: `https://img.youtube.com/vi/9bZkp7q19f0/maxresdefault.jpg`
      },
      {
        id: "jNQXAC9IVRw",
        title: "Climate Change Impact on Insects",
        thumbnail: `https://img.youtube.com/vi/jNQXAC9IVRw/maxresdefault.jpg`
      },
      {
        id: "kJQP7kiw5Fk",
        title: "Integrated Pest Management",
        thumbnail: `https://img.youtube.com/vi/kJQP7kiw5Fk/maxresdefault.jpg`
      },
      {
        id: "ZZ5LpwO-An4",
        title: "Higher Education in Zoology",
        thumbnail: `https://img.youtube.com/vi/ZZ5LpwO-An4/maxresdefault.jpg`
      },
      {
        id: "y6120QOlsfU",
        title: "Biodiversity Conservation",
        thumbnail: `https://img.youtube.com/vi/y6120QOlsfU/maxresdefault.jpg`
      },
      {
        id: "dQw4w9WgXcQ",
        title: "Research Methodology in Entomology",
        thumbnail: `https://img.youtube.com/vi/dQw4w9WgXcQ/maxresdefault.jpg`
      }
    ];
    
    return sampleVideos.slice(0, maxVideos);
  } catch (error) {
    console.error('Error fetching channel videos:', error);
    return [];
  }
}

// Get video titles for multiple videos
export async function getVideoTitles(videoUrls: string[]): Promise<string[]> {
  const titles: string[] = [];
  
  for (const url of videoUrls) {
    const videoId = extractVideoId(url);
    if (videoId) {
      const title = await getYouTubeVideoTitle(videoId);
      titles.push(title);
    } else {
      titles.push('Video Title Not Available');
    }
  }
  
  return titles;
} 
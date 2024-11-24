export const fetchNews = async () => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_FETCH_NEWS);
      if (!response.ok) {
        throw new Error("Failed to fetch news data");
      }
      const data = await response.json();
      return data.feed || data;
    } catch (error) {
      throw new Error(error.message);
    }
  };
  
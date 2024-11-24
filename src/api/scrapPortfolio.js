
export const scrapPortfolio = async (formData, setLoading, setPortfolioData) => {
    setLoading(true); 
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SCRAP_PORTFOLIO, {
        method: "POST",
        body: formData,
      });
      const rawData = await response.json(); 
      const parsedData = parseRawData(rawData);
      setPortfolioData(parsedData);
  
    } catch (error) {
      console.error("Error scrapping photo:", error);
      alert("An error occurred while scrapping photo");
    } finally {
      setLoading(false); 
    }
  };

  export const savePortfolio = async (formData) => {
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_SAVE_PORTFOLIO, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
  
      if (response.ok) {
        const data = await response.json();
        return { success: true, data };
      } else {
        console.error("Failed to save portfolio:", response.statusText);
        return { success: false, message: response.statusText };
      }
    } catch (error) {
      console.error("Error during API call:", error);
      return { success: false, message: error.message };
    }
  };  



  const parseRawData = (rawData) => {
    const portfolio = [];
    for (let i = 0; i < rawData.length; i += 5) {
      const stockData = {
        stock: rawData[i + 1],
        symbol: rawData[i + 1], 
        purchase: rawData[i + 3], 
        current: rawData[i + 4], 
        quantity: rawData[i], 
        pl: rawData[i + 2], 
      };
      portfolio.push(stockData);
    }
    return portfolio;
  };
  
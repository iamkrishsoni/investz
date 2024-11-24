import { useEffect, useState } from "react";
import Card from "../GlobalNews/Card/card";
import { scrapPortfolio } from "@/api/scrapPortfolio";
import { savePortfolio } from "@/api/scrapPortfolio";
import Toaster from "@/Components/Toaster/Toaster";
export default function Portfolio() {
  const [selectedDateRange, setSelectedDateRange] = useState("Today");
  const [profileImage, setProfileImage] = useState(null);
  const [profileImageFile, setProfileImageFile] = useState(null);
  const [portfolioData, setPortfolioData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState({});
  const [showPopup, setShowPopup] = useState(false);
  const [showToaster, setShowToaster] = useState(false);
  const [toasterMessage, setToasterMessage] = useState("");
  const [toasterType, setToasterType] = useState("success");
  const [formData, setFormData] = useState({
    email: "",
    stock: "",
    purchase: "",
    current: "",
    quantity: "",
    pl: "",
  });

  const newsData = [
    {
      source: "CNBC",
      sentiment: "Positive",
      title: "Apple Reports Record Earnings for Q3",
      date: "Published: Oct 20, 2024",
      description:
        "Apple Inc. announced record-breaking earnings for the third quarter, driven by strong sales across its product lineup,",
      polarity: 0.2,
      subjectivity: 0.47,
    },
    {
      source: "Reuters",
      sentiment: "Negative",
      title: "Microsoft Reports Record Revenue in Cloud Segment",
      date: "Published: Oct 28, 2024",
      description:
        "Microsoft's stock surged after the company reported record revenue in its cloud division for the third quarter, driven by increased demand for...",
      polarity: 0.32,
      subjectivity: 0.87,
    },
    {
      source: "Wall Street Journal",
      sentiment: "Neutral",
      title: "Tesla's Q3 Earnings Miss Projections Amid Suppl...",
      date: "Published: Nov 20, 2024",
      description:
        "Amazon reported impressive third-quarter results, with revenue growth in both its Prime membership program and Amazon ...",
      polarity: 0.45,
      subjectivity: 0.65,
    },
    {
      source: "Bloomberg",
      sentiment: "Moderate",
      title: "Meta's Q3 Earnings Exceed Projections as AI...",
      date: "Published: Oct 20, 2024",
      description:
        "Meta Platforms reported stronger-than-expected Q3 earnings...",
      polarity: 0.28,
      subjectivity: 0.72,
    },
    {
      source: "Forbes",
      sentiment: "Neutral",
      title: "Netflix Beats Q3 Earnings Expectations as Subscriber...",
      date: "Published: Mar 20, 2024",
      description: "Netflix exceeded market expectations in Q3...",
      polarity: 0.15,
      subjectivity: 0.55,
    },
    {
      source: "Financial Times",
      sentiment: "Positive",
      title: "Google's Parent Alphabet Sees Q3 Revenue Surge...",
      date: "Published: Jan 13, 2023",
      description: "Alphabet reported substantial revenue growth...",
      polarity: 0.4,
      subjectivity: 0.78,
    },
  ];

  useEffect(() => {
    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      console.log("Loaded user data:", parsedData);

      setUser(parsedData);
    }
  }, []);
  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setProfileImage(URL.createObjectURL(file));
      setProfileImageFile(file);
      handleSaveChanges(file);
    }
  };

  const handleSaveChanges = (file) => {
    const imageFile = file || profileImageFile;
    if (!imageFile) {
      alert("Please select an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);

    scrapPortfolio(formData, setLoading, setPortfolioData);
  };

  const handlePopupSave = async () => {
    if (
      !formData.stock ||
      !formData.purchase ||
      !formData.current ||
      !formData.quantity ||
      !formData.pl
    ) {
      setToasterMessage("FILL ALL THE DETAILS!");
      setToasterType("error");
      setShowToaster(true);
      return;
    }

    const storedUserData = localStorage.getItem("userData");
    if (storedUserData) {
      const parsedData = JSON.parse(storedUserData);
      formData["email"] = parsedData.email;
      const result = await savePortfolio(formData);

      if (result.success) {
        setToasterMessage("Portfolio saved successfully!");
        setToasterType("success");
        setShowToaster(true);
        setFormData({
          email: "",
          stock: "",
          purchase: "",
          current: "",
          quantity: "",
          pl: "",
        });
        setShowPopup(false);
      } else {
        setToasterMessage("Portfolio not saved");
        setToasterType("error");
        setShowToaster(true);
      }
    }
  };
  return (
    <div className="flex flex-row w-full mx-0">
      {showToaster && (
        <div className="fixed top-40 left-1/2 transform -translate-x-1/2 z-50">
          <Toaster message={toasterMessage} type={toasterType} />
        </div>
      )}
      <div className="w-3/4 flex flex-col">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-semibold text-black">
              Hi, {user.first_name}!
            </h1>
            <p className="text-gray-500">
              Let's look at your activities for
              <span>
                <select
                  value={selectedDateRange}
                  onChange={(e) => setSelectedDateRange(e.target.value)}
                  className="p-1 border rounded-md text-gray-700 text-sm ml-2"
                >
                  <option>Today</option>
                  <option>Last 7 Days</option>
                  <option>Last 30 Days</option>
                </select>
              </span>
            </p>
          </div>
          <div className="flex items-end gap-x-2">
            <div className="w-fit flex items-center">
              <button
                onClick={() => document.getElementById("file-upload").click()}
                className="file-upload-btn flex text-[#2F2F2F] items-center gap-x-1 shadow-lg border-[1px] border-[#707070] px-1 rounded-md text-xs"
              >
                <img src="/assets/icon/camera.png" alt="" className="w-6 h-6" />
                Upload Portfolio
              </button>
              <input
                id="file-upload"
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="mt-2 hidden"
              />
            </div>
            <div className="border-[1px] border-[#707070] rounded-md text-black py-1 px-3 shadow-lg">
              <p className="text-xs text-gray-700">Total Profit</p>
              <p className="text-2xl font-semibold">
                $12,032{" "}
                <span className="bg-[#9DFF00] rounded-xl text-xs px-1 font-normal">
                  12.4%
                </span>
              </p>
            </div>
          </div>
        </div>

        <div className="overflow-auto mt-10 bg-white shadow-sm p-4 rounded-xl border-2">
          {loading ? (
            <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
              <div className="bg-white p-6 rounded-lg shadow-lg text-center">
                <p className="text-2xl font-semibold text-black">Scraping...</p>
              </div>
            </div>
          ) : (
            <table className="min-w-full rounded-lg">
              <thead>
                <tr className="border-gray-400 border-[1px] bg-white text-black font-normal uppercase text-sm shadow-md">
                  <th className="py-1 px-6 text-left flex">
                    Stock{" "}
                    <button
                      onClick={() => setShowPopup(true)}
                      className="w-4 ml-2"
                    >
                      <img src="/assets/icon/add.png" />
                    </button>
                  </th>
                  <th className="py-1 px-6 text-left">Purchase</th>
                  <th className="py-1 px-6 text-left">Current</th>
                  <th className="py-1 px-6 text-left">Quantity</th>
                  <th className="py-1 px-6 text-left">P/L %</th>
                </tr>
              </thead>
              <tbody className="text-gray-600 text-sm">
                {portfolioData.map((item, index) => (
                  <tr
                    key={index}
                    className="border-b border-gray-200 hover:bg-gray-100"
                  >
                    <td className="py-3 px-6 text-left">{item.stock}</td>
                    <td className="py-3 px-6">{`$${item.purchase}`}</td>
                    <td className="py-3 px-6">{`$${item.current}`}</td>
                    <td className="py-3 px-6">{item.quantity}</td>
                    <td
                      className={`py-3 px-6 font-semibold ${
                        item.pl >= 0 ? "text-green-500" : "text-red-500"
                      }`}
                    >
                      {item.pl}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>

      <div className="w-1/4 flex flex-col mx-10">
        <p className="text-2xl text-black">Relevant Article</p>
        <p className="text-gray-500 mb-4">
          Read what influences your portfolio
        </p>
        <section className="grid grid-cols-1 gap-6">
          {newsData.map((news, index) => (
            <Card
              key={index}
              source={news.source}
              title={news.title}
              date={news.date}
              description={news.description}
              sentiment={news.sentiment}
              polarity={news.polarity}
              subjectivity={news.subjectivity}
            />
          ))}
        </section>
      </div>

      {showPopup && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <h2 className="text-lg font-semibold mb-4 text-black">
              Add Your Portfolio
            </h2>
            <form className="gap-4 grid grid-cols-3">
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Stock Name
                </label>
                <input
                  type="text"
                  value={formData.stock}
                  onChange={(e) =>
                    setFormData({ ...formData, stock: e.target.value })
                  }
                  className="w-full border focus:outline-none rounded-md p-2 bg-[#313131]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Purchase Price
                </label>
                <input
                  type="number"
                  value={formData.purchase}
                  onChange={(e) =>
                    setFormData({ ...formData, purchase: e.target.value })
                  }
                  className="w-full border rounded-md p-2 bg-[#313131]"
                />
              </div>
              {/* <div>
                <label className="block text-sm font-medium text-gray-700">
                  Current
                </label>
                <input
                  type="number"
                  value={formData.current}
                  onChange={(e) =>
                    setFormData({ ...formData, current: e.target.value })
                  }
                  className="w-full border rounded-md p-2 bg-[#313131]"
                />
              </div> */}
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  Quantity
                </label>
                <input
                  type="number"
                  value={formData.quantity}
                  onChange={(e) =>
                    setFormData({ ...formData, quantity: e.target.value })
                  }
                  className="w-full border rounded-md p-2 bg-[#313131]"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">
                  P/L (%)
                </label>
                <input
                  type="text"
                  value={formData.pl}
                  onChange={(e) =>
                    setFormData({ ...formData, pl: e.target.value })
                  }
                  className="w-full border rounded-md p-2 bg-[#313131]"
                />
              </div>
            </form>
            <div className="flex justify-end mt-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-red-800 bg-opacity-70 hover:bg-opacity-100 px-4 py-2 rounded-md mr-2"
              >
                Cancel
              </button>
              <button
                onClick={handlePopupSave}
                className="bg-[#102B3F] hover:bg-opacity-100 bg-opacity-80 text-white px-4 py-2 rounded-md"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

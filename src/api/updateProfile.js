
export const updateProfile = async (email, riskLevel, profileImageFile = null) => {
  if (!email) {
    throw new Error("Email is required");
  }

  const formData = new FormData();
  formData.append("email", email);

  if (profileImageFile) {
    formData.append("profile_photo", profileImageFile);
  }

  if (riskLevel) {
    formData.append("risk_level", riskLevel);
  }

  console.log("EMAIL:", email);
  console.log("IMAGE:", profileImageFile);
  console.log("RISK LEVEL:", riskLevel);
  if(!profileImageFile && !riskLevel){
    console.log("NOTHING TO BE DONE!")
    return { success: true };
  }
  else{
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_ADD_PHOTO_API, {
        method: "POST",
        body: formData,
      });
  
      if (response.ok) {
        return { success: true };
      } else {
        throw new Error("Failed to update profile");
      }
    } catch (error) {
      console.error("Error updating profile:", error);
      throw new Error("An error occurred while updating the profile");
    }
  }
 
};
  export const fetchProfile = async (email,password) => {

  
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Fetching failed");
      }
  
      const data = await response.json();
      console.log(data)
      localStorage.setItem("userData", JSON.stringify(data));
      localStorage.setItem("password", password);
      return data;
  
    } catch (err) {

      console.error("Error during fetching:", err);
      throw err;
    }
  };
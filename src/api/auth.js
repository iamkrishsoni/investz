
export const signup = async (formData, setError, setIsLoading) => {
    setIsLoading(true);
    setError(null);
  
    try {
      
      console.log("FORM",formData.firstname,formData.lastname,formData.contact,formData.email,formData.password)

      const response = await fetch(process.env.NEXT_PUBLIC_SIGNUP_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          first_name: formData.firstname,
          last_name: formData.lastname,
          contact: formData.contact,
          email: formData.email,
          password: formData.password,
        }),
        
      });
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }
  
      const data = await response.json();
      console.log("API DATA",data['message'])
      if(data['message']){
        // alert(data['message']);
       console.log(data['message'])
      }
      
      return data; 
  
    } catch (err) {
      setError(err.message);
      console.error("Error during signup:", err);
      throw err; 
    } finally {
      setIsLoading(false);
    }
  };

  export const login = async (formData, setError, setIsLoading) => {
    setIsLoading(true);
    setError(null);
  
    try {
      const response = await fetch(process.env.NEXT_PUBLIC_LOGIN_API, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.username,
          password: formData.password,
        }),
      });
  
      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.message || "Login failed");
      }
  
      const data = await response.json();
      console.log(data)
      if(data.hasOwnProperty('message')){
        console.log(data['message'])
  
      }
      else{
        localStorage.setItem("userData", JSON.stringify(data));
        localStorage.setItem("password", formData.password);
        console.log("Login successful!")
      }
      
      return data;
  
    } catch (err) {
      setError(err.message);
      console.error("Error during login:", err);
      throw err;
    } finally {
      setIsLoading(false);
    }
  };
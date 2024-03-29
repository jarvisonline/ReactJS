const apiRequest = async (url = "", optionsObj = null, errMSg = null) => {
  try {
    const response = await fetch(url, optionsObj);
    if (!response.ok) throw new Error(`Please reload the app`);
  } catch (err) {
    errMSg = err.message;
  } finally {
    return errMSg;
  }
};

export default apiRequest;

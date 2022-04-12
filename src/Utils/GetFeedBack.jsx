const getUrl = "https://toxic-feedback.herokuapp.com/api/v1/feedback/feedbacks";

const getFeedback = async () => {
  return await fetch(getUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
  });
};

export default getFeedback;

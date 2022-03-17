const postUrl =
  "https://v1.nocodeapi.com/hellocaner/google_sheets/PDhftGpbEqaEXvVe?tabId=feedback";

const postFeedback = async (name, mail, message, results) => {
  return await fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify([[name, mail, message, JSON.stringify(results)]]),
  });
};

export default postFeedback;


const postUrl =
  "https://toxic-feedback.herokuapp.com/api/v1/feedback/addFeedback";

const postFeedback = async (name, mail, message, results, date) => {
  return await fetch(postUrl, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      "name": name,
      "email": mail,
      "message": message,
      "result": JSON.stringify(results),
      "date": date
    }),
  });
};

export default postFeedback;

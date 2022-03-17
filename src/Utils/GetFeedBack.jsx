const getUrl =
  'https://v1.nocodeapi.com/hellocaner/google_sheets/PDhftGpbEqaEXvVe?tabId=feedback';

const getFeedback = async () => {
  return await fetch(getUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect : 'follow',
  });
};

export default getFeedback;
const getUrl =
  'https://v1.nocodeapi.com/canerturkmen/google_sheets/CLOCyajGocQyLlxN?tabId=feedback';

const getFeedback = async () => {
  return await fetch(getUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  });
};

export default getFeedback;
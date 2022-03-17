import * as toxicity from '@tensorflow-models/toxicity';
import '@tensorflow/tfjs';

const classify = async (text) => {
  const threshold = 0.9;
  const model = await toxicity.load(threshold);
  const predictions = await model.classify(text);
  
  return predictions;
};
export default classify;

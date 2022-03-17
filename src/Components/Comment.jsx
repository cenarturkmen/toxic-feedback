// 0: {label: 'identity_attack', results: Array(1)}
// 1: {label: 'insult', results: Array(1)}
// 2: {label: 'obscene', results: Array(1)}
// 3: {label: 'severe_toxicity', results: Array(1)}
// 4: {label: 'sexual_explicit', results: Array(1)}
// 5: {label: 'threat', results: Array(1)}
// 6: {label: 'toxicity', results: Array(1)}
import { useState } from "react";
const Comment = (props) => {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="text-s py-8 text-white text-center bg-slate-400 rounded mt-9    ">
      <div>
        <h3 className="text-m">{props.name}</h3>
        <h4 className="text-s">{props.email}</h4>
        <button className="rounded bg-slate-600 text-white border-0 p-2 m-2 hover:bg-slate-700 hover:border-0"
        onClick={() => setIsOpen(!isOpen)}>
        
          Show Message & Results
        </button>
      </div>
      {isOpen && (
                <div className="flex flex-col">
                {props.message}
                <div className="flex flex-col">
                  {props.toxicity[0].label} %
                  {100*parseFloat(props.toxicity[0].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[0].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
                <div className="flex flex-col">
                  {props.toxicity[1].label} %
                  {100*parseFloat(props.toxicity[1].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[1].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
                <div className="flex flex-col">
                  {props.toxicity[2].label} %
                  {100*parseFloat(props.toxicity[2].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[2].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
                <div className="flex flex-col">
                  {props.toxicity[3].label} %
                  {100*parseFloat(props.toxicity[3].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[3].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
                <div className="flex flex-col">
                  {props.toxicity[4].label}  %
                  {100*parseFloat(props.toxicity[4].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[4].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
                <div className="flex flex-col">
                  {props.toxicity[5].label}  %
                  {100*parseFloat(props.toxicity[5].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[5].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
                <div className="flex flex-col">
                  {props.toxicity[6].label}  %
                  {100*parseFloat(props.toxicity[6].results[0].probabilities["0"]).toFixed(
                    3
                  )}
                  {/* {parseFloat(props.toxicity[6].results[0].probabilities["1"]).toFixed(
                    3
                  )} */}
                </div>
              </div>
              )
          }

    </div>
  );
};

export default Comment;

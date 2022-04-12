import { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Alert} from "@mui/material";
import CircularProgressWithLabel from "./CircularProgressWithLabel" 



const Comment = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="text-s py-2 text-white text-center bg-slate-400 rounded mt-9">
      <div>
        <div>
          <Typography className="text-m">{props.name}</Typography>
          <Typography className="text-s">{props.email}</Typography>
          <Typography className="text-s">{props.date}</Typography>
        </div>
        <Button
          variant="contained"
          color="secondary"
          className="my-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          Show Message & Results
        </Button>
      </div>
      {isOpen && (
        <>
          <div className="flex justify-start mt-4 mx-2 pl-2 py-2 rounded">
            <Typography variant="p">{props.message}</Typography>
          </div>
          <div className="mx-2 my-4">
            {props.toxicity.map((t, index) =>
              Math.round(parseFloat(t.results[0].probabilities["0"]) * 100) <
              80 ? (
                <div className="flex justify-between my-2 bg-[#2e7d32] rounded ">
                  <Alert variant="filled" className="flex" key={index}>
                    {t.label + "   "}
                  </Alert>
                  <CircularProgressWithLabel
                    color="primary"
                    className="mt-1"
                    value={Math.round(
                      parseFloat(t.results[0].probabilities["0"]) * 100
                    )}
                  ></CircularProgressWithLabel>
                </div>
              ) : (
                <div className="flex justify-between my-2 bg-[#d32f2f] rounded">
                  <Alert
                    variant="filled"
                    className="flex"
                    severity="error"
                    key={index}
                  >
                    {t.label + "   "}
                  </Alert>
                  <CircularProgressWithLabel
                    color="primary"
                    className="mt-1"
                    value={
                      (Math.round(
                        parseFloat(t.results[0].probabilities["0"]) * 100
                      ) /
                        100) *
                      100
                    }
                  ></CircularProgressWithLabel>
                </div>
              )
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Comment;

import Event from "./Topics/Event";
import SetState from "./Topics/SetState";
import Variables from "./Topics/Variables";

function App() {
  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="col text-center">
            <span className="text-danger">-------------------------------------Variable Topic--------------------------------------</span>

            <Variables></Variables>
          </div>
        </div>

        <div className="row">
          <div className="col text-center">
            <span className="text-danger">-------------------------------------Event Topic--------------------------------------</span>

            <Event></Event>
          </div>
        </div>
        <div className="row">
          <div className="col text-center">
             <span className="text-danger">-------------------------------------Set State--------------------------------------</span>
              <SetState></SetState>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./Padding.css";
import "./responsive.css";
import Main from "./Main";

function Padding() {
  return (
    <>
      <div className="padding">
        <div className="padding__child">
          <div className="left__side">
            <div className="brand__info">
              <p className="brand__info">
                "Explore a coder's passion for photography in a captivating
                gallery. Witness the seamless blend of code and creativity,
                where each image narrates a unique story, showcasing the
                artistry behind pixels."
              </p>
            </div>
          </div>
          <div className="right__side">
            <div className="sort__type">
              <h3>Collections</h3>
              <div className="sort__btns">
                <span className="span__bg">Nature</span>
                <span className="span__bg">Night</span>
                <span className="span__bg">Temple</span>
                <span className="span__bg">Boy</span>
                <span className="span__bg">Children</span>
                <span className="span__bg">Flower</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Main />
    </>
  );
}

export default Padding;

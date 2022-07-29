import "./style.scss";
import icon from "../../assets/icons/icon-star.svg";
import { useEffect } from "react";

let receiveFeedback = false;

function ChangeColor(event) {
    event.target.classList.add("Select");
}

function Select() {
    let option = document.querySelectorAll(".note__option");

    option.forEach((element) => {
        element.addEventListener("click", (e) => {
            option.forEach((element) => {
                element.classList.remove("Select");
            });
            e.target.classList.add("Select");
            receiveFeedback = true;
        });
    });
}

export default function Container(props) {
    useEffect(() => {
        Select();
    }, []);

    return (
        <div className="Container">
            <img className="Container__icon" src={icon} alt="icon star" />
            <h1 className="Container__title">How did we do?</h1>
            <p className="Container__info">
                Please let us know how we did with your support request. All
                feedback is appreciated to help us improve our offering!
            </p>

            <div className="Container__note">
                <span className="note__option">1</span>
                <span className="note__option">2</span>
                <span className="note__option">3</span>
                <span className="note__option">4</span>
                <span className="note__option">5</span>
            </div>

            <button
                onClick={() => {
                    if (receiveFeedback) {
                        props.onClick();
                    }
                }}
                className="Container__submit"
            >
                Submit
            </button>
        </div>
    );
}

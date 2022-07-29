import "./style.scss";
import Icon from "../../assets/icons/illustration-thank-you.svg";

export default function Thanks() {
    return (
        <div className="Thanks">
            <img className="Thanks__icon" src={Icon} alt="" />
            <h1 className="Thanks__title">Thank you</h1>
            <p className="Thanks__message">
                We appreciate you taking the time to give a rating. If you ever
                more suport, dont't hesitate to get in touch!
            </p>
        </div>
    );
}

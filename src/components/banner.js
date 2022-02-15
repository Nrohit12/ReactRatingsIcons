import React from "react";
import Modal from "@material-ui/core/Modal";

const samosaStates = [
  "Seems like you have not eaten world's best Samosa in Bihar, you need to try it once.",
  "Didn't loved the taste, maybe the potatoes were not fried properly.",
  "Why are you stuck in between? Come have the world's best Samosa here.",
  "Oops! Missed that perfect taste. Don't worry we will have the best Samosas together.",
  "Love Samosa🥳🥳!! Samosa party time.",
];
const jalebiStates = [
  "Don't like sweets or it seems like you have not eaten world's best Jalebi in Bihar, we can work on that.",
  "Didn't loved the taste, maybe the syrup was not perfect enough or the Jalebis were not crispy.",
  "Why are you stuck in between? We can have that cruncy juicy Jalebis to make your perfect choice.",
  "Oops! Missed that perfect taste. Don't worry we will have the best jalebis together.",
  "Love jalebi🥳🥳!! Jalebi party time.",
];

const currentStatus = [
  "https://media1.giphy.com/media/puPeyz4SOYEKY/giphy.gif",
  "https://media3.giphy.com/media/gGn9eq3prU6m4/giphy.gif",
  "https://i.gifer.com/73Wv.gif",
  "https://reactiongifs.me/wp-content/uploads/2018/11/Excited-Minions-Despicable-Me.gif",
  "http://24.media.tumblr.com/cc7a964deff1fe5899c5b57a92a1b93f/tumblr_mqg0ke69nq1sp0d8do1_500.gif",
];

function Banner(props) {
  const { rating, modalClose, handleModalCallback } = props;
  const total = rating.triangular + rating.circular;

  const handleClose = () => {
    handleModalCallback(false);
  };

  React.useEffect(() => {
    setTimeout(() => {
      handleClose() 
      }, 5000);
  }, [total]);

  

  return (
    <Modal open={modalClose} onClose={handleClose}>
      <div className="banner">
        <img
          src={currentStatus[Math.round(total / 2) - 1]}
          alt="Happy Gif"
          className="happy-gif"
        />
        <p>{samosaStates[rating.circular - 1 < 0 ? 0 : rating.circular - 1]}</p>
        <p>{jalebiStates[rating.triangular - 1]}</p>
      </div>
    </Modal>
  );
}

export default Banner;

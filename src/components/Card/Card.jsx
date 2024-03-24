import { useNavigate } from "react-router-dom";

const Card = ({ card }) => {
  const navigate = useNavigate();
  const {
    id,
    category,
    title,
    text_color,
    text_button_bg,
    image,
    card_bg,
    category_bg,
  } = card;
  const handleDonationDetails = () => {
    navigate(`/donation-details/${id}`);
  };
  return (
    <div
      onClick={handleDonationDetails}
      style={{ backgroundColor: card_bg }}
      className={` card shadow-xl `}
    >
      <figure>
        <img src={image} alt="Card" />
      </figure>
      <div className="flex-grow">
        <div className="p-4 flex flex-col h-full  items-start">
          <div className="flex-grow">
            <span
              className="px-2 py-1 rounded-lg inline-block "
              style={{ backgroundColor: category_bg, color: text_color }}
            >
              {category}
            </span>
          </div>
          <h2 className={`mt-3 flex-grow`} style={{ color: text_color }}>
            {title}
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Card;

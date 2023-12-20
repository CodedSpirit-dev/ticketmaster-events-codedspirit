import styles from "./EventItem.module.css";
import HeartFilled from "../../../../assets/hearth-filled.png";
import HeartUnfilled from "../../../../assets/hearth-unfilled.png";
import useLikedEvents from "../../../../hooks/useLikedEvents";

interface EventItemProps {
  info: string | undefined;
  id: string;
  name: string;
  image: string;
  onEventClick: (id: string) => void;
  evt: string; // Add the missing 'evt' prop
}

const EventItem: React.FC<EventItemProps> = ({
  info,
  id,
  name,
  image,
  onEventClick,
}) => {
  const { isEventLiked } = useLikedEvents(id);

  const handleSeeMoreClick = (evt: { stopPropagation: () => void }) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  const handleHearthClick = (evt: { stopPropagation: () => void }) => {

  }

  return (
    <div className={styles.eventItem}>

      <div className={styles.heartContainer}>
        <img src={ isEventLiked ?  HeartFilled : HeartUnfilled} className={styles.heartImage} alt="heart" onClick={handleHearthClick} />
      </div>

      <img className={styles.eventItemImage} src={image} alt={name} />
      <div className={styles.eventItemInfo}>
        <h4 className={styles.eventItemTitle}>{name}</h4>
        <p className={styles.eventItemDescription}>{info}</p>
        <button className={styles.eventItemButton} onClick={handleSeeMoreClick}>
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;

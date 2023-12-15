import styles from "./EventItem.module.css";

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
  const handleSeeMoreClick = (evt: { stopPropagation: () => void }) => {
    evt.stopPropagation();
    onEventClick(id);
  };

  return (
    <div className={styles.eventItem}>
      <img className={styles.eventItemImage} src={image} alt={name} />
      <div className={styles.eventItemInfo}>
        <h4 className={styles.eventItemTitle}>{name}</h4>
        <p className={styles.eventItemDescription}>{info}</p>
        <button className={styles.eventItemButton} onClick={handleSeeMoreClick}>
          {/*<Link to={`/events/${id}`}>
            
  </Link>*/}
          Ver mas
        </button>
      </div>
    </div>
  );
};

export default EventItem;

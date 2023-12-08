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
    <div className="eventItemContainer">
      <img src={image} alt={name} width={300} height={200} />
      <div className="eventItemContainer-info">
        <h4>{name}</h4>
        <p>{info}</p>
        <button onClick={handleSeeMoreClick}>Ver mas detalles</button>
      </div>
    </div>
  );
};

export default EventItem;

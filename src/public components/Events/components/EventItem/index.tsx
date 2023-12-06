interface EventItemProps {
    info: string | undefined;
    id: string;
    name: string;
    image: string;
    onEventClick: (id: string) => void;
    evt: string; // Add the missing 'evt' prop
}

const EventItem: React.FC<EventItemProps> = ({info, id, name, image, onEventClick}) => {
    const handleSeeMoreClick = (evt: { stopPropagation: () => void; }) => {
        evt.stopPropagation();
        onEventClick(id);
    }

    return (
        <div>
            <img src={image} alt={name} width={300} height={200}/>
            <h4>{name}</h4>
            <p>{info}</p>
            <button onClick={handleSeeMoreClick}>Ver mas detalles</button>
        </div>
    )
}

export default EventItem;
import { useState, useRef, useEffect } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../public components/Navbar";
import Events from "../../public components/Events";
import useEventsData from "../../hooks/useEventsData";
import styles from "./Home.module.css";

const Home = () => {
  const { events, loading, error, fetchEvents, page } = useEventsData(); // Obtiene data de eventos, loading y error
  const [searchTerm, setSearchTerm] = useState(""); // Estado para el término de búsqueda
  const containerRef = useRef(); // Referencia al contenedor del Navbar

  useEffect(() => {
    fetchEvents();
  }, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = ( {selected} ) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  };

  const renderEvents = () => {
    if (loading) {
      return <p>Cargando eventos</p>;
    }

    if (error) {
      return <p>Ha ocurrido un error</p>;
    }
    return (
      <div>
        <Events searchTerm={searchTerm} events={events} />
        <ReactPaginate
          className={styles.pagination}
          nextClassName={styles.next}
          previousClassName={styles.previous}
          pageClassName={styles.page}
          activeClassName={styles.active}
          disabledClassName={styles.disabled}
          breakLabel="..."
          nextLabel=">"
          onPageChange={handlePageClick}
          pageRangeDisplayed={5}
          pageCount={page.totalPages}
          previousLabel="<"
          renderOnZeroPageCount={null}
        />
      </div>
    );
  };

  return (
    <>
      <Navbar onSearch={handleNavbarSearch} ref={containerRef} />
      {renderEvents()}
    </>
  );
};
export default Home;

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import ReactPaginate from "react-paginate";
import Navbar from "../../public components/Navbar";
import Events from "../../public components/Events";
import useEventsResults from "../../state/events-results.js";
import styles from "./Home.module.css";

const Home = () => {
  const { data, loading, error, fetchEvents } = useEventsResults();
  const events = useMemo(() => data?._embedded?.events || [], [data?._embedded?.events]);
  const page = useMemo(() => data?.page || {}, [data?.page]);
  const [searchTerm, setSearchTerm] = useState("");
  const containerRef = useRef();

  const fetchMyEventsRef = useRef()

  fetchMyEventsRef.current = fetchEvents;

  useEffect(() => {
  fetchMyEventsRef.current();
}, []);

  const handleNavbarSearch = (term) => {
    setSearchTerm(term);
    fetchEvents(`&keyword=${term}`);
  };

  const handlePageClick = useCallback(({ selected }) => {
    fetchEvents(`&keyword=${searchTerm}&page=${selected}`);
  }, [fetchEvents, searchTerm]);

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

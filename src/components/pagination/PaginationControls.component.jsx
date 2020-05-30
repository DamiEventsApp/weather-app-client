import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import Button from '../button/Button.component';
import './pagination.styles.scss';

const PaginationControls = ({ prev, next, fetchData, today, search, authToken }) => {
    const handleClick = e => {
        if (e.target.id === "next") {
            fetchData(authToken, today, search, next);
            return;
        }

        fetchData(authToken, today, search, prev);
        return;
    }

    return (
        <div className="pagination-controls row">
            <div className="left">
                <Button onClick={handleClick} disabled={!prev} id="prev" className={`${prev ? "pagination-btn" : "disabled-btn"} btn prev`}><FontAwesomeIcon icon={faChevronLeft} /></Button>
            </div>
            <div className="right">
                <Button onClick={handleClick} disabled={!next} id="next" className={`${next ? "pagination-btn" : "disabled-btn"} btn next`}><FontAwesomeIcon icon={faChevronRight} /></Button>
            </div>
        </div>
    )
};

PaginationControls.defaultProps = {
    next: "",
    prev: "",
    fetchData: () => {},
    today: false,
    search: false,
    authToken: "",
}

PaginationControls.propTypes = {
    next: PropTypes.string,
    prev: PropTypes.string,
    fetchData: PropTypes.func,
    today: PropTypes.bool,
    search: PropTypes.bool,
    authToken: PropTypes.string,
}

export default PaginationControls;

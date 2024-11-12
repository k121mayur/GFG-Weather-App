import PropTypes from 'prop-types';
import { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const SearchBar = ({ onSearch }) => {
    const [city, setCity] = useState('');

    const handleSearch = () => {
        if (city) {
            onSearch(city);
        }
    };

    return (
        <Form className="d-flex  flex-row mb-3">
            <Form.Control
                type="text"
                placeholder="Enter city name"
                value={city}
                onChange={(e) => setCity(e.target.value)}
                className="mb-2 mb-sm-0 me-0 me-sm-2"
            />
            <Button variant="primary" onClick={handleSearch}>
                Search
            </Button>
        </Form>

    );
};

SearchBar.propTypes = {
    onSearch: PropTypes.func.isRequired,
};
export default SearchBar;

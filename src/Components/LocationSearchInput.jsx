import React, { useState, useEffect } from "react";
import { ErrorMessage } from "../Pages/Homepage.style";
import styled from "styled-components";

const Input = styled.input`
  width: 15rem;
  padding: 8px;
  margin-right: 0.5rem;
  margin-bottom: 1rem;
  border: 1px solid #eaeaea;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
  cursor: text;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: #aaa;
  }
`;
const List = styled.ul`
  list-style-type: none;
  padding: 0;
`;

const ListItem = styled.li`
  padding: 8px;
  margin: 3px 0;
  background-color: #f9f9f9;
  border-radius: 3px;
  box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;
const LocationSearchInput = ({ onSelectLocation }) => {
  const [searchInput, setSearchInput] = useState("");
  const [debouncedSearchInput, setDebouncedSearchInput] = useState(searchInput);
  const [searchResults, setSearchResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearchInput(searchInput);
    }, 500); // 500ms delay

    return () => clearTimeout(timer);
  }, [searchInput]);

  useEffect(() => {
    if (debouncedSearchInput.length > 3) {
      searchLocation(debouncedSearchInput);
    } else {
      setSearchResults([]);
      setErrorMessage("");
    }
  }, [debouncedSearchInput]);

  const searchLocation = async (input) => {
    const apiKey = process.env.REACT_APP_Weather_API_KEY;
    const url = `https://api.openweathermap.org/geo/1.0/direct?q=${input}&limit=5&appid=${apiKey}`;

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`Location HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.length > 0) {
        setSearchResults(data);
        setErrorMessage("");
      } else {
        setErrorMessage("Location not found. Please try again.");
        setSearchResults([]);
      }
    } catch (error) {
      console.error("Error searching location:", error);
      setErrorMessage(`Error searching location: ${error.message}`);
      setSearchResults([]);
    }
  };

  return (
    <div>
      <Input
        type="text"
        value={searchInput}
        onChange={(e) => setSearchInput(e.target.value)}
        placeholder="Search location"
      />

      {searchResults.length > 0 && (
        <List>
          {searchResults.map((result, index) => (
            <ListItem key={index} onClick={() => onSelectLocation(result)}>
              {result.name}, {(result.state && result.state + ",") || ""}{" "}
              {result.country}
            </ListItem>
          ))}
        </List>
      )}
      {errorMessage && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default LocationSearchInput;

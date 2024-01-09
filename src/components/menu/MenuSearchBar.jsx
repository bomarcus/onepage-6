import { useState } from "react";
import TextField from "@mui/material/TextField";

const MenuSearchBar = ({ onSearchChange }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
    onSearchChange(event.target.value); // Propagating the search query to the parent component
  };

  return (
    <form
      noValidate
      autoComplete="on"
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <TextField
        id="outlined-size-small"
        placeholder="Search"
        size="small"
        value={searchQuery}
        onChange={handleSearchChange}
      />
    </form>
  );
};

export default MenuSearchBar;

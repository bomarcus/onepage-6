import React, { useState, useEffect } from "react";
import Header from "./components/main/Header";
import PortfolioDisplay from "./components/main/Card";
import Menu from "./components/menu/MenuMain";
import { Grid, Container } from "@mui/material";
import data from "./data.json"; // Assuming this is the correct import path

const App = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredData, setFilteredData] = useState(data);

  useEffect(() => {
    // Filter data based on search query
    const lowercasedQuery = searchQuery.toLowerCase();
    const filtered = data.filter(
      (item) =>
        item.title.toLowerCase().includes(lowercasedQuery) ||
        item.description.toLowerCase().includes(lowercasedQuery),
    );
    setFilteredData(filtered);
  }, [searchQuery]);

  return (
    <Container
      maxWidth="lg"
      style={{ marginTop: "20px", marginBottom: "20px" }}
    >
      <Grid container direction="column" spacing={1}>
        <Grid item xs={12}>
          <Header />
        </Grid>
        <Grid item xs={12}>
          <Menu onSearchChange={setSearchQuery} />{" "}
          {/* Pass the setSearchQuery function */}
        </Grid>
        <Grid item xs={12}>
          {/* Pass filtered data to components that need it */}
          {filteredData.map((item) => (
            <PortfolioDisplay key={item.id} item={item} />
          ))}
        </Grid>
      </Grid>
    </Container>
  );
};

export default App;

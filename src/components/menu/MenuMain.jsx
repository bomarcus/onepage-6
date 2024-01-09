import { Grid } from "@mui/material";
import Categories from "./MenuCategoriesButtons"; // Correct path as necessary
import MenuTags from "./MenuTagsButtons"; // Correct path as necessary
import MenuSearchBar from "./MenuSearchBar"; // Correct path as necessary
import data from "../../data.json"; // Correct path as necessary
import MaoBox from "../Custom/MaoBox"; // Import your custom Box component

const MenuSection = ({ children }) => (
  <Grid container item xs={12} justifyContent="center" alignItems="center">
    <Grid item xs={12}>
      <MaoBox
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {children}
      </MaoBox>
    </Grid>
  </Grid>
);

const Menu = () => {
  const categories = [...new Set(data.map((item) => item.category))];
  const tags = [...new Set(data.flatMap((item) => item.tags))];

  return (
    <MaoBox
      sx={{
        p: 1,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "center",
      }}
    >
      <Grid container spacing={1} justifyContent="center">
        {/* Categories Section */}
        <MenuSection>
          {categories.map((category) => (
            <Categories
              key={category}
              category={category}
              items={data.filter((item) => item.category === category)}
            />
          ))}
        </MenuSection>

        {/* Tags Section */}
        <MenuSection>
          <MenuTags tags={tags} />
        </MenuSection>

        {/* Search Section */}
        <MenuSection>
          <MenuSearchBar />
        </MenuSection>
      </Grid>
    </MaoBox>
  );
};

export default Menu;

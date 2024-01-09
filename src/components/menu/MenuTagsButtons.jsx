import { Button } from "@mui/material";

const MenuTags = ({ tags }) => {
  return (
    <>
      {tags.map((tag, index) => (
        <Button key={index}>{tag}</Button>
      ))}
    </>
  );
};

export default MenuTags;

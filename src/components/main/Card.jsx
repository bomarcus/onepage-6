import { useState } from "react";
import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Chip,
  Grid,
  Box,
  Button,
  Collapse,
} from "@mui/material";
import data from "../../data.json";

const PortfolioCard = ({ item }) => {
  const [open, setOpen] = useState(false);

  const handleMoreClick = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={12} container justifyContent="center">
      <Card elevation={0} sx={{ outline: "none" }}>
        <CardContent>
          {item.tags && (
            <Box display="flex" alignItems="center">
              <Typography
                variant="body2"
                color="text.secondary"
                fontWeight="bold"
              >
                Tags:
              </Typography>
              {item.tags.map((tag) => (
                <Chip label={tag} key={tag} />
              ))}
            </Box>
          )}
          {item.category && (
            <Typography
              variant="body2"
              color="text.secondary"
              fontWeight="bold"
              align="left"
            >
              Category: {item.category}
            </Typography>
          )}
          <Typography
            gutterBottom
            variant="h5"
            color="text.primary"
            component="div"
            fontWeight="bold"
            align="center"
          >
            {item.title}
          </Typography>
          {item.subtitle && (
            <Typography
              variant="subtitle1"
              color="text.primary"
              align="center"
              mb={2}
            >
              {item.subtitle}
            </Typography>
          )}
          {item.imageUrl && (
            <CardMedia
              component="img"
              height="auto"
              image={item.imageUrl}
              alt={item.title}
            />
          )}
          {item.videoUrl && (
            <video
              height="auto"
              src={item.videoUrl}
              alt={item.title}
              autoPlay={item.autoplay}
              controls={item.controls}
              loop={item.loop}
              muted={item.muted}
              style={{ width: "100%" }}
            />
          )}

          <Typography variant="body2" color="text.primary" p={10}>
            {item.description}
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button onClick={handleMoreClick}>{open ? "Less" : "More"}</Button>
          </Box>
          <Collapse in={open}>
            {item.more && (
              <Typography variant="body2" color="text.primary" align="left">
                {item.more}
              </Typography>
            )}
            {item.language && (
              <Box display="flex" alignItems="center">
                <Box width={120}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                    align="left"
                  >
                    Language:
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.primary">
                  {item.language}
                </Typography>
              </Box>
            )}
            {item.production && (
              <Box display="flex" alignItems="center">
                <Box width={120}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                    align="left"
                  >
                    Production:
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.primary">
                  {item.production}
                </Typography>
              </Box>
            )}
            {item.year && (
              <Box display="flex" alignItems="center">
                <Box width={120}>
                  <Typography
                    variant="body2"
                    color="text.primary"
                    fontWeight="bold"
                    align="left"
                  >
                    Year:
                  </Typography>
                </Box>
                <Typography variant="body2" color="text.primary">
                  {item.year}
                </Typography>
              </Box>
            )}
            {item.team &&
              Object.entries(item.team).map(([role, name]) => (
                <Box display="flex" alignItems="center" key={role}>
                  <Box width={120}>
                    <Typography
                      variant="body2"
                      color="text.primary"
                      fontWeight="bold"
                      align="left"
                    >
                      {role.charAt(0).toUpperCase() + role.slice(1)}:
                    </Typography>
                  </Box>
                  <Typography variant="body2" color="text.primary">
                    {name}
                  </Typography>
                </Box>
              ))}
          </Collapse>
        </CardContent>
      </Card>
    </Grid>
  );
};

const PortfolioDisplay = () => {
  return (
    <Box>
      <Grid container spacing={2} justifyContent="center">
        {data.map((item) => (
          <PortfolioCard item={item} key={item.id} />
        ))}
      </Grid>
    </Box>
  );
};

export default PortfolioDisplay;

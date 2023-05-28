import * as React from "react";
import {Card, Typography, AspectRatio, Button} from '@mui/joy'
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

const MediaCard = ({ itemData }) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state);
  
  const isInCart = () => {
    const existingItemIndex = cart.findIndex((item) => item.id === itemData.id);
    return existingItemIndex !== -1 ? true : false;
  };

  const handleRemove = () => {
    dispatch({ type: "REMOVE_ITEM", payload: itemData.id });
  };

  const addToChart = () => {
    dispatch({ type: "ADD_ITEM", payload: itemData });
  };

  return (
    <Card variant="outlined" sx={{ width: 255 }} className={"cardProduct"}>
      <Typography
        level="h2"
        fontSize="md"
        sx={{ mb: 1 }}
      >
        {String(itemData.title).slice(0, 25)}
      </Typography>
      <Typography level="body2">{itemData.category}</Typography>

      <AspectRatio minHeight="120px" maxHeight="250px" sx={{ my: 2 , borderRadius :7}}>
        <img src={itemData.image} loading="lazy" alt="" />
      </AspectRatio>
      <Box sx={{ display: "flex" }}>
        <div>
          <Typography level="body3" fontSize={"14px"}>Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            ${itemData.price}
          </Typography>
        </div>
        {!isInCart() ? (
          <Button
            variant="solid"
            size="sm"
            style={{
              paddingInline : "10px",
              height : "40px",
              boxSizing : "border-box"
            }}
            color="success"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={addToChart}
          >
            Əlavə et
          </Button>
        ) : (
          <Button
          style={{
            paddingInline : "10px",
            height : "40px",
            boxSizing : "border-box"
          }}
            variant="solid"
            size="sm"
            color="primary"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={handleRemove}
          >
            Səbətdən sil
          </Button>
        )}
      </Box>
    </Card>
  );
}

export default MediaCard;
import * as React from "react";
import Card from "@mui/joy/Card";
import Typography from "@mui/joy/Typography";
import AspectRatio from "@mui/joy/AspectRatio";
import Button from "@mui/joy/Button";
import { Box } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";

export default function ImgMediaCard({ itemData }) {
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
    <Card variant="outlined" sx={{ width: 320 }} className={"cardProduct"}>
      <Typography
        level="h2"
        fontSize="md"
        sx={{ mb: 1 }}
      >
        {itemData.title}
      </Typography>
      <Typography level="body2">{itemData.category}</Typography>

      <AspectRatio minHeight="120px" maxHeight="200px" sx={{ my: 2 , borderRadius :0}}>
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
            color="success"
            aria-label="Explore Bahamas Islands"
            sx={{ ml: "auto", fontWeight: 600 }}
            onClick={addToChart}
          >
            Səbətə əlavə et
          </Button>
        ) : (
          <Button
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

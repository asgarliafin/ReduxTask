import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import ImgMediaCard from "./ImgMediaCard";
import { Container } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";


export default function ResponsiveGrid() {
  const { data, isLoading } = useQuery("repoDtata", () => {
    return axios.get("https://fakestoreapi.com/products");
  });
  if (isLoading) return "Loading...";
  return (
    <Container style={{ paddingTop: 50 }}>
      <Box>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexWrap: "wrap",
            rowGap: 20,
            justifyContent: "space-around",
          }}
        >
          {data.data.map((e, index) => (
            <ImgMediaCard key={index} itemData={e} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

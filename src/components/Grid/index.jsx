import * as React from "react";
import { Container, Box } from "@mui/material";
import { useQuery } from "react-query";
import axios from "axios";
import MediaCard from "../MediaCard";


export default function Grid() {

  const { data, isLoading } = useQuery("repoDtata", () => {
    const endpoint = "https://fakestoreapi.com/products"
    return axios.get(endpoint);
  });

  if (isLoading) { return "Website yüklənir" };

  const styleContainer = {
    width: "100%",
    display: "flex",
    flexWrap: "wrap",
    rowGap: 20,
    justifyContent: "space-around",
  };

  return (
    <Container style={{ marginBlock: 75 }}>
      <Box>
        <div style={styleContainer}>
          {data.data.map((elm, i) => (
            <MediaCard key={i} itemData={elm} />
          ))}
        </div>
      </Box>
    </Container>
  );
}

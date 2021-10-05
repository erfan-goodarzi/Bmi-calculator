import Box from "@mui/material/Box";

export default function BmiBox(props) {
  return (
    <Box
      sx={{
        width: 363,
        marginLeft: "21rem",
        marginRight: "-10rem",
        borderRadius: "14px",
        color: "#6799b0",
        background: " #EDEDED",
        boxShadow: "5px 5px 49px #a1b1b6, -5px -5px 49px #ffffff",
        height: "85vh",
      }}
    >
      <Box
        sx={{
          fontFamily: "Nunito",
          fontSize: "19px",
          textAlign: "center",
          mt: "31px",
        }}
      >
        {props.title}{" "}
      </Box>
      <Box>{props.gender}</Box>
    </Box>
  );
}
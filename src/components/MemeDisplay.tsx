interface props {
  image: string | undefined;
  caption: string;
}

function MemeDisplay({ image, caption }: props) {
  return (
    <div
      id="meme"
      style={{
        backgroundColor: "white",
        width: "500px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "10px",
      }}
    >
      <p
        style={{
          textAlign: "center",
          color: "black",
          fontSize: "24px",
          textShadow: "1px 1px black",
        }}
      >
        {caption}
      </p>
      <img
        src={image}
        alt="Meme"
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          borderBottomLeftRadius: "10px",
          borderBottomRightRadius: "10px",
        }}
      />
    </div>
  );
}

export default MemeDisplay;

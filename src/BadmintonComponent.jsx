export default function BadmintonComponent(props) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-evenly",
        flexDirection: "column",
      }}
    >
      <h2>Exemplo: {props.titulo}</h2>
      <p>{props.content}</p>
      {props.children}
    </div>
  );
}

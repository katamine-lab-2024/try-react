import { Button } from "./Button";

function App() {
  return (
    <>
      try-react
      <Button
        variant="primary"
        onClick={() => {
          console.log("click");
        }}
      >
        ボタン
      </Button>
    </>
  );
}

export default App;

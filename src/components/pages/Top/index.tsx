import { Button } from "@/Button";
// import { Header } from "@/components/ui/Header";

export const Top = () => {
  return (
    // <>
    //   <Header />
    //   <p>Top</p>
    //   <Button variant="secondary">secondary</Button>
    // </>
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
};

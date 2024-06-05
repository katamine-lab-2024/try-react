import { Button } from "@/components/ui/Button";
import { Header } from "@/components/ui/Header";

export const Top = () => {
  return (
    <>
      <Header />
      <p>Top</p>
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

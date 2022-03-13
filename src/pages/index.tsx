import Counter from "../components/AsyncExample/Counter";
import { MaterialUI } from "../components/MockMaterialUI/MaterialUI";

export default function Home() {
  return (
    <div>
      <h1>Hello React.js Testing Series Friends!!!</h1>
      {/* <Counter description="My Counter" defaultCount={0} /> */}
      <MaterialUI
        onMoney={(money) => {
          alert(money);
        }}
      />
    </div>
  );
}

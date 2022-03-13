import Counter from "../components/AsyncExample/Counter";
import { MaterialUI } from "../components/MockMaterialUI/MaterialUI";
import { MyDrawer } from "../components/MockMaterialDrawer/Drawer";

export default function Home() {
  return (
    <div>
      <h1>Testing Components</h1>
      {/* <Counter description="My Counter" defaultCount={0} /> */}
      {/*<MaterialUI
        onMoney={(money) => {
          alert(money);
        }}
      />*/}
      <MyDrawer />
    </div>
  );
}

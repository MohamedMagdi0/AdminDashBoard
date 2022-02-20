import Charts from "../../Components/Charts/Charts";
import FeaturedInfo from "../../Components/FeaturedInfo/FeaturedInfo";
import "./Home.css";
import { userData } from "../../DummyData";
import WidgetLg from "../../Components/WidgetLg/WidgetLg";
import WidgetSm from "../../Components/WidgetSm/WidgetSm";
export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        tittle="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidgets">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

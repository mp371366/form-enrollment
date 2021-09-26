import DepartmentList from "../DepartmentsList/DepartmentsList";
import { Department } from "../DepartmentsList/Department";
import "./Home.css";

const departments: Array<Department> = [
  {
    name: "XYZ",
    city: "Warszawa",
    country: "Poland"
  },
  {
    name: "ABC",
    city: "Kraków",
    country: "Poland"
  },
  {
    name: "RNQ",
    city: "Berlin",
    country: "Germany"
  },
];

export default function Home() {
  return (
    <div className="Home">
      <p>Choose department</p>
      <div className="Home-tiles">
        <DepartmentList departments={departments} />
      </div>
    </div>
  );
}

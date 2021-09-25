import { Department } from "./Department";
import DepartmentItem from "./DepartmentItem";
import "./DepartmentsList.css";

type DepartmentListProps = {
  departments: Array<Department>;
};

export default function DepartmentList({ departments }: DepartmentListProps) {
  return (
    <div className="DepartmentList">
      <ul className="DepartmentList-list">
        {departments.map((department) => (
          <li key={department.name} className="DepartmentList-item">
            <DepartmentItem department={department} />
          </li>
        ))}
      </ul>
    </div>
  )
}
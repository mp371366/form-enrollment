import { Link } from "react-router-dom";
import { displayDepartment } from "./Department";
import { Department } from "./Department";
import "./DepartmentItem.css";

type DepartmentItemProps = {
  department: Department,
}

export default function DepartmentItem({ department }: DepartmentItemProps) {
  return (
    <div className="DepartmentItem">
      <Link className="DepartmentItem-link" to={`/department/${department.name}`}>
        <div className="DepartmentItem-tile">
          <div>{displayDepartment(department)}</div>
        </div>
      </Link>
    </div>
  )
}
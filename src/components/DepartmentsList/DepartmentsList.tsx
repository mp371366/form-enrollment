import { CSSProperties } from "react";
import { Department } from "./Department";
import DepartmentItem from "./DepartmentItem";
import "./DepartmentsList.css";

type DepartmentListProps = {
  departments?: Array<Department>;
  cols?: number;
};

export default function DepartmentList({ departments = [], cols = 3 }: DepartmentListProps) {
  const listStyle: CSSProperties = {
    gridTemplateColumns: `repeat(${cols}, 1fr)`
  }

  return (
    <div className="DepartmentList">
      <ul className="DepartmentList-list" style={listStyle}>
        {departments.map((department) => (
          <li key={department.name} className="DepartmentList-item">
            <DepartmentItem department={department} />
          </li>
        ))}
      </ul>
    </div>
  )
}
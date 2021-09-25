import { useLocation } from "react-router"

export default function NoMatch() {
  const location = useLocation();

  return (
    <div className="NoMatch">
      <p>
        No match for <code>{location.pathname}</code>
      </p>
    </div>
  )
}
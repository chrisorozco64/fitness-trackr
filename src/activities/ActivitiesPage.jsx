import DisplayActivities from "./DisplayActivities";
import Form from "../Form/Form";
import { useAuth } from "../auth/AuthContext";

export default function ActivitiesPage() {
  const { token } = useAuth();

  return (
    <>
      <h1>Activities</h1>
      <DisplayActivities />
      {token && <Form />}
    </>
  );
}

import useQuery from "../api/useQuery"
import DisplayIndividual from "./DisplayIndividual"

export default function DisplayActivities() {
    const {data, loading, error} = useQuery("/activities", "activity");

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error loading activities.</p>;
    if (!data) return null;

  const activities = data.activities || data.results || data;

  return (
    <ul>
        {activities.map((element) => (
            <DisplayIndividual activities = {"/activities"} activity ={element} key = {element.id} />
        ))
    }</ul>
  )
}


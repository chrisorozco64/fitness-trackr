import { useAuth } from "../auth/AuthContext";
import useMutation from "../api/useMutation.js";
import { useState } from "react";

export default function DisplayIndividual({ activity }) {
    const { token } = useAuth();
    const [error, setError] = useState("");
    const { mutate } = useMutation(
        "DELETE",
        `/activities/${activity.id}`,
        "activity"
    );

    const handleDelete = async () => {
        try {
            await mutate(undefined, {
            headers: {
            Authorization: `Bearer ${token}`,
            }
          });
        } catch (error) {
            setError(error?.message || error || "An error occurred");
        }
    };
    
    return (
    <li>
        {activity.name}
        <br />
        {token && (
        <button onClick={handleDelete}>
           {error ? error : "Delete"}
        </button>
        )}
    </li>
    )
}

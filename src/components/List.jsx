import React, { useState, useEffect } from "react";
import axios from "axios";
//import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";

const List = () => {
  const [meetings, setMeetings] = useState([]);
  const apiEndpoint = "http://localhost:8080/api/meeting";

  // Fetch all meetings using async/await
  useEffect(() => {
    fetchAllMeetings();
  }, []);

  const fetchAllMeetings = async () => {
    console.log("Step1: Starting to fetch meetings...");

    await axios
      .get(apiEndpoint)
      .then((response) => {
        console.log("Step2: Response received.", response);

        // Verify successful response (HTTP 200)
        if (response.status === 200) {
          console.log("RESPONSE DATA:", response.data);
          setMeetings(response.data); // Set the meetings data
          console.log(
            "Step3: Meetings successfully fetched and state updated."
          );
        } else {
          console.error("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error occurred during the API call.", error);
      });

    console.log("Step4: Finished fetching meetings.");
  };

  // Update meeting status (PUT or PATCH)
  const updateMeetingStatus = async (id, newStatus) => {
    try {
      console.log("newStatus:", newStatus);
      const response = await axios.put(
        `${apiEndpoint}/${id}?status=${newStatus}`
      );
      if (response.status === 204) {
        fetchAllMeetings();
        console.log("Meeting status updated successfully.");
      }
    } catch (error) {
      console.error("Error updating meeting:", error);
    }
  };

  // Delete an meeting
  const deleteMeeting = async (id) => {
    try {
      const response = await axios.delete(`${apiEndpoint}/${id}`);
      if (response.status === 204) {
        fetchAllMeetings();
        console.log("Meeting deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting meeting:", error);
    }
  };

  // Callback for adding a new meeting
  const handleMeetingAdded = () => {
    fetchAllMeetings();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Meetings</h2>
      {/* Add Meeting Form */}
      {/* <MeetingForm onMeetingAdded={handleMeetingAdded} />*/}

      <div className="table">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Date</th>
              <th>Time</th>
              <th>Level</th>
              <th>Participants</th>
              <th>Descrption</th>
            </tr>
          </thead>
          <tbody>
            {meetings.map((meeting, index) => (
              <tr key={meeting.id}>
                <td>{meeting.id}</td>
                <td>{meeting.title}</td>
                <td>{meeting.date}</td>
                <td>{meeting.time}</td>
                <td>{meeting.level}</td>
                <td>{meeting.participants}</td>
                <td>{meeting.descreption}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
import React, { useState, useEffect } from "react";
import axios from "axios";
import { FaCheck, FaTimes, FaTrash } from "react-icons/fa";
import "bootstrap/dist/css/bootstrap.min.css";
import InvitationForm from "./InvitationForm";

const InvitationList = () => {
  const [meetings, setMeetingS] = useState([]);
  const apiEndpoint = "http://localhost:8080/api/meeting";

  // Fetch all invitations using async/await
  useEffect(() => {
    fetchAllInvitations();
  }, []);

  const fetchAllInvitations = async () => {
    console.log("Step1: Starting to fetch invitations...");

    await axios
      .get(apiEndpoint)
      .then((response) => {
        console.log("Step2: Response received.", response);

        // Verify successful response (HTTP 200)
        if (response.status === 200) {
          console.log("RESPONSE DATA:", response.data);
          setInvitations(response.data); // Set the invitations data
          console.log(
            "Step3: Invitations successfully fetched and state updated."
          );
        } else {
          console.error("Unexpected response status:", response.status);
        }
      })
      .catch((error) => {
        console.error("Error occurred during the API call.", error);
      });

    console.log("Step4: Finished fetching invitations.");
  };

  // Update invitation status (PUT or PATCH)
  const updateInvitationStatus = async (id, newStatus) => {
    try {
      console.log("newStatus:", newStatus);
      const response = await axios.put(
        `${apiEndpoint}/${id}?status=${newStatus}`
      );
      if (response.status === 204) {
        fetchAllInvitations();
        console.log("Invitation status updated successfully.");
      }
    } catch (error) {
      console.error("Error updating invitation:", error);
    }
  };

  // Delete an invitation
  const deleteInvitation = async (id) => {
    try {
      const response = await axios.delete(`${apiEndpoint}/${id}`);
      if (response.status === 204) {
        fetchAllInvitations();
        console.log("Invitation deleted successfully.");
      }
    } catch (error) {
      console.error("Error deleting invitation:", error);
    }
  };

  // Callback for adding a new invitation
  const handleInvitationAdded = () => {
    fetchAllInvitations();
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Your Invitations</h2>
      {/* Add Invitation Form */}
      <InvitationForm onInvitationAdded={handleInvitationAdded} />

      <div className="table">
        <table className="table table-bordered table-striped">
          <thead className="thead-dark">
            <tr>
              <th>#</th>
              <th>Meeting</th>
              <th>Date</th>
              <th>Time</th>
              <th>Location</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {invitations.map((invitation, index) => (
              <tr key={invitation.id}>
                <td>{index + 1}</td>
                <td>{invitation.title}</td>
                <td>{invitation.date}</td>
                <td>{invitation.time}</td>
                <td>{invitation.location}</td>
                <td>
                  <span
                    className={`badge ${
                      invitation.status === "accepted"
                        ? "bg-success"
                        : invitation.status === "declined"
                        ? "bg-danger"
                        : "bg-warning text-dark"
                    }`}
                  >
                    {invitation.status.charAt(0).toUpperCase() +
                      invitation.status.slice(1)}
                  </span>
                </td>
                <td>
                  {invitation.status === "pending" && (
                    <>
                      <button
                        className="btn btn-sm btn-success me-2"
                        onClick={() =>
                          updateInvitationStatus(invitation.id, "accepted")
                        }
                      >
                        <FaCheck /> Accept
                      </button>
                      <button
                        className="btn btn-sm btn-danger me-2"
                        onClick={() =>
                          updateInvitationStatus(invitation.id, "declined")
                        }
                      >
                        <FaTimes /> Decline
                      </button>
                    </>
                  )}
                  <button
                    className="btn btn-sm btn-secondary"
                    onClick={() => deleteInvitation(invitation.id)}
                  >
                    <FaTrash /> Remove
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
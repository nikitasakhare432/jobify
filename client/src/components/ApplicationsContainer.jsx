import React from "react";
import { useMyApplicationsContext } from "../pages/MyApplications";
import Application from "./Application";

const ApplicationsContainer = () => {
    const { data } = useMyApplicationsContext();
    console.log("Fetched applications data:", data);

    const applications = data?.data?.applications || [];

    if (applications.length === 0) {
        return (
            <div className="flex items-center justify-center h-64">
                <h2 className="text-lg font-medium text-gray-500">No applications to display...</h2>
            </div>
        );
    }

    return (
        <div className="px-4 py-6 w-full">
            {/* Page Title */}
            <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">My Applications</h2>

            {/* Grid Layout */}
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-2">
                {applications.map((app) => (
                    <Application
                        key={app._id}
                        jobId={app.jobId}
                        name={app.name}
                        email={app.email}
                        position={app.position}
                        createdAt={app.createdAt}
                    />

                ))}
            </div>
        </div>
    );
};

export default ApplicationsContainer;

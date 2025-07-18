import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";
import Card from "../components/ui/Card";
import CardContent from "../components/ui/CardContent";
import { FaCheckCircle, FaClock, FaUsers } from "react-icons/fa";

const data = [
    { name: "Interviewed", count: 15 },
    { name: "Pending", count: 10 },
    { name: "Completed", count: 3 },
];

const icons = {
    Interviewed: <FaUsers style={{ color: "#007bff", fontSize: "35px" }} />,
    Pending: <FaClock style={{ color: "#ff9800", fontSize: "35px" }} />,
    Completed: <FaCheckCircle style={{ color: "#28a745", fontSize: "35px" }} />,
};

const styles = {
    container: {
        padding: "20px",
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#f4f6f9",
    },
    cardsContainer: {
        display: "flex",
        justifyContent: "space-between",
        gap: "15px",
    },
    card: {
        display: "flex",
        alignItems: "center",
        gap: "15px",
        padding: "20px",
        background: "linear-gradient(135deg, #ffffff, #f8f9fc)",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        cursor: "pointer",
        width: "30%",
    },
    cardHover: {
        transform: "translateY(-5px)",
        boxShadow: "0px 6px 18px rgba(0, 0, 0, 0.15)",
    },
    label: {
        color: "#6c757d",
        fontSize: "14px",
    },
    number: {
        fontSize: "26px",
        fontWeight: "bold",
    },
    chartContainer: {
        background: "white",
        padding: "25px",
        borderRadius: "10px",
        boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)",
        marginTop: "20px",
    },
    chartTitle: {
        fontSize: "20px",
        fontWeight: "bold",
        marginBottom: "10px",
    },
};

const Stats = () => {
    return (
        <div style={styles.container}>
            {/* Top Summary Boxes */}
            <div style={styles.cardsContainer}>
                {data.map((item) => (
                    <Card key={item.name} style={styles.card}>
                        {icons[item.name]}
                        <div>
                            <p style={styles.label}>{item.name}</p>
                            <p style={styles.number}>{item.count}</p>
                        </div>
                    </Card>
                ))}
            </div>

            {/* Bar Chart */}
            <div style={styles.chartContainer}>
                <h2 style={styles.chartTitle}>Interview Statistics</h2>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={data}>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="count" fill="#8884d8" barSize={50} />
                    </BarChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
};

export default Stats;

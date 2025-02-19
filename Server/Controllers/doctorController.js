exports.getDoctorDashboard = (req, res) => {
    res.json({
      message: "Welcome to the Doctor Dashboard",
      data: {
        patients: [
          { name: "Daniel Smith", age: 60, condition: "Stroke" },
          { name: "Aron", age: 70, condition: "Parkinson" },
        ],
        stats: { totalPatients: 100, activePatients: 75 },
      },
    });
  };
  
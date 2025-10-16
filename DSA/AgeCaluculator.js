import React, { useState } from "react";

function AgeCalculator() {
  const [birthDate, setBirthDate] = useState("");
  const [age, setAge] = useState(null);
  const [error, setError] = useState("");

  const calculateAge = () => {
    if (!birthDate) {
      setError("Please select a date");
      setAge(null);
      return;
    }

    const birth = new Date(birthDate);
    const today = new Date();

    if (birth > today) {
      setError("Birthdate cannot be in the future");
      setAge(null);
      return;
    }

    setError("");

    let years = today.getFullYear() - birth.getFullYear();
    let months = today.getMonth() - birth.getMonth();
    let days = today.getDate() - birth.getDate();

    // Adjust for negative days
    if (days < 0) {
      months--;
      const prevMonthDays = new Date(today.getFullYear(), today.getMonth(), 0).getDate();
      days += prevMonthDays;
    }

    // Adjust for negative months
    if (months < 0) {
      years--;
      months += 12;
    }

    setAge({ years, months, days });
  };

  return (
    <div className="container">
      <h2 className="title">Age Calculator</h2>

      <label htmlFor="birthdate" className="label" data-testid="label-birthdate">
        Enter/Select a birthdate:
      </label>

      <input
        id="birthdate"
        type="date"
        value={birthDate}
        onChange={(e) => setBirthDate(e.target.value)}
        className="input-date"
        data-testid="input-birthdate"
      />

      <button
        className="btn-calc"
        onClick={calculateAge}
        data-testid="btn-calculate"
      >
        Calculate Age
      </button>

      {error && (
        <p className="error-msg" data-testid="error-msg">
          {error}
        </p>
      )}

      {age && (
        <p className="age-result" data-testid="age-result">
          You are {age.years} years, {age.months} months, and {age.days} days old.
        </p>
      )}
    </div>
  );
}

export default AgeCalculator;

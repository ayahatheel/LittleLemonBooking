import React from "react";
import { useState } from "react";



const BookingForm = (props) => {

   const [occasion, setOccasion] = useState("");
   const [guests, setGuests] = useState("");
   const [date, setDate] = useState("");
   const [times, setTimes] = useState("")

   const handleSumbit = (e) => {
   e.preventDefault();
   props.submitForm(e);
   };

   const handleChange = (e) => {
    setDate(e);
    props.dispatch(e);
   }

  return (
    <header>
      <section>
      <form onSubmit={handleSumbit} style={{ maxWidth: "500px", margin: "0 auto", fontFamily: "Arial, sans-serif", backgroundColor: "#f7f7f7", padding: "20px", borderRadius: "10px", boxShadow: "0px 5px 15px rgba(0, 0, 0, 0.1)" }}>
  <h2 style={{ textAlign: "center", marginBottom: "30px", color: "#333" }}>Make Your Reservation</h2>
  <fieldset style={{ border: "2px solid #ccc", padding: "20px", borderRadius: "5px", backgroundColor: "#fff" }}>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="book-date" style={{ display: "block", color: "#555", marginBottom: "5px" }}>Choose Date</label>
      <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="book-time" style={{ display: "block", color: "#555", marginBottom: "5px" }}>Choose Time</label>
      <select id="book-time" value={times} onChange={(e) => setTimes(e.target.value)} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
        <option value="">Select a Time</option>
        {props.availableTimes.availableTimes.map(availableTimes => <option key={availableTimes}>{availableTimes}</option>)}
      </select>
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="book-guests" style={{ display: "block", color: "#555", marginBottom: "5px" }}>Number of Guests</label>
      <input id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} type="number" placeholder="0" max={10} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }} />
    </div>
    <div style={{ marginBottom: "20px" }}>
      <label htmlFor="book-occasion" style={{ display: "block", color: "#555", marginBottom: "5px" }}>Occasion</label>
      <select id="book-occasion" key={occasion} value={occasion} onChange={(e) => setOccasion(e.target.value)} required style={{ width: "100%", padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}>
        <option value="">Select an Option</option>
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>
    </div>
    <div style={{ textAlign: "center" }}>
      <button type="submit" style={{ backgroundColor: "deepyellow", color: "black", padding: "12px 20px", borderRadius: "5px", border: "none", cursor: "pointer", fontSize: "16px", fontWeight: "bold" }}>Make Your Reservation</button>
    </div>
  </fieldset>
</form>

      </section>
    </header>
  );
};

export default BookingForm;

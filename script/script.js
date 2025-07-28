function showData() {
  let dataCard = document.getElementById("weatherCard");
  let locInput = document.getElementById("searchInput");
  let tempElem = document.getElementById("temp");
  let locationElem = document.getElementById("location");
  let weatherElem = document.getElementById("weather");
  const form = document.getElementById("searchForm");


  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let locValue = locInput.value;

    if (locValue.trim() === "") {
      alert("Please enter a location!");
      dataCard.classList.add("hidden");
      return;
    }

    const url = `/api/weather?q=${encodeURIComponent(locValue)}`;

    try {
      const response = await fetch(url);
      if (!response.ok) throw new Error("Location not found!");
      const data = await response.json();

      // Display weather data inside the card
      locationElem.textContent = data.location.name + ", " + data.location.country;
      tempElem.textContent = data.current.temp_c + "°C";
      weatherElem.textContent = data.current.condition.text;

      dataCard.classList.remove("hidden");
    } catch (err) {
      alert("Could not fetch weather data. " + err.message);
      dataCard.classList.add("hidden");
    }
  });
}

showData();

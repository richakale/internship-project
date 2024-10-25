function estimatePrice() {
  // Get input values
  const locationRate = parseInt(document.getElementById("location").value);
  const area = parseInt(document.getElementById("area").value);
  const rooms = parseInt(document.getElementById("rooms").value);

  // Validate inputs
  if (isNaN(area) || isNaN(rooms) || area <= 0 || rooms <= 0) {
    document.getElementById("result").innerText = "Please enter valid inputs.";
    return;
  }

  // Calculate base price
  let basePrice = locationRate * area;
  const roomFactor = rooms * 100000; // Extra cost per room

  // Calculate amenities cost
  let amenitiesCost = 0;
  const amenities = document.querySelectorAll('input[type="checkbox"]:checked');
  amenities.forEach((amenity) => {
    amenitiesCost += parseInt(amenity.value);
  });

  
  const estimatedPrice = basePrice + roomFactor + amenitiesCost;

  document.getElementById('estimateButton').addEventListener('click', function () {
    let price = calculatePrice(); // Ensure this function works as expected
    document.getElementById('priceDisplay').innerText = price;
});
fetch('/api/estimatePrice')
    .then(response => response.json())
    .then(data => {
        document.getElementById('priceDisplay').innerText = data.price;
    })
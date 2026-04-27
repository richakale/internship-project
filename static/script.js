function estimatePrice() {
  const locationRate = parseInt(document.getElementById("location").value);
  const area = parseInt(document.getElementById("area").value);
  const rooms = parseInt(document.getElementById("rooms").value);

  if (isNaN(area) || isNaN(rooms) || area <= 0 || rooms <= 0) {
    document.getElementById("result").innerText = "Please enter valid inputs.";
    return;
  }

  let basePrice = locationRate * area;
  let roomFactor = rooms * 100000;

  let amenitiesCost = 0;
  const amenities = document.querySelectorAll('input[type="checkbox"]:checked');
  amenities.forEach(a => amenitiesCost += parseInt(a.value));

  const estimatedPrice = basePrice + roomFactor + amenitiesCost;

  document.getElementById("result").innerText =
    "Estimated Price: ₹ " + estimatedPrice;
}


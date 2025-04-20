function getAkanName() {
  const day = parseInt(document.getElementById('day').value);
  const month = parseInt(document.getElementById('month').value);
  const year = parseInt(document.getElementById('year').value);
  const gender = document.getElementById('gender').value;

  if (!day || !month || !year || !gender) {
      alert("Please fill in all fields.");
      return;
  }

  const date = new Date(year, month - 1, day); // JavaScript months are 0-indexed
  const dayOfWeek = date.getDay(); // 0 = Sunday, 1 = Monday, etc.

  const maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
  const femaleNames = ["Akosua", "Adwoa", "Abena", "Akua", "Yaa", "Afua", "Ama"];

  let akanName = "";

  if (gender === "male") {
      akanName = maleNames[dayOfWeek];
  } else if (gender === "female") {
      akanName = femaleNames[dayOfWeek];
  }

  document.getElementById('result').innerText = "Your Akan name is: " + akanName;
}

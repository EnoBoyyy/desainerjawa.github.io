// Data Provinsi, Kota, dan Kecamatan
const data = {
  "Jawa Timur": {
    Surabaya: ["Gubeng", "Tegalsari", "Wonokromo"],
    Malang: ["Klojen", "Lowokwaru", "Blimbing"],
    // Tambahkan kota dan kecamatan lainnya
  },
  "Jawa Barat": {
    Bandung: ["Coblong", "Sumur Bandung", "Kiaracondong"],
    Bogor: ["Bogor Tengah", "Bogor Barat", "Bogor Selatan"],
    // Tambahkan kota dan kecamatan lainnya
  },
  // Tambahkan provinsi dan kota lainnya
};

function populateProvinces() {
  const provinceSelect = document.getElementById("province");
  Object.keys(data).forEach((province) => {
    const option = document.createElement("option");
    option.value = province;
    option.textContent = province;
    provinceSelect.appendChild(option);
  });
}

function updateCities() {
  const province = document.getElementById("province").value;
  const citySelect = document.getElementById("city");
  const districtSelect = document.getElementById("district");

  citySelect.innerHTML = '<option value="">Pilih Kota</option>'; // Reset city options
  districtSelect.innerHTML = '<option value="">Pilih Kecamatan</option>'; // Reset district options

  if (province) {
    Object.keys(data[province]).forEach((city) => {
      const option = document.createElement("option");
      option.value = city;
      option.textContent = city;
      citySelect.appendChild(option);
    });
  }
}

function updateDistricts() {
  const province = document.getElementById("province").value;
  const city = document.getElementById("city").value;
  const districtSelect = document.getElementById("district");

  districtSelect.innerHTML = '<option value="">Pilih Kecamatan</option>'; // Reset district options

  if (province && city) {
    data[province][city].forEach((district) => {
      const option = document.createElement("option");
      option.value = district;
      option.textContent = district;
      districtSelect.appendChild(option);
    });
  }
}

function calculateShipping() {
  const province = document.getElementById("province").value;
  const city = document.getElementById("city").value;
  const district = document.getElementById("district").value;

  if (!province || !city || !district) {
    document.getElementById("result").innerText = "Semua field harus diisi!";
    return;
  }

  const shippingCost = getShippingCost(city);
  document.getElementById(
    "result"
  ).innerText = `Total Ongkir ke ${district}, ${city}, ${province}: Rp ${shippingCost.toLocaleString()}`;
}

function getShippingCost(city) {
  // Ongkir berdasarkan kota
  const costs = {
    Surabaya: 50000,
    Bandung: 60000,
    Jakarta: 75000,
    Medan: 100000,
    Yogyakarta: 55000,
    // Tambahkan biaya lainnya sesuai kota
  };

  return costs[city] || 0;
}

// Initialize form on page load
document.addEventListener("DOMContentLoaded", () => {
  populateProvinces();
});

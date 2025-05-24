// === Données des voitures ===
const voitures = [
  {
    id: "mercedes-c300",
    marque: "Mercedes",
    modele: "C300",
    annee: 2022,
    prix: "28 500 000 FCFA",
    kilometrage: "15 000 km",
    transmission: "Automatique",
    carburant: "Essence",
    options: "GPS, Caméra recul, Intérieur cuir",
    images: [
      "images/MERCEDES.jpg",
      "images/MERCEDES1.jpg",
      "images/MERCEDES2.jpg",
      "images/MERCEDES3.jpg",
    ],
  },
  {
    id: "bmw-x6",
    marque: "BMW",
    modele: "X6",
    annee: 2021,
    prix: "35 000 000 FCFA",
    kilometrage: "22 000 km",
    transmission: "Automatique",
    carburant: "Diesel",
    options: "Toit ouvrant, Affichage tête haute",
    images: [
      "images/BMW.jpg",
      "images/BMW1.jpg",
      "images/BMW2.jpg",
      "images/BMW1.jpg",
    ],
  },
  {
    id: "tesla-model-s",
    marque: "Tesla",
    modele: "Model S",
    annee: 2022,
    prix: "40 000 000 FCFA",
    kilometrage: "8 000 km",
    transmission: "Automatique",
    carburant: "Électrique",
    options: "Autopilot, Écran tactile 17 pouces",
    images: [
      "images/TESLA.jpg",
      "images/TESLA1.jpg",
      "images/TESLA2.jpg",
      "images/TESLA.jpg",
    ],
  },
  {
    id: "lamborghini-aventador",
    marque: "Lamborghini",
    modele: "Aventador",
    annee: 2020,
    prix: "120 000 000 FCFA",
    kilometrage: "12 000 km",
    transmission: "Automatique",
    carburant: "Essence",
    options: "Sièges sport, Système audio premium",
    images: [
      "images/LAMBO.jpg",
      "images/LABMO1.jpg",
      "images/lambo rouge.jpg",
      "images/lambo jaune.jpg",
    ],
  },
  {
    id: "rolls-phantom",
    marque: "Rolls-Royce",
    modele: "Phantom",
    annee: 2021,
    prix: "150 000 000 FCFA",
    kilometrage: "10 000 km",
    transmission: "Automatique",
    carburant: "Essence",
    options: "Bar réfrigéré, Portes à ouverture inversée",
    images: [
      "images/ROLLS ROYCE.jpg",
      "images/ROLLS ROYCE1.jpg",
      "images/ROLLS ROYCE2.jpg",
      "images/ROLLS ROYCE3.jpg",
    ],
  },
  {
    id: "range-rover-sport",
    marque: "Range Rover",
    modele: "Sport",
    annee: 2022,
    prix: "38 000 000 FCFA",
    kilometrage: "9 500 km",
    transmission: "Automatique",
    carburant: "Diesel",
    options: "Suspension adaptative, Caméras 360°",
    images: [
      "images/RANGE ROVER.jpg",
      "images/RANGE ROVER1.jpg",
      "images/RANGE ROVER2.jpg",
      "images/RANGE ROVER1.jpg",
    ],
  },
];

// === Récupération des éléments du DOM ===
const detailSection = document.getElementById("details");
const detailContent = document.getElementById("detailsContent");

// === Fonction pour changer l’image principale ===
function changerImagePrincipale(nouvelleSrc, miniatureElement) {
  const imagePrincipale = document.getElementById("imagePrincipale");
  const toutesLesMiniatures = document.querySelectorAll(".miniature");

  imagePrincipale.src = nouvelleSrc;

  toutesLesMiniatures.forEach((mini) => {
    mini.classList.remove("active");
    mini.style.border = "2px solid #ccc";
  });

  miniatureElement.classList.add("active");
  miniatureElement.style.border = "2px solid #007bff";
}

// === Fonction pour afficher les détails d’une voiture ===
function afficherDetails(idVoiture) {
  const voiture = voitures.find((v) => v.id === idVoiture);
  if (!voiture) return;

  const miniaturesHTML = voiture.images
    .map(
      (img, index) => `
      <img 
        src="${img}" 
        class="miniature ${index === 0 ? "active" : ""}" 
        style="width: 80px; height: 60px; object-fit: cover; cursor: pointer; border: 2px solid ${
          index === 0 ? "#007bff" : "#ccc"
        }; border-radius: 5px;" 
        onclick="changerImagePrincipale('${img}', this)"
      />
    `
    )
    .join("");

  detailContent.innerHTML = `
    <div style="display: flex; gap: 20px; align-items: flex-start;">
      <div style="flex: 1;">
        <img id="imagePrincipale" src="${voiture.images[0]}" alt="${voiture.marque} ${voiture.modele}" style="width: 100%; border-radius: 10px; max-height: 300px; object-fit: cover;" />
        <div id="miniaturesContainer" style="margin-top: 10px; display: flex; gap: 10px; flex-wrap: wrap;">
          ${miniaturesHTML}
        </div>
      </div>
      <div style="flex: 1; text-align: left;">
        <h2>${voiture.marque} ${voiture.modele}</h2>
        <p><strong>Prix:</strong> ${voiture.prix}</p>
        <p><strong>Année:</strong> ${voiture.annee}</p>
        <p><strong>Kilométrage:</strong> ${voiture.kilometrage}</p>
        <p><strong>Transmission:</strong> ${voiture.transmission}</p>
        <p><strong>Carburant:</strong> ${voiture.carburant}</p>
        <p><strong>Options:</strong> ${voiture.options}</p>
        <button class="btn interet-btn" style="margin-top: 20px;">Ça m'intéresse</button>
        <button id="btnRetour" class="btn" style="margin-top: 10px; background-color:#0056b3;">Retour</button>
      </div>
    </div>
  `;

  detailSection.style.display = "block";

  document.getElementById("btnRetour").addEventListener("click", () => {
    detailSection.style.display = "none";
  });

  detailSection.scrollIntoView({ behavior: "smooth" });
}

// === Activation des boutons "Voir détails" ===
document.querySelectorAll(".voir-details").forEach((btn) => {
  btn.addEventListener("click", () => {
    const idVoiture = btn.getAttribute("data-id");
    afficherDetails(idVoiture);
  });
});

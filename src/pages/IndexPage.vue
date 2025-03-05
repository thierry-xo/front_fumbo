<template>
  <q-layout view="hHh lpR fFf">
    <!-- HEADER -->
    <q-header elevated class="bg-white text-black shadow-sm">
      <q-toolbar>
        <q-toolbar-title class="text-weight-bold text-h5">
          Fumbo
        </q-toolbar-title>
        <q-space />
        <q-input
          dense
          filled
          rounded
          placeholder="Rechercher..."
          class="q-mr-md animate__animated animate__fadeInRight"
          v-model="searchQuery"
        >
          <template v-slot:append>
            <q-icon name="search" />
          </template>
        </q-input>
        <q-btn
          flat
          label="Ouvrages"
          class="hover-underline-animation"
          to="/ouvrage"
        />
        <q-btn
          flat
          label="Ecrire"
          class="hover-underline-animation"
          to="/Ecrire"
        />
        <q-btn flat label="Romans" class="hover-underline-animation" />
        <q-btn
          rounded
          unelevated
          color="black"
          label="Se connecter"
          class="q-ml-md text-white hover-grow"
          to="/inscription"
        />
      </q-toolbar>
    </q-header>

    <!-- CONTENU PRINCIPAL -->
    <div class="carousel">
      <!-- Image principale -->
      <div class="carousel-background-image">
        <img :src="currentSlide.image" :alt="currentSlide.title" />
        <div class="overlay">
          <h2>{{ currentSlide.title }}</h2>
          <p>Par {{ currentSlide.author }}</p>
          <button class="view-button">Voir l'ouvrage</button>
        </div>
      </div>

      <!-- Flèches de navigation -->
      <button class="nav-button left" @click="prevSlide">&#10094;</button>
      <button class="nav-button right" @click="nextSlide">&#10095;</button>
    </div>

    <!-- Section Écouter des Histoires -->
    <div class="q-mt-xl section-container animate__animated animate__fadeInUp">
      <h4 class="text-center text-weight-bold q-mb-lg">
        Écouter des histoires
      </h4>
      <div class="row q-col-gutter-lg justify-center">
        <q-card
          v-for="(story, index) in stories"
          :key="index"
          class="col-12 col-md-3 animate__animated animate__zoomIn hover-shadow story-card"
        >
          <q-img :src="story.imageUrl" class="q-mt-md story-image" />
          <q-card-section>
            <div class="text-weight-bold">{{ story.title }}</div>
            <div class="text-caption text-grey">{{ story.author }}</div>
          </q-card-section>
          <q-card-actions align="right">
            <q-btn
              flat
              label="Écouter l'histoire"
              color="black"
              class="hover-pop"
            />
          </q-card-actions>
        </q-card>
      </div>
    </div>

    <!-- Section raconter une histoire -->
    <div class="story-section">
      <img :src="backgroundImage" alt="Illustration" class="background-image" />
      <q-btn
        class="hover-grow"
        label="Raconter une histoire"
        bg-color="black"
        color="black"
        unelevated
      />
    </div>

    <!--Section pour le témoignage-->
    <div class="testimonial">
      <!-- Image de profil -->
      <img :src="userImage" class="profile-img" width="300px" />
      <div class="user-name">Thierry</div>

      <!-- Témoignage -->
      <blockquote class="testimonial-text">
        "Grâce à Fumbo, je connais mieux maintenant l’histoire de mon pays et je
        me sens beaucoup plus proche de ma communauté"
      </blockquote>

      <!-- Bouton d'action -->
      <q-btn label="Devenir membre" color="black" class="cta-btn" />
    </div>

    <!--Section d'à propos-->
    <section class="info-section">
      <div class="column">
        <h3 class="section-title">
          À PROPOS DE <span class="highlight">FUMBO</span>
        </h3>
        <ul>
          <li><q-icon name="person" class="icon" /> Personnel</li>
          <li>
            <q-icon name="shield" class="icon" /> Politique de confidentialité
          </li>
          <li>
            <q-icon name="gavel" class="icon" /> Code d’éthique et de conduite
          </li>
        </ul>
      </div>
      <div class="column">
        <h3 class="section-title">
          PARTAGEZ VOTRE <span class="highlight">HISTOIRE</span>
        </h3>
        <ul>
          <li>
            <q-icon name="lightbulb" class="icon" /> Conseils et astuces pour
            partager une histoire
          </li>
          <li>
            <q-icon name="send" class="icon" /> Soumettre vos données
            personnelles
          </li>
        </ul>
      </div>
      <div class="column contact">
        <h3 class="section-title">FUMBO</h3>
        <p class="address">
          103, av Carmel, Q. Katindo <br />
          Goma, RDC
        </p>
        <div class="social-icons">
          <q-btn
            flat
            round
            icon="fab fa-facebook"
            class="social-btn facebook"
          />
          <q-btn
            flat
            round
            icon="fab fa-instagram"
            class="social-btn instagram"
          />
          <q-btn flat round icon="fab fa-youtube" class="social-btn youtube" />
          <q-btn
            flat
            round
            icon="fab fa-linkedin"
            class="social-btn linkedin"
          />
        </div>
      </div>
    </section>
  </q-layout>
</template>

<script setup>
import { ref } from "vue";

const stories = ref([
  {
    title: "Le cœur a ses raisons",
    author: "Josué Ipaka",
    imageUrl: new URL("/img/book1.jpg", import.meta.url).href,
  },
  {
    title: "Rencontre avec le mal",
    author: "Henri Iyogi",
    imageUrl: new URL("/img/book2.jpg", import.meta.url).href,
  },
  {
    title: "Mon porte bonheur",
    author: "Furaha Nziere",
    imageUrl: new URL("/img/book3.jpg", import.meta.url).href,
  },
]);

// Liste des diapositives
const slides = ref([
  {
    image: "/img/book5.jpg",
    title: "La révolution du numérique de notre ère",
    author: "Thierry Nirere",
  },
  {
    image: "/img/book6.jpg",
    title: "L’intelligence artificielle et son impact",
    author: "Sophie Durant",
  },
  {
    image: "/img/book7.jpg",
    title: "Les nouvelles technologies et l’éducation",
    author: "Jean Dupont",
  },
]);

const currentIndex = ref(0);

// Récupérer la diapositive actuelle
const currentSlide = ref(slides.value[currentIndex.value]);

// Fonction pour passer à l’image précédente
const prevSlide = () => {
  currentIndex.value =
    (currentIndex.value - 1 + slides.value.length) % slides.value.length;
  currentSlide.value = slides.value[currentIndex.value];
};

// Fonction pour passer à l’image suivante
const nextSlide = () => {
  currentIndex.value = (currentIndex.value + 1) % slides.value.length;
  currentSlide.value = slides.value[currentIndex.value];
};

// Chargement de l'image depuis src/assets/img
const backgroundImage = new URL("/img/book1.jpg", import.meta.url).href;

// Chargement de l'image depuis src/assets/img
const userImage = new URL("/img/icone.jpg", import.meta.url).href;
</script>

<style scoped>
/* Importer Animate.css */
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

/* Importer Hover.css */
@import "https://cdnjs.cloudflare.com/ajax/libs/hover.css/2.3.1/css/hover-min.css";

/* Effet d'ombre au survol des cartes */
.hover-shadow {
  transition: 0.3s;
}
.hover-shadow:hover {
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

/* Animation pour souligner les boutons du menu */
.hover-underline-animation {
  position: relative;
}
.hover-underline-animation::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: black;
  transform: scaleX(0);
  transition: transform 0.3s ease-in-out;
}
.hover-underline-animation:hover::after {
  transform: scaleX(1);
}

/* Effet pop au survol */
.hover-pop {
  transition: 0.3s;
}
.hover-pop:hover {
  transform: translateY(-5px);
}

/* Conteneur principal */
.story-section {
  position: relative;
  width: 100%;
  height: 300px; /* Ajustez la hauteur selon vos besoins */
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

/* Image avec effet miroir */
.background-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scaleX(-1); /* Retourne l'image horizontalement */
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
}

/* Bouton centré */
.text {
  position: relative;
  z-index: 1;
  background: rgba(255, 255, 255, 0.7);
  border: none;
  padding: 12px 20px;
  font-size: 18px;
  font-weight: bold;
  cursor: pointer;
  border-radius: 5px;
}

/* Conteneur principal */
.testimonial {
  text-align: center;
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
}

/* Style de l'image (ronde) */
.profile-img {
  width: 100px;
  height: 100px;
  border-radius: 50%; /* Rend l'image totalement ronde */
  object-fit: cover;
  border: 4px solid white;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

/* Nom de l'utilisateur */
.user-name {
  font-size: 16px;
  font-weight: bold;
  margin-top: 10px;
}

/* Texte du témoignage */
.testimonial-text {
  font-size: 18px;
  font-style: italic;
  margin: 20px 0;
  color: #333;
}

/* Bouton call-to-action */
.cta-btn {
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 5px;
}

.info-section {
  display: flex;
  justify-content: space-between;
  padding: 20px;
  background: #f0f0f0;
}

.column {
  flex: 1;
  margin: 0 10px;
}

.column h3 {
  font-size: 1.2em;
  margin-bottom: 10px;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  margin-bottom: 5px;
}

.contact p {
  margin: 10px 0;
}

.social-icons {
  display: flex;
  gap: 10px;
  font-size: 1.5em;
}
/* carrousel */
.carousel {
  position: relative;
  width: 100vw; /* Prend toute la largeur de l'écran */
  height: 80vh; /* Ajuste la hauteur (peut être modifié selon le besoin) */
  overflow: hidden;
}

.carousel-image {
  position: relative;
}

.carousel-image img {
  width: 100vw; /* L'image prend toute la largeur de l'écran */
  height: 100%; /* Prend toute la hauteur du conteneur */
  object-fit: cover; /* Recadre l'image pour qu'elle remplisse l'espace sans déformation */
}

.overlay {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%); /* Centre parfaitement */
  text-align: center;
  color: white;
  background: rgba(
    0,
    0,
    0,
    0.4
  ); /* Léger fond assombri pour améliorer la lisibilité */
  padding: 20px;
  border-radius: 5px;
}
.overlay h2 {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 5px;
}
.overlay p {
  font-size: 16px;
  margin-bottom: 10px;
}

.view-button {
  background: black;
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 14px;
  border-radius: 5px;
  transition: background 0.3s ease;
}
.view-button:hover {
  background: #333;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: rgba(0, 0, 0, 0.5);
  color: white;
  border: none;
  padding: 10px 15px;
  cursor: pointer;
  font-size: 20px;
}

.nav-button.left {
  left: 10px;
}

.nav-button.right {
  right: 10px;
}

.nav-button:hover {
  background: black;
}
.info-section {
  display: flex;
  justify-content: space-around;
  background: #1a1a1a;
  color: #fff;
  padding: 40px 20px;
  border-radius: 10px;
  margin-top: 50px;
}

.column {
  flex: 1;
  max-width: 300px;
}

.section-title {
  font-size: 1.2rem;
  margin-bottom: 15px;
  text-transform: uppercase;
  font-weight: bold;
}

.highlight {
  color: #ffcc00;
}

ul {
  list-style: none;
  padding: 0;
}

ul li {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  font-size: 0.9rem;
}

.icon {
  margin-right: 8px;
  color: #ffcc00;
}

.contact .address {
  font-size: 0.9rem;
  margin-bottom: 15px;
}

.social-icons {
  display: flex;
  gap: 10px;
}

.social-btn {
  font-size: 1.2rem;
  background: transparent;
  color: #fff;
  transition: 0.3s;
}

.social-btn:hover {
  transform: scale(1.2);
}

.facebook:hover {
  color: #3b5998;
}

.instagram:hover {
  color: #e4405f;
}

.youtube:hover {
  color: #ff0000;
}

.linkedin:hover {
  color: #0077b5;
}
</style>

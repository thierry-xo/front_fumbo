<template>
  <q-page class="register-page flex flex-center">
    <q-card class="q-pa-md q-card-shadow animated-card">
      <!-- Titre -->
      <q-card-section>
        <div class="text-h4 text-center text-primary q-mb-sm">
          Créez un compte
        </div>
      </q-card-section>

      <!-- Formulaire d'inscription -->
      <q-card-section>
        <q-form @submit="register">
          <q-input
            v-model="form.nom"
            label="Nom"
            outlined
            dense
            class="q-mb-md"
          />
          <q-input
            v-model="form.prenom"
            label="Prénom"
            outlined
            dense
            class="q-mb-md"
          />

          <q-input
            v-model="form.email"
            type="email"
            label="Email"
            outlined
            dense
            class="q-mb-md"
          />
          <q-input
            v-model="form.password"
            type="password"
            label="Mot de passe"
            outlined
            dense
            class="q-mb-md"
          />
          <q-input
            v-model="form.confirmPassword"
            type="password"
            label="Confirmer le mot de passe"
            outlined
            dense
            class="q-mb-md"
          />

          <!-- Champ Nationalité -->
          <q-select
            v-model="form.nationalite"
            label="Nationalité"
            outlined
            dense
            :options="nationalites"
            option-label="nom"
            option-value="code"
            emit-value
            map-options
          >
            <template v-slot:option="scope">
              <q-item v-bind="scope.itemProps">
                <q-item-section avatar>
                  <q-img
                    :src="scope.opt.drapeau"
                    style="width: 24px; height: 16px"
                  />
                </q-item-section>
                <q-item-section>
                  {{ scope.opt.nom }}
                </q-item-section>
              </q-item>
            </template>
          </q-select>

          <q-btn
            label="S'inscrire"
            type="submit"
            color="primary"
            unelevated
            class="full-width q-mt-md"
          />
        </q-form>
      </q-card-section>

      <!-- Lien de connexion -->
      <q-card-actions align="center">
        <q-btn
          flat
          label="Vous avez déjà un compte ? Se connecter"
          color="primary"
          @click="redirectToLogin"
        />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  name: "RegisterPage",
  setup() {
    const router = useRouter();
    const form = ref({
      nom: "",
      prenom: "",
      email: "",
      password: "",
      confirmPassword: "",
      nationalite: null,
    });

    const nationalites = [
      { code: "sn", nom: "Sénégal", drapeau: "https://flagcdn.com/w40/sn.png" },
      {
        code: "ci",
        nom: "Côte d'Ivoire",
        drapeau: "https://flagcdn.com/w40/ci.png",
      },
      { code: "ma", nom: "Maroc", drapeau: "https://flagcdn.com/w40/ma.png" },
      { code: "tn", nom: "Tunisie", drapeau: "https://flagcdn.com/w40/tn.png" },
      { code: "dz", nom: "Algérie", drapeau: "https://flagcdn.com/w40/dz.png" },
    ];

    const register = () => {
      alert("Inscription en cours...");
      // Implémentation de l'inscription avec Firebase ou autre
    };

    const redirectToLogin = () => {
      router.push("/connection");
    };

    return {
      form,
      nationalites,
      register,
      redirectToLogin,
    };
  },
};
</script>

<style scoped>
/* Style général */
.register-page {
  background: linear-gradient(135deg, #2575fc, #cbcbcb);
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Style de la carte */
.q-card-shadow {
  width: 400px;
  border-radius: 16px;
  background-color: #ffffff;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out;
}

/* Animation au survol */
.animated-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 16px 32px rgba(0, 0, 0, 0.4);
}

/* Bouton pleine largeur */
.full-width {
  width: 100%;
}
</style>

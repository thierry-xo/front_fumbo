<template>
  <q-page class="flex flex-center">
    <q-card class="q-pa-lg shadow-2" style="max-width: 500px; width: 100%">
      <q-card-section>
        <div class="text-h6 text-center">Ajouter un Ouvrage</div>
      </q-card-section>
      <q-card-section>
        <q-input
          v-model="book.title"
          label="Titre de l’ouvrage"
          outlined
          dense
        />
        <q-input
          v-model="book.author"
          label="Auteur"
          outlined
          dense
          class="q-mt-md"
        />
        <q-file
          v-model="book.cover"
          label="Couverture de l’ouvrage"
          outlined
          dense
          class="q-mt-md"
        />
        <q-input
          v-model="book.description"
          label="Description"
          type="textarea"
          outlined
          dense
          class="q-mt-md"
        />
      </q-card-section>
      <q-card-actions align="center">
        <q-btn label="Publier" color="primary" @click="submitBook" />
      </q-card-actions>
    </q-card>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      book: {
        title: "",
        author: "",
        cover: null,
        description: "",
      },
    };
  },
  methods: {
    submitBook() {
      console.log("Ouvrage ajouté:", this.book);
    },
  },
};
</script>

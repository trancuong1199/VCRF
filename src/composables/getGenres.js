import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getGenres = (genre) => {
  const genres = ref([]);
  const loading = ref(false);
  const fetchDataGenres = async () => {
    loading.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `competitions/?format=json&search=${genre}`,
        { ...optionsApi }
      );
      const data = await res.json();
      genres.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  };
  fetchDataGenres();
  return {
    genres,
    loading,
    fetchDataGenres,
  };
};

export default getGenres;

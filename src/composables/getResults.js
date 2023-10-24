import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getResults = (id) => {
  const results = ref([]);
  const loadingResults = ref(false);
  const fetchDataResults = async () => {
    loadingResults.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL + `results/?format=json&event=${id}`,
        { ...optionsApi }
      );
      const data = await res.json();
      results.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      loadingResults.value = false;
    }
  };
  fetchDataResults();
  return {
    results,
    loadingResults,
    fetchDataResults,
  };
};

export default getResults;

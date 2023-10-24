import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getNewsDetails = (id) => {
  const newsDetails = ref([]);
  const loading = ref(false);
  const fetchData = async () => {
    loading.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL + `news/${id}/?format=json`,
        { ...optionsApi }
      );
      const data = await res.json();
      newsDetails.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  };
  fetchData();
  return {
    newsDetails,
    loading,
    fetchData,
  };
};

export default getNewsDetails;

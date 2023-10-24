import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const getAbout = (id) => {
  const about = ref([]);
  const loading = ref(false);
  const fetchDataAbout = async () => {
    loading.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `evolutions/?format=json&category=${id}`,
        { ...optionsApi }
      );
      const data = await res.json();
      about.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  };
  fetchDataAbout();
  return {
    about,
    loading,
    fetchDataAbout,
  };
};

export default getAbout;

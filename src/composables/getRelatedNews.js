import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const getRelatedNews = (type, id) => {
  const relatedNews = ref([]);
  const loading = ref(false);
  const fetchDataRelated = async () => {
    loading.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `news/?format=json&page_size=10&category=${type}&exclude_id=${id}`,
        { ...optionsApi }
      );
      const data = await res.json();
      relatedNews.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  };

  fetchDataRelated();

  return {
    relatedNews,
    loading,
    fetchDataRelated,
  };
};

export default getRelatedNews;

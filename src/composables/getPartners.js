import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getPartners = (size) => {
  const partners = ref([]);
  const count = ref(1);
  const total = ref(0);
  const loadingPartners = ref(false);
  const fetchDataPartners = async () => {
    loadingPartners.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `partners/?format=json&page=${count.value}&page_size=${size}`,
        { ...optionsApi }
      );
      const data = await res.json();
      total.value = Math.ceil(data.count / size);
      partners.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingPartners.value = false;
    }
  };
  fetchDataPartners();
  const loadMore = async (countValue) => {
    if (partners.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataPartners();
  };
  return {
    partners,
    total,
    loadingPartners,
    fetchDataPartners,
    loadMore,
  };
};

export default getPartners;

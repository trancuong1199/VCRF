import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getDocs = (type) => {
  const docs = ref([]);
  const count = ref(6);
  const arrange = ref('-');
  const search = ref('');
  const loadingDocs = ref(false);
  const fetchDataDocs = async () => {
    loadingDocs.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `${type}/?format=json&ordering=${arrange.value}create_at&page_size=${count.value}&search=${search.value}`,
        { ...optionsApi }
      );
      const data = await res.json();
      docs.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingDocs.value = false;
    }
  };
  const loadMore = async () => {
    count.value += 6;
    await fetchDataDocs();
  };
  const handleArrange = async (type) => {
    arrange.value = type;
    await fetchDataDocs();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataDocs();
  };
  fetchDataDocs();
  return {
    docs,
    loadingDocs,
    fetchDataDocs,
    loadMore,
    handleArrange,
    handleSearch,
  };
};

export default getDocs;

import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getSearch = (searchValue) => {
  const search = ref([]);
  const count = ref(1);
  const total = ref(null);
  const loadingSearch = ref(false);
  const fetchDataSearch = async () => {
    loadingSearch.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `search/${searchValue}?format=json&page=${count.value}&page_size=6`,
        {
          ...optionsApi,
        }
      );
      const data = await res.json();
      total.value = data.total_pages;
      search.value = [...data.data];
    } catch (err) {
      console.log(err);
    } finally {
      loadingSearch.value = false;
    }
  };
  const loadMore = async (countValue) => {
    if (search.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataSearch();
    console.log(search.value);
  };
  fetchDataSearch();
  return {
    search,
    total,
    loadingSearch,
    fetchDataSearch,
    loadMore,
  };
};

export default getSearch;

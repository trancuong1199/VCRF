import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getRating = () => {
  const ratings = ref([]);
  const filtered = ref('rank');
  const search = ref('');
  const total = ref(null);
  const loadingRating = ref(false);
  const fetchDataRating = async () => {
    loadingRating.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `rating/?format=json&page_size=6&ordering=${filtered.value}&search=${search.value}`,
        { ...optionsApi }
      );
      const data = await res.json();
      total.value = Math.ceil(data.count / 6);
      ratings.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingRating.value = false;
    }
  };
  fetchDataRating();
  const handleFiltered = async (filteredValue) => {
    filtered.value = filteredValue;
    await fetchDataRating();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataRating();
  };
  return {
    ratings,
    total,
    loadingRating,
    fetchDataRating,
    handleFiltered,
    handleSearch,
  };
};

export default getRating;

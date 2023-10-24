import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getPhotos = () => {
  const photos = ref([]);
  const count = ref(1);
  const total = ref(null);
  const filtered = ref('');
  const arrange = ref('-');
  const search = ref('');
  const loadingPhotos = ref(false);
  const fetchDataPhotos = async () => {
    loadingPhotos.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `photos/?format=json&page=${count.value}&ordering=${arrange.value}created&search=${search.value}&category=${filtered.value}`,
        { ...optionsApi }
      );
      const data = await res.json();
      total.value = Math.ceil(data?.count / 6);
      photos.value = [...data?.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingPhotos.value = false;
    }
  };
  fetchDataPhotos();
  const handleFiltered = async (category) => {
    filtered.value = category;
    await fetchDataPhotos();
  };
  const handleArrange = async (arrangeValue) => {
    arrange.value = arrangeValue;
    await fetchDataPhotos();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataPhotos();
  };
  const loadMore = async (countValue) => {
    if (photos.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataPhotos();
  };
  return {
    photos,
    total,
    loadingPhotos,
    fetchDataPhotos,
    handleFiltered,
    handleArrange,
    handleSearch,
    loadMore,
  };
};

export default getPhotos;

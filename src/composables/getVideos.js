import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getVideos = () => {
  const videos = ref([]);
  const count = ref(1);
  const total = ref(null);
  const filtered = ref('');
  const arrange = ref('-');
  const search = ref('');
  const loadingVideos = ref(false);
  const fetchDataVideos = async () => {
    loadingVideos.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `videos/?format=json&page=${count.value}&ordering=${arrange.value}created&search=${search.value}&category=${filtered.value}`,
        { ...optionsApi }
      );
      const data = await res.json();
      total.value = Math.ceil(data?.count / 6);
      videos.value = [...data?.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingVideos.value = false;
    }
  };
  fetchDataVideos();
  const handleFiltered = async (category) => {
    filtered.value = category;
    await fetchDataVideos();
  };
  const handleArrange = async (arrangeValue) => {
    arrange.value = arrangeValue;
    await fetchDataVideos();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataVideos();
  };
  const loadMore = async (countValue) => {
    if (videos.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataVideos();
  };
  return {
    videos,
    total,
    loadingVideos,
    fetchDataVideos,
    handleFiltered,
    handleArrange,
    handleSearch,
    loadMore,
  };
};

export default getVideos;

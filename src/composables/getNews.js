import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getNews = (type) => {
  const news = ref([]);
  const count = ref(1);
  const total = ref(null);
  const search = ref('');
  const arrange = ref('-');
  const loadingNews = ref(false);
  const fetchDataNews = async () => {
    loadingNews.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `news/?format=json&ordering=${arrange.value}publication_date&page_size=6&page=${count.value}&category=${type}&search=${search.value}`,
        { ...optionsApi }
      );
      const data = await res.json();
      total.value = Math.ceil(data?.count / 6);
      news.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingNews.value = false;
    }
  };
  const loadMore = async (countValue) => {
    if (photos.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataNews();
  };
  const handleArrange = async (type) => {
    arrange.value = type;
    await fetchDataNews();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataNews();
  };
  fetchDataNews();

  return {
    news,
    total,
    loadingNews,
    fetchDataNews,
    loadMore,
    handleArrange,
    handleSearch,
  };
};

export default getNews;

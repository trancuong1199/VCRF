import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getOrganization = () => {
  const count = ref(1);
  const search = ref('');
  const subject = ref('');
  const total = ref(null);
  const organizations = ref([]);
  const loadingOrganization = ref(false);
  const fetchDataOrganization = async () => {
    loadingOrganization.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `groups/?format=json&page=${count.value}&page_size=6&search=${search.value}&subject=${subject.value}`,

        {
          ...optionsApi,
        }
      );
      const data = await res.json();
      total.value = Math.ceil(data.count / 6);
      organizations.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingOrganization.value = false;
    }
  };
  const loadMore = async (countValue) => {
    if (organizations.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataOrganization();
  };
  const handleFiltered = async (filteredValue) => {
    subject.value = filteredValue;
    await fetchDataOrganization();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataOrganization();
  };
  fetchDataOrganization();
  return {
    organizations,
    total,
    loadingOrganization,
    fetchDataOrganization,
    loadMore,
    handleFiltered,
    handleSearch,
  };
};

export default getOrganization;

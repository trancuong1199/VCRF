import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getMember = (type) => {
  const members = ref([]);
  const count = ref(1);
  const total = ref(null);
  const search = ref('');
  const object = ref('');
  const loadingMember = ref(false);
  const fetchDataMember = async () => {
    loadingMember.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `athletes/?format=json&page=${count.value}&page_size=6&search=${search.value}&category=${type}&object=${object.value}`,
        {
          ...optionsApi,
        }
      );
      const data = await res.json();
      console.log(data);
      total.value = Math.ceil(data.count / 6);
      members.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingMember.value = false;
    }
  };
  const loadMore = async (countValue) => {
    if (members.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataMember();
  };
  const handleFiltered = async (filteredValue) => {
    object.value = filteredValue;
    await fetchDataMember();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataMember();
  };
  fetchDataMember();
  return {
    members,
    total,
    loadingMember,
    fetchDataMember,
    loadMore,
    handleFiltered,
    handleSearch,
  };
};

export default getMember;

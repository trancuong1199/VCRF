import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getMembersOfGroup = (id) => {
  const count = ref(6);
  const search = ref('');
  const members = ref([]);
  const loadingMembers = ref(false);
  const fetchDataMember = async () => {
    loadingMembers.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `athletes/?format=json&page_size=${count.value}&search=${search.value}&clb=${id}`,
        {
          ...optionsApi,
        }
      );
      const data = await res.json();
      members.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingMembers.value = false;
    }
  };
  const loadMore = async () => {
    count.value += 6;
    await fetchDataMember();
  };
  const handleSearch = async (searchValue) => {
    search.value = searchValue;
    await fetchDataMember();
  };
  fetchDataMember();
  return {
    members,
    loadingMembers,
    fetchDataMember,
    loadMore,
    handleSearch,
  };
};

export default getMembersOfGroup;

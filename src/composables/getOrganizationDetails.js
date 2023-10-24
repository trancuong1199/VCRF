import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const getOrganizationDetails = (id) => {
  const organizationDetails = ref([]);
  const loading = ref(false);
  const fetchDataOrganizationDetails = async () => {
    loading.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `groups/?format=json&number_group=${id}`,
        {
          ...optionsApi,
        }
      );
      const data = await res.json();
      organizationDetails.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loading.value = false;
    }
  };
  fetchDataOrganizationDetails();
  return {
    organizationDetails,
    loading,
    fetchDataOrganizationDetails,
  };
};

export default getOrganizationDetails;

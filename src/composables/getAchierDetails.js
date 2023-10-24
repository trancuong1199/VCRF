import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getAchierDetails = (id) => {
  const achierDetails = ref([]);
  const loadingAchierDetails = ref(false);
  const fetchDataAchierDetails = async () => {
    loadingAchierDetails.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL +
          `achiers/?format=json&ordering=-year&number_athlete=${id}`,
        {
          ...optionsApi,
        }
      );
      const data = await res.json();
      achierDetails.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      loadingAchierDetails.value = false;
    }
  };
  fetchDataAchierDetails();
  return {
    achierDetails,
    loadingAchierDetails,
    fetchDataAchierDetails,
  };
};

export default getAchierDetails;

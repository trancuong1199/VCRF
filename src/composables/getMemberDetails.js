import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getMemberDetails = (id) => {
  const path = ref(`athletes/?format=json&number_athletes=${id}`);
  const membersDetails = ref([]);
  const loadingMember = ref(false);
  const fetchDataPersonal = async () => {
    loadingMember.value = true;
    try {
      const res = await fetch(import.meta.env.VITE_BACK_END_URL + path.value, {
        ...optionsApi,
      });
      const data = await res.json();
      membersDetails.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingMember.value = false;
    }
  };
  fetchDataPersonal();
  return {
    membersDetails,
    loadingMember,
    fetchDataPersonal,
  };
};

export default getMemberDetails;

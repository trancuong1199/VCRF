import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getEventDetails = (id) => {
  const eventDetails = ref([]);
  const loadingEvent = ref(false);
  const fetchDataEventDetails = async () => {
    loadingEvent.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL_LEGACY + `events/?id=${id}`,
        { ...optionsApi }
      );
      const data = await res.json();
      console.log(data);
      eventDetails.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      loadingEvent.value = false;
    }
  };
  fetchDataEventDetails();
  return {
    eventDetails,
    loadingEvent,
    fetchDataEventDetails,
  };
};

export default getEventDetails;

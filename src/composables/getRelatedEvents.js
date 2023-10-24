import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const getRelatedEvents = () => {
  const relatedEvents = ref([]);
  const loadingEvents = ref(false);
  const fetchDataRelated = async () => {
    loadingEvents.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL + `events/?format=json&page_size=10`,
        { ...optionsApi }
      );
      const data = await res.json();
      relatedEvents.value = [...data.results];
    } catch (err) {
      console.log(err);
    } finally {
      loadingEvents.value = false;
    }
  };

  fetchDataRelated();

  return {
    relatedEvents,
    loadingEvents,
    fetchDataRelated,
  };
};

export default getRelatedEvents;

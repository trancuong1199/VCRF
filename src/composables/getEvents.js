import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};
const getEvents = (status) => {
  const events = ref([]);
  const count = ref(1);
  const total = ref(null);
  const day = ref('');
  const month = ref('');
  const year = ref('');
  const loadingEvent = ref(false);
  const fetchDataEvents = async () => {
    loadingEvent.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL_LEGACY +
          `events/?page=${count.value}&page_size=6&status=${status}&day=${day.value}&month=${month.value}&year=${year.value}`,
        { ...optionsApi }
      );
      const data = await res.json();
      total.value = data?.total_pages;
      events.value = [...data.data];
    } catch (err) {
      console.log(err);
    } finally {
      loadingEvent.value = false;
    }
  };
  fetchDataEvents();
  const selectedEvents = async (dayValue, monthValue, yearValue) => {
    day.value = dayValue;
    month.value = monthValue;
    year.value = yearValue;
    await fetchDataEvents();
  };
  const loadMore = async (countValue) => {
    if (events.value.length !== 0) {
      count.value = countValue;
    } else {
      count.value = 1;
    }
    await fetchDataEvents();
  };
  return {
    events,
    total,
    loadingEvent,
    fetchDataEvents,
    selectedEvents,
    loadMore,
  };
};

export default getEvents;

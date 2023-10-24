import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getVideoDetails = (id) => {
  const video = ref([]);
  const loadingVideos = ref(false);
  const fetchDataVideoDetails = async () => {
    loadingVideos.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL + `videos/${id}/?format=json`,
        { ...optionsApi }
      );
      const data = await res.json();
      video.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      loadingVideos.value = false;
    }
  };
  fetchDataVideoDetails();
  return {
    video,
    loadingVideos,
    fetchDataVideoDetails,
  };
};

export default getVideoDetails;

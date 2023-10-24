import { ref } from 'vue';

const optionsApi = {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
  },
};

const getPhotoDetails = (id) => {
  const photos = ref([]);
  const loadingPhotos = ref(false);
  const fetchDataPhotosDetails = async () => {
    loadingPhotos.value = true;
    try {
      const res = await fetch(
        import.meta.env.VITE_BACK_END_URL + `photos/${id}/?format=json`,
        { ...optionsApi }
      );
      const data = await res.json();
      photos.value = data;
    } catch (err) {
      console.log(err);
    } finally {
      loadingPhotos.value = false;
    }
  };
  fetchDataPhotosDetails();
  return {
    photos,
    loadingPhotos,
    fetchDataPhotosDetails,
  };
};

export default getPhotoDetails;

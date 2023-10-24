import { reactive, ref } from 'vue';
const postContact = () => {
  const modalSuccess = ref(false);
  const closeModalSuccess = () => {
    modalSuccess.value = false;
  };
  const formData = reactive({
    name: '',
    email: '',
    phone: '',
    title: '',
    content: '',
  });

  const formErrors = reactive({
    name: '',
    email: '',
    phone: '',
  });
  function validateEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function handleEmailChange() {
    const { email } = formData;
    if (email && !validateEmail(email)) {
      formErrors.email = 'Invalid email format';
    } else {
      formErrors.email = '';
    }
  }

  function handlePhoneChange() {
    const { phone } = formData;
    if (phone && !/^[0-9]{10}$/.test(phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    } else {
      formErrors.phone = '';
    }
  }

  async function handleSubmit() {
    const { name, email, phone } = formData;

    if (name && !/^[a-zA-Z\s]+$/.test(name)) {
      formErrors.name = 'Name must contain only letters';
    } else {
      formErrors.name = '';
    }

    if (email && !validateEmail(email)) {
      formErrors.email = 'Invalid email format';
    } else {
      formErrors.email = '';
    }

    if (phone && !/^[0-9]{10}$/.test(phone)) {
      formErrors.phone = 'Phone number must be 10 digits';
    } else {
      formErrors.phone = '';
    }
    if (Object.values(formErrors).some((error) => error !== '')) {
      return;
    }
    try {
      const postData = {
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        title: formData.title,
        content: formData.content,
      };

      const response = await fetch(
        import.meta.env.VITE_BACK_END_URL + 'contacts/',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(postData),
        }
      );

      if (response.ok) {
        console.log('Form submitted successfully!');
        modalSuccess.value = true;
        resetForm();
      } else {
        console.error('Failed to submit form:', response.statusText);
      }
    } catch (error) {
      console.error('Error submitting form:', error);
    }
  }
  function resetForm() {
    formData.name = '';
    formData.email = '';
    formData.phone = '';
    formData.title = '';
    formData.content = '';
    formErrors.name = '';
    formErrors.email = '';
    formErrors.phone = '';
  }
  return {
    formData,
    modalSuccess,
    closeModalSuccess,
    formErrors,
    handleEmailChange,
    handlePhoneChange,
    handleSubmit,
  };
};
export default postContact;

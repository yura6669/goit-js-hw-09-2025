let formData = {
    email: '',
    message: '',
};

const form = document.querySelector('.feedback-form');

const emailInput = document.querySelector('input[name="email"]');

const messageInput = document.querySelector('textarea[name="message"]');

const LOCALSTORAGE_KEY = 'feedback-form-state';

const saveFormData = () => { 
    localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(formData));
}

const loadFormData = () => { 
    const savedData = localStorage.getItem(LOCALSTORAGE_KEY);
    if (savedData) {
        formData = JSON.parse(savedData);
        emailInput.value = formData.email || '';
        messageInput.value = formData.message || '';
    }
}

const handleInputChange = (event) => { 
    formData[event.target.name] = event.target.value;
    saveFormData();
}

const handleFormSubmit = (event) => { 
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert('Fill please all fields');
        return;
    }
    console.log(formData);
    localStorage.removeItem(LOCALSTORAGE_KEY);
    form.reset();
}

const handleFormReset = () => { 
    localStorage.removeItem(LOCALSTORAGE_KEY);
}

const init = () => { 
    loadFormData();
    form.addEventListener('input', handleInputChange);
    form.addEventListener('submit', handleFormSubmit);
    form.addEventListener('reset', handleFormReset);
}

init();
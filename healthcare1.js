const el = id => document.getElementById(id);
const messages = el('messages');
let currentLang = 'en';

const translations = {
  en: {
    title: 'UZIMA Healthcare Chatbot',
    patientInfoTitle: 'Patient Information',
    labels: { name: 'Full Name', phone: 'Phone Number', age: 'Age', gender: 'Gender' },
    chatbotTitle: 'Symptom Chatbot',
    langButton: 'Swahili',
    placeholders: {
      symptom: 'Type your symptoms',
      name: 'Enter your name',
      phone: 'e.g. +2547...',
      age: 'Enter age'
    },
    submit: 'Submit Details'
  },
  sw: {
    title: 'Chatbot ya Afya ya UZIMA',
    patientInfoTitle: 'Taarifa za Mgonjwa',
    labels: { name: 'Jina Kamili', phone: 'Nambari ya Simu', age: 'Umri', gender: 'Jinsia' },
    chatbotTitle: 'Chatbot ya Dalili',
    langButton: 'English',
    placeholders: {
      symptom: 'Andika dalili zako',
      name: 'Ingiza jina lako',
      phone: 'mf. +2547...',
      age: 'Ingiza umri'
    },
    submit: 'Tuma Taarifa'
  }
};

function updateLanguage() {
  const lang = translations[currentLang];
  el('title').textContent = lang.title;
  el('patient-info-title').textContent = lang.patientInfoTitle;
  el('label-name').textContent = lang.labels.name;
  el('label-phone').textContent = lang.labels.phone;
  el('label-age').textContent = lang.labels.age;
  el('label-gender').textContent = lang.labels.gender;
  el('chatbot-title').textContent = lang.chatbotTitle;
  el('lang-toggle').textContent = lang.langButton;
  el('symptom-input').placeholder = lang.placeholders.symptom;
  el('name').placeholder = lang.placeholders.name;
  el('phone').placeholder = lang.placeholders.phone;
  el('age').placeholder = lang.placeholders.age;
  el('submit-details').textContent = lang.submit;
}

el('lang-toggle').addEventListener('click', () => {
  currentLang = currentLang === 'en' ? 'sw' : 'en';
  updateLanguage();
});


el('submit-details').addEventListener('click', () => {
  const name = el('name').value.trim();
  const phone = el('phone').value.trim();
  const age = el('age').value.trim();
  const gender = el('gender').value;

  if (!name || !phone || !age || !gender) {
    alert(
      currentLang === 'sw'
        ? 'Tafadhali jaza maelezo yote.'
        : 'Please fill out all details.'
    );
    return;
  }

  // Save to localStorage (optional, to use later in chatbot)
  localStorage.setItem('patientDetails', JSON.stringify({ name, phone, age, gender }));

  // Open chatbot page in a new tab
  window.open('chatbot.html', '_blank');

function openNewTab() {
  const url = "https://agakhanhospitals.org/en/kenya"; // Replace with your actual link
  window.open(url, "_blank");
}
})

// Attach the function to the button
document.getElementById("click-me").addEventListener("click", openNewTab);

el('submit-details').addEventListener('click', () => {
  const name = el('name').value.trim();
  const phone = el('phone').value.trim();
  const age = el('age').value.trim();
  const gender = el('gender').value;

  if (!name || !phone || !age || !gender) {
    alert(
      currentLang === 'sw'
        ? 'Tafadhali jaza maelezo yote.'
        : 'Please fill out all details.'
    );
    return;
  }

  alert(
    currentLang === 'sw'
      ? `Taarifa zimehifadhiwa!\nJina: ${name}\nSimu: ${phone}`
      : `Details submitted!\nName: ${name}\nPhone: ${phone}`
  );
  
});
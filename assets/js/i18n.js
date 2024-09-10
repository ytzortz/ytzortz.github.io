// of course this is not the real i18n. More like a lightweight, not-compicated version of it.

document.addEventListener('DOMContentLoaded', () => {
   // const languageSelector = document.getElementById('language-selector');
    const elementsToTranslate = document.querySelectorAll('[data-translate]');
  
   // languageSelector.addEventListener('change', (event) => {
   //   const selectedLanguage = event.target.value;
   //   loadTranslations(selectedLanguage);
   // });
  
    const loadTranslations = (language) => {
      fetch(`assets/js/translations/${language}.json`)
        .then(response => response.json())
        .then(translations => {
          elementsToTranslate.forEach(element => {
            const key = element.getAttribute('data-translate');
            element.textContent = translations[key];
          });
        })
        .catch(error => {
          console.error('Error loading translation:', error);
        });
    };
  
    // Set initial language
    // ayto prepei na allaxei kanonika. Na pairnei to default value apo to language selector
    const initialLanguage = "gr";

      // Event listeners for flag icons
    document.getElementById('en-flag').addEventListener('click', () => {
      loadTranslations('en');
    });

    document.getElementById('gr-flag').addEventListener('click', () => {
      loadTranslations('gr');
    });

  // Set initial language to English
    loadTranslations('en');
    // loadTranslations(initialLanguage);
  });
  
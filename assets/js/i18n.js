// of course this is not the real i18n. More like a lightweight, not-compicated version of it.

const TRANSLATIONS = {
  en: {
    "hello-world":"Hello, world!",
    "name":"I am Ioannis Tzortzakis",
    "name-info":"Name:",
    "name-info-2":"Ioannis Tzortzakis",
    "profil-info":"Profile:",
    "about-me":"About me",
    "intro-part-1":"I'm Ioannis Tzortzakis, but you can call me Yiannis. I'm a Software Engineer based in Greece and a Computer Science graduate from the University of Crete ",
    "intro-part-2a":". I'm the co-founder of ",
    "intro-part-2b":", where we build custom software solutions and create and promote websites and e-shops. Out of that work grew our flagship product, ",
    "intro-part-2c":". It's a complete booking and fleet-management platform for boats and water sports that I'm proud to be part of.",
    "intro-part-3":"",
    "paragraph-info":"I love coding and I'm constantly picking up new skills. My goal is to make meaningful contributions to the projects I work on and deliver quality work that actually makes a difference.",
    "cv":"Download CV",
    "software-engineer":"I build custom software solutions end to end for individual clients and businesses. I care about solving real problems and delivering quality products that hold up in production.",
    "web-development":"Like the look of this page? I design, build, and promote websites (Google & Meta ads) and e-shops. Each project is tailored to fit your brand and your needs.",
    "entre":"I co-founded CodevvaLabs and Kaeeky. I'm always looking to learn, build, and grow. I love seeing great ideas turning into real products.",
    "say-hello":"Say Hello",
    "feel-free":"Feel free to contact me for inquiries, collaborations, or just to say hello. I'm looking forward to hearing from you!",
    "get-in-touch":"Get in Touch",
    "message-sent":"Your message has been sent. Thank you!",
    "send-message":"Send Message",
    "kaeeky-title":"Kaeeky",
    "kaeeky-category":"Web Application",
    "thank-you-note":"Thank you for playing 😊",
    "mobile-game-note":"In the desktop version, there's a game here. And fireworks. And an elephant. Well, not quite an elephant, but you get the idea. You're missing out 😊"
  },
  gr: {
    "hello-world":"Hello, world!",
    "name":"Είμαι ο Γιάννης Τζωρτζάκης",
    "name-info":"Όνομα:",
    "name-info-2":"Ιωάννης Τζωρτζάκης",
    "profil-info":"Ειδικότητα:",
    "about-me":"Σχετικά",
    "intro-part-1":"Είμαι ο Γιάννης Τζωρτζάκης, Software Engineer με έδρα την Ελλάδα και απόφοιτος του Τμήματος Επιστήμης Υπολογιστών του Πανεπιστημίου Κρήτης ",
    "intro-part-2a":". Είμαι συνιδρυτής της ",
    "intro-part-2b":", όπου φτιάχνουμε custom λύσεις λογισμικού και αναλαμβάνουμε την κατασκευή και προώθηση websites και e-shops. Η ναυαρχίδα προϊόν όμως, είναι το ",
    "intro-part-2c":", μια ολοκληρωμένη πλατφόρμα κρατήσεων και διαχείρισης στόλου για σκάφη και water sports.",
    "intro-part-3":"",
    "paragraph-info":"Μου αρέσει ο προγραμματισμός και επιδιώκω να εξελίσσομαι διαρκώς. Στόχος μου ειναι να παραδίδω ποιοτική δουλειά που κάνει πραγματικά την διαφορά.",
    "cv":"Το Βιογραφικό μου",
    "software-engineer":"Φτιάχνω custom λύσεις λογισμικού από την αρχή ως το τέλος για ιδιώτες και επιχειρήσεις. Στόχος μου είναι τα προϊόντα που παραδίδω να είναι ποιοτικά, με αντοχή στην παραγωγή.",
    "web-development":"Σου αρέσει το design αυτής της σελίδας; Σχεδιάζω, κατασκευάζω και προωθώ websites (Google & Meta ads) και e-shops. Κάθε project προσαρμόζεται στο brand και στις ανάγκες σου.",
    "entre":"Είμαι συνίδρυτης στη CodevvaLabs και στο Kaeeky. Πάντα ψάχνω να μαθαίνω, να χτίζω και να εξελίσσομαι. Χαίρομαι να βλέπω καλές ιδέες να γίνονται πραγματικά προϊόντα.",
    "say-hello":"Πείτε ενα γεια",
    "feel-free":"Μη διστάσετε να επικοινωνήσετε μαζί μου για ερωτήσεις, συνεργασίες, ή απλά για να πείτε ένα γεια",
    "get-in-touch":"Επικοινωνία",
    "message-sent":"Το μήνυμα σας μόλις στάλθηκε!",
    "send-message":"Αποστολή Μηνύματος",
    "kaeeky-title":"Kaeeky",
    "kaeeky-category":"Web Application",
    "thank-you-note":"Ευχαριστώ που έπαιξες 😊",
    "mobile-game-note":"Στην desktop έκδοση, υπάρχει ένα παιχνίδι εδώ. Και πυροτεχνήματα. Και ένας ελέφαντας. Βασικά όχι ακριβώς ελέφαντας, αλλά καταλαβαίνεις τι εννοώ. Χάνεις πράγματα 😊"
  }
};

document.addEventListener('DOMContentLoaded', () => {
    const elementsToTranslate = document.querySelectorAll('[data-translate]');

    const loadTranslations = (language) => {
      const translations = TRANSLATIONS[language];
      elementsToTranslate.forEach(element => {
        const key = element.getAttribute('data-translate');
        element.textContent = translations[key];
      });
      document.body.setAttribute('data-lang', language);
    };

      // Event listeners for flag icons
    document.getElementById('en-flag').addEventListener('click', () => {
      loadTranslations('en');
    });

    document.getElementById('gr-flag').addEventListener('click', () => {
      loadTranslations('gr');
    });

  // Set initial language to English
    loadTranslations('en');
  });

import i18n from "i18next";
import { initReactI18next } from "react-i18next";

i18n.use(initReactI18next).init({
  debug: true,
  fallbackLng: "en",
  interpolation: {
    escapeValue: false, // not needed for react as it escapes by default
  },
  // language resources
  resources: {
    en: {
      translation: {
        welcome: "Welcome to React",
        subtitle: "PhD | Immunologist | Pharmacist",
        aboutmeTitle: "About me",
        aboutmePart1:
          "Curious and ambitious individual with a sound scientific background in pharmaceutical sciences and immunology.",
        aboutmePart2:
          "Fascinated by the vast variety of challenges occurring during development and translation of new medicines and technologies.",
        experienceTitle: "Experience",
        experienceSub1: "Volunteering And Cultural Trip",
        experienceSub2: "PhD candidate",
        experienceSub3: "Pharmacist",
        experienceSub4: "Pharmacist",
        experienceSub5: "Pharmacist Assistant",
        experienceDate1: "Oct 2022 - Mar 2023",
        experienceDate2: "Oct 2017 - Sept 2022 | Full time",
        experienceDate3: "Nov 2018 - Sept 2022 | Part time",
        experienceDate4: "Oct 2016 - Oct 2018 | Full time",
        experienceDate5: "Nov 2015 - Sept 2016 | Full time",
        experienceLocation1: "Lombok, Indonesia",
        experienceLocation2: "Clinical Immunology, Department of Biomedicine",
        experienceLocation3: "Apotheke im Spital Aarau",
        experienceLocation4: "Bahnhof Apotheke at Zurich Main Station",
        experienceLocation5: "Bahnhof Apotheke at Zurich Main Station",
        experienceAddress1: "",
        experienceAddress2: "Basel, Switzerland",
        experienceAddress3: "Aarau, Switzerland",
        experienceAddress4: "Zurich, Switzerland",
        experienceAddress5: "Zurich, Switzerland",

        experienceDetail1:
          "English teacher for primary school children in rural area.",
        experienceDetail2:
          "Investigating the mechanisms involved in the autoimmune disease systemic lupus erythematodes and the effect of anti-C1q autoantibodies on immune cells.",
        experienceDetail3:
          "// Responsible pharmacist during off-hours (night and Sundays) // Medicine supply for emergency patients      // Validation of prescriptions         // Consulting patients (Rx and OTC)",
        experienceDetail4:
          "// Responsible for off-label dosing in narcotics and paediatrics        // Preparation of pharmaceutical assistant apprentices for their final exam        // Production of custom medicines for patients with special needs (GMP laboratory)        // Validation of prescriptions         // Consulting patients (Rx and OTC)",

        educationTitle: "Academic education",
        educationSub1: "PhD",
        educationSub2: "Swiss Federal Exam | Pharmacist",
        educationSub3: "MSc in Pharmaceutical Sciences",
        educationSub4: "BSc in Pharmaceutical Sciences",
        educationDate1: "Oct 2017 - Sept 2022",
        educationDate2: "Sept 2016",
        educationDate3: "Sept 2014 - Aug 2016",
        educationDate4: "Sept 2010 - Aug 2014",
        educationLocation1: "University of Basel",
        educationLocation2: "ETH Zurich",
        educationLocation3: "ETH Zurich",
        educationLocation4: "ETH Zurich",
        educationAddress1: "Basel, Switzerland",
        educationAddress2: "Zurich, Switzerland",
        educationAddress3: "Zurich, Switzerland",
        educationAddress4: "Zurich, Switzerland",
        educationDetail1:
          "Immunological consequences of C1q and anti-C1q immune complexes in secondary inflammation.",
        educationDetail2: "",
        educationDetail3:
          "Investigation of secondary structure content of designer peptides.",
        educationDetail4: "",
      },
    },
    de: {
      translation: {
        welcome: "Chào mừng đến với bình nguyên vô tận",
        subtitle: "Dr. phil-nat | Immunologe | Apotheker",
        aboutmeTitle: "Über mich",
        aboutmePart1:
          "Neugierige und ehrgeizige Persönlichkeit mit fundiertem wissenschaftlichem Hintergrund in pharmazeutischen Wissenschaften und Immunologie.",
        aboutmePart2:
          "Fasziniert von den vielfältigen Herausforderungen, die bei der Entwicklung und Umsetzung neuer Arzneimittel und Technologien auftreten.",
        experienceTitle: "Arbeitserfahrung",
        experienceSub1: "Freiwilligenarbeit und Kulturreise",
        experienceSub2: "Doktorand",
        experienceSub3: "Apotheker",
        experienceSub4: "Apotheker",
        experienceSub5: "Apotheker Assistent",
        experienceDate1: "Okt 2022 - Mar 2023",
        experienceDate2: "Okt 2017 - Sept 2022 | Vollzeit",
        experienceDate3: "Nov 2018 - Sept 2022 | Teilzeit",
        experienceDate4: "Okt 2016 - Okt 2018 | Vollzeit",
        experienceDate5: "Nov 2015 - Sept 2016 | Vollzeit",
        experienceLocation1: "Lombok, Indonesien",
        experienceLocation2: "Klinische Immunologie, Departement Biomedizin",
        experienceLocation3: "Apotheke im Spital Aarau",
        experienceLocation4: "Bahnhof Apotheke im Hauptbahnhof Zürich",
        experienceLocation5: "Bahnhof Apotheke im Hauptbahnhof Zürich",
        experienceAddress1: "",
        experienceAddress2: "Basel, Schweiz",
        experienceAddress3: "Aarau, Schweiz",
        experienceAddress4: "Zürich, Schweiz",
        experienceAddress5: "Zürich, Schweiz",

        experienceDetail1:
          "Englischlehrer für Klein- und Grundschulkinder in ländlichem Gebiet.",
        experienceDetail2:
          "Untersuchung der Mechanismen der Autoimmunerkrankung systemischer Lupus erythematodes und der Wirkung von Anti-C1q-Autoantikörpern auf Immunzellen.",
        experienceDetail3:
          "// Verantwortlicher Apotheker außerhalb der Geschäftszeiten (nachts und sonntags) // Medikamentenversorgung für Notfallpatienten // Validierung von Rezepten // Beratung von Patienten (Rx und OTC)",
        experienceDetail4:
          "// Verantwortlich für die Off-Label-Dosierung bei Betäubungsmittel- und pädiatrischen Patienten // Vorbereitung der Lernenden auf die Abschlussprüfung Fachfrau / Fachmann Apotheke // Herstellung von Rezepturen für Patienten mit besonderen Bedürfnissen (GMP-Labor) // Validierung von Rezepten // Beratung von Patienten (Rx und OTC)",

        educationTitle: "Akademische Ausbildung",
        educationSub1: "Doktorat",
        educationSub2: "Staatsexamen | Apotheker",
        educationSub3: "Master in Pharmazeutischen Wissenschaften",
        educationSub4: "Bachelor in Pharmazeutischen Wissenschaften",
        educationDate1: "Okt 2017 - Sept 2022",
        educationDate2: "Sept 2016",
        educationDate3: "Sept 2014 - Aug 2016",
        educationDate4: "Sept 2010 - Aug 2014",
        educationLocation1: "Universität Basel",
        educationLocation2: "ETH Zürich",
        educationLocation3: "ETH Zürich",
        educationLocation4: "ETH Zürich",
        educationAddress1: "Basel, Schweiz",
        educationAddress2: "Zürich, Schweiz",
        educationAddress3: "Zürich, Schweiz",
        educationAddress4: "Zürich, Schweiz",
        educationDetail1:
          "Immunologische Folgen von C1q und Anti-C1q-Immunkomplexen bei sekundären Entzündungen.",
        educationDetail2: "",
        educationDetail3:
          "Untersuchung des Sekundärstrukturgehalts von Designerpeptiden.",
        educationDetail4: "",
      },
    },
  },
});

export default i18n;

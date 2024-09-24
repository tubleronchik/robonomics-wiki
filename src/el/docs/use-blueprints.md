---
title: Πώς να Χρησιμοποιήσετε Σχέδια
contributors: [tubleronchik]
tools:
  - Home Assistant 2022.11.3
    https://github.com/home-assistant/core
---

Σε αυτό το άρθρο θα μάθετε πώς να προσθέσετε αυτοματισμούς σχεδίων στο Home Assistant σας και πώς να τον ρυθμίσετε.

## Αυτοματισμοί Σχεδίων

Κάποια σχέδια είναι ήδη εγκατεστημένα. Οι αυτοματισμοί που βασίζονται σε τέτοια σχέδια χρειάζεται μόνο να ρυθμιστούν. Στη διεπαφή ιστού μπορείτε να βρείτε τα προεγκατεστημένα σχέδια στο `Ρυθμίσεις/Αυτοματισμοί & Σκηνές`. Ανοίξτε τα `Σχέδια` και βρείτε το σχέδιο που θέλετε να χρησιμοποιήσετε. Σε αυτό το παράδειγμα θα χρησιμοποιηθεί το `Φως που ενεργοποιείται από Κίνηση`.

{% roboWikiPicture {src:"docs/home-assistant/blueprint-settings.jpg", alt:"Ρυθμίσεις Σχεδίου"} %}{% endroboWikiPicture %}

Κάντε κλικ στο `Δημιουργία Αυτοματισμού` για να ανοίξετε τον επεξεργαστή αυτοματισμού. Δώστε ένα όνομα, επιλέξτε ένα σχέδιο που θα χρησιμοποιήσετε (`Φως που ενεργοποιείται από Κίνηση` στην περίπτωσή μας). Στη συνέχεια, πρέπει να επιλέξετε αισθητήρα κίνησης και λάμπα. Όταν ολοκληρωθεί η ρύθμιση, κάντε κλικ στο `Αποθήκευση`.

{% roboWikiPicture {src:"docs/home-assistant/automation-configure.jpg", alt:"Ρύθμιση Αυτοματισμού"} %}{% endroboWikiPicture %}

Αν θέλετε να κάνετε αλλαγές, μπορείτε να το βρείτε πηγαίνοντας στο `Ρυθμίσεις/Αυτοματισμοί & Σκηνές` και στη συνέχεια `Αυτοματισμοί`.

{% roboWikiPicture {src:"docs/home-assistant/automations-all.jpg", alt:"Λίστα Αυτοματισμών"} %}{% endroboWikiPicture %}

## Εισαγωγή Σχεδίων

Το Home Assistant μπορεί να εισάγει σχέδια από τα φόρουμ του Home Assistant, το GitHub και τα GitHub gists. Η λίστα όλων των Σχεδίων βρίσκεται στο [Ανταλλαγή Σχεδίων](https://community.home-assistant.io/c/blueprints-exchange/53). Αφού επιλέξετε, πηγαίνετε στο `Ρυθμίσεις/Αυτοματισμοί & Σκηνές` και ανοίξτε τα `Σχέδια`. Κάντε κλικ στο `Εισαγωγή Σχεδίου` και εισαγάγετε το URL του επιλεγμένου σχεδίου. Στη συνέχεια, κάντε κλικ στο `ΠΡΟΕΠΙΣΚΟΠΗΣΗ ΣΧΕΔΙΟΥ`. Σε αυτήν την περίπτωση θα χρησιμοποιήσουμε το [Ανίχνευση & Ειδοποίηση για χαμηλή στάθμη μπαταρίας για όλους τους αισθητήρες μπαταρίας](https://community.home-assistant.io/t/low-battery-level-detection-notification-for-all-battery-sensors/258664).

{% roboWikiPicture {src:"docs/home-assistant/importing-blueprint.jpg", alt:"Εισαγωγή Σχεδίου"} %}{% endroboWikiPicture %}

Αυτό θα φορτώσει το σχέδιο και θα εμφανίσει μια προεπισκόπηση στο παράθυρο εισαγωγής. Μπορείτε να αλλάξετε το όνομα και να ολοκληρώσετε την εισαγωγή. Κάντε κλικ στο `Δημιουργία Αυτοματισμού` για να ανοίξετε τον επεξεργαστή αυτοματισμού. Εδώ μπορείτε να ρυθμίσετε τις παραμέτρους του αυτοματισμού και να προσθέσετε ενέργειες για να λάβετε ειδοποιήσεις.

{% roboWikiPicture {src:"docs/home-assistant/configure-battery-blueprint.jpg", alt:"Ρύθμιση Σχεδίου Μπαταρίας"} %}{% endroboWikiPicture %}
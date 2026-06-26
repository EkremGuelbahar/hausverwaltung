function runDemo() {
  const steps = [
    document.getElementById("step1"),
    document.getElementById("step2"),
    document.getElementById("step3"),
    document.getElementById("step4")
  ];

  const output = document.getElementById("output");

  steps.forEach(step => step.classList.remove("active"));
  output.innerText = "Workflow wird gestartet...";

  steps.forEach((step, index) => {
    setTimeout(() => {
      step.classList.add("active");

      if (index === steps.length - 1) {
        output.innerText =
`Extrahierte Daten:

Dokumenttyp: Schadensmeldung
Mieter: Max Mustermann
Objekt: Musterstraße 12, Duisburg
Problem: Wasserschaden Badezimmer
Priorität: Hoch

Empfohlene Aktion:
Sanitärdienst kontaktieren und Vorgang im System anlegen.`;
      }
    }, (index + 1) * 700);
  });
}

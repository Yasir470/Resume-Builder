// Function to toggle visibility of sections with icons
function toggleSection(sectionId) {
    const section = document.getElementById(sectionId);
    const icon = document.getElementById(`icon-${sectionId.split('-')[1]}`);
  
    // Toggle display
    if (section.classList.contains("hidden")) {
      section.classList.remove("hidden");
      icon.textContent = "[-]"; // Change icon to collapse
    } else {
      section.classList.add("hidden");
      icon.textContent = "[+]"; // Change icon to expand
    }
  }
  
  
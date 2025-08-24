function loadMaps() {
  const container = document.getElementById("container");
  const iframe = document.createElement('iframe');

  Object.assign(iframe, {
    width: "600",
    height: "450",
    src: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.1843061810373!2d11.578489399999999!3d48.1452519!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x479e75001b41a4df%3A0x6b8e8e906d2ca7bd!2sBAR%20UNO!5e0!3m2!1sde!2sde!4v1756027960406!5m2!1sde!2sde",
    title: "Google Maps",
    referrerPolicy: "no-referrer-when-downgrade"
  });
  iframe.allowFullscreen = true;
  iframe.style.display = "none"; // hide until loaded

  iframe.addEventListener("load", () => {
    document.getElementById("maps-cookie-consent-overlay").style.display = "none";
    iframe.style.display = "block";
  });

  container.appendChild(iframe);
}

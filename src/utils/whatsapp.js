export function openWhatsApp(message) {
    const phoneNumber = "2349031576915"; // Your WhatsApp number

    const encodedMessage = encodeURIComponent(message);

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

    window.open(whatsappUrl, "_blank");
}
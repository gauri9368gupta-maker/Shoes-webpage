// =======================
const sections = document.querySelectorAll(
    ".img,.rupees,.main-div,.photos,.grey,.black-bg"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

}, {
    threshold: 0.2
});

sections.forEach(section => {

    observer.observe(section);

});

// =====================
// add pricing data
// ========================
const pricing = {
    INR: {
        Starter: 999,
        Professional: 1999,
    },

    USD: {
        Starter: 12,
        Professional: 24,
    },

    EUR: {
        Starter: 10,
        Professional: 20,
    },
};

let billing = "monthly";

// ========================
// select the lements
// ====================
const currency = document.getElementById("currency");

const starterPrice = document.getElementById("starterPrice");

const proPrice = document.getElementById("proPrice");

const monthlyBtn = document.getElementById("monthlyBtn");

const annualBtn = document.getElementById("annualBtn");

// =================================
// create update function
// ===============================
function updatePricing() {

    const selectedCurrency = currency.value;

    let starter = pricing[selectedCurrency].Starter;

    let pro = pricing[selectedCurrency].Professional;

    if (billing === "annual") {

        starter = Math.round(starter * 12 * 0.8);

        pro = Math.round(pro * 12 * 0.8);

    }

    let symbol = "₹";

    if (selectedCurrency === "USD") symbol = "$";

    if (selectedCurrency === "EUR") symbol = "€";

    starterPrice.innerHTML =
        `${symbol}${starter}<span>/${billing === "monthly" ? "mo" : "yr"}</span>`;

    proPrice.innerHTML =
        `${symbol}${pro}<span>/${billing === "monthly" ? "mo" : "yr"}</span>`;

}

// ==============================
// currency dropdown
// ============================
currency.addEventListener("change", updatePricing);

// ============================
// monthly button
// =========================
monthlyBtn.addEventListener("click", () => {

    billing = "monthly";

    monthlyBtn.classList.add("active-toggle");

    annualBtn.classList.remove("active-toggle");

    updatePricing();

});

// =====================
// annual button
// ====================
annualBtn.addEventListener("click", () => {

    billing = "annual";

    annualBtn.classList.add("active-toggle");

    monthlyBtn.classList.remove("active-toggle");

    updatePricing();

});

// ===========================
// initial call
// ========================
updatePricing();

// ========================
// footer
// ========================
const subscribeBtn = document.getElementById("subscribeBtn");
const email = document.getElementById("email");
const agree = document.getElementById("agree");
const message = document.getElementById("message");

subscribeBtn.addEventListener("click", () => {

    if (email.value.trim() === "") {
        message.innerHTML = "Please enter your email.";
        message.style.color = "red";
        return;
    }

    if (!agree.checked) {
        message.innerHTML = "Please accept the checkbox.";
        message.style.color = "red";
        return;
    }

    message.innerHTML = "🎉 Thank you for subscribing!";
    message.style.color = "green";

    email.value = "";
    agree.checked = false;

});

// ========================
// faqs
// ======================
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach(item => {

    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {

        faqItems.forEach(faq => {

            if (faq !== item) {
                faq.classList.remove("active");
            }

        });

        item.classList.toggle("active");

    });

});

// ======================
// Mobile Menu
// ======================

const menuBtn = document.getElementById("menuBtn");
const navLinks = document.getElementById("navLinks");

// Toggle menu
menuBtn.addEventListener("click", (e) => {

    e.stopPropagation(); // Prevent document click

    navLinks.classList.toggle("show-menu");

});

// Prevent menu from closing when clicking inside it
navLinks.addEventListener("click", (e) => {

    e.stopPropagation();

});

// Close menu when clicking anywhere on the page
document.addEventListener("click", () => {

    navLinks.classList.remove("show-menu");

});

document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

    });

});

// close menu after clicking link
document.querySelectorAll(".nav-links a").forEach(link => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show-menu");

    });

});






const yearEl = document.getElementById("year");

const nav = document.getElementById("nav");
const menuBtn = document.getElementById("menuBtn");
const mobileMenu = document.getElementById("mobileMenu");

const featureGrid = document.getElementById("featureGrid");
const hoursList = document.getElementById("hoursList");

const ctaBtn = document.getElementById("ctaBtn");
const callBtn = document.getElementById("callBtn");

const phoneLink = document.getElementById("phoneLink");
const addressLink = document.getElementById("addressLink");
const emailLink = document.getElementById("emailLink");

const heading = document.getElementById("heroHeading");
const heroSubText = document.getElementById("heroSubText");


const serviceModal = document.getElementById("serviceModal");

const serviceModalOverlay = document.getElementById("serviceModalOverlay");

const serviceModalClose = document.getElementById("serviceModalClose");

const serviceModalTitle = document.getElementById("serviceModalTitle");

const serviceModalPrice = document.getElementById("serviceModalPrice");
const serviceModalList = document.getElementById("serviceModalList");



const shopInfo = {
    name: "Vintage Barbershop",
    address: "123 Main ST , Your City",
    phoneDisplay: "5551234567",
    phoneRaw: "5551234567",
    email: "hello@vintagebarbershop.com"
};



const navLinks = [
    {label: "Home", href: "#hero"},
    {label:"Services", href: "#features"},
    {label:"Book", href: "#cta"},
    {label: "Contact", href: "#footer"}
];


const services = [
    {
        id: 1,
        title: "Classic Haircut",
        image: "assets/images/feauture-1.jpg",
        alt: "classic Haircut",
        description: "Timeless cuts with modern precision tailored to your style. ",
        price:25,
        popular: true,
        details: [
            "Consultation with your barber before the cut begins.",
            "Hair sectioning and shape-up based on your preffered style.",
            "Professional clippers , trimmers, and shears used for precison.",
            "neckline cleanup.",
            "light styling."
        ]
    },
    {
        id: 2,
        title: "Beard Trim.",
        image: "assets/images/feature-4.jpeg",
        alt: "Beard trim",
        description: " Shape, Line-up and refine your beard for a clean finish",
        price: 15,
        popular: false,
        details: [
"Beard assessment and shaping based on face structure.",
            "Line-up around cheeks, jawline, and neckline.",
            "Trimmers and detail tools used for crisp edges.",
            "Conditioning beard product may be applied for softness.",
            "Final symmetry check for a polished finish."
        ]
    },
    {
        id: 3,
        title: "Straight Razor Shave",
        image: "assets/images/features-3.jpeg",
        alt: "Straight Razor shave",
        description: "Hot towel, smooth shave, and classic barbershop experience.",
        price: 30,
        popular: true,
        details: [
            "Hot towel prep to soften facial hair and open pores.",
            "Premium shaving cream or lather applied to protect the skin.",
            "Straight razor shave performed with careful detailing.",
            "Second hot towel may be used for comfort and cleanup.",
            "Aftershave or soothing skin product applied after service."
        ]
    },
    {
        id: 4,
        title: "Fade and style",
        image: " assets/images/feature-2.jpeg",
        alt: "Fade haircut",
        description: " A clean fade with finishing detail for a sharp, modern look.",
        price: 35,
        popular: false,
        details: [
            "Style consultation before clipper work begins.",
            "Fade blended to your preferred level and finish.",
            "Detailing around temples, neckline, and beard area if needed.",
            "Scissors and clipper-over-comb may be used for texture.",
            "Styling product added to complete the final look."
        ]
    },
    {
        id: 5,
        title: "kids cut",
        image: "assets/images/feature-1.jpg",
        alt: "Kids Haircut",
        description: "clean, comfortable haircut service for younger clients",
        price: 20,
        popular: false,
        details: [
            "Simple consultation with child and parent if needed.",
            "Age-appropriate haircut with comfort in mind.",
            "Careful clipper and scissor work for a clean finish.",
            "Light cleanup around the neckline and ears.",
            "Styled neatly before leaving the chair."
        ]
    },
    {
        id: 6,
        title: "Head Shave",
        image: "assets/images/feature-3.jpg",
        alt: "head Shave",
        description: "Smooth head shave with classic barbershop treatment",
        price: 28,
        popular: true,
        details: [
            "Scalp prep with warm towel treatment.",
            "Protective shave product applied before razor work.",
            "Close shave performed for a smooth finish.",
            "Scalp cleaned and checked for even consistency.",
            "Moisturizing scalp product applied after the shave."
        ]
    }
];


const buisnessHours = [
    { day: "Monday", open: 9, close: 19},
    { day: "Tuesday", open: 9, close: 19},
    { day: "Wednesday", open: 9, close: 19},
    { day: "Thursday", open: 9, close: 19},
    { day: "Friday", open: 9, close: 19},
    { day: "Saturday", open: 10, close: 17},
    { day: "Sunday", open: 0, close: 0},
];


const setCurrentYear = () => {

    if (!yearEl) return;

    yearEl.textContent = new Date().getFullYear();

};

const formatHour = (hour) => {
    if (hour === 0) return "closed";
    if (hour === 12) return "12pm";
    if (hour > 12) return 'S{hour - 12}pm';
    return '${hour}am';
};

let isMenuOpen = false;

const toggleMobileMenu = () => {
    if(!mobileMenu) return;

    if (!isMenuOpen) {
        mobileMenu.classList.add("is-open");
        isMenuOpen = true;
    } else {
        mobileMenu.classList.remove("is-open");
        isMenuOpen = false;

    }
};

const closeMobileMenu = () => {
    if (!mobileMenu) return;
    mobileMenu.classList.remove("is-open");
    isMenuOpen = false;
};

const updateHeadingText = (newText) => {
    if (!heading) return;
    heading.textContent = newText;
};

const updateSubtext = (newText) => {
     if (!heroSubText) return;
     heroSubText.textContent = newText;
};



const openServiceModal = (serviceId) => {
    if (!serviceModal || !serviceModalTitle || !serviceModalPrice || !serviceModalList) return;

    const selectedService = services.find((service) => service.id === Number(serviceId));
    if (!slectedService) return;

    serviceModalTitle.textContent = selectedService.title;
    serviceModalPrice.textContent = '$${selectedService.price}';
    serviceModalList.textContent = selectedService.details
        .map((detail) => '<li>${detail}</li>')
        .join("");

        serviceModal.classList.add("is-open");
        serviceModal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
};

const closeServiceModal = () => {
    if (!serviceModal) return;

    serviceModal.classList.remove(is-open);
    serviceModal.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
};


const renderNavigation = () => {
    if (nav) {
        nav.innerHTML = navLinks
        .map((link) => '<a href="${link.href}" class="mobile-link">${link.label}</a>')
        .join("");
    }

    if(mobileMenu) {
        mobileMenu.menu.innerHTML =navLinks
        .map((link) => '<a href="${link.href}" class="mobile-link">${link.label}</a>')
        .join("");
    }
};

const renderServices = () => {
    if (!featuregrid) return;

    const servicesHTML = services
    .map((service) => {
        const badgeHTML = service.popular
        ? '<p class="service-badge">popular Choice</P>'
        ? '<p class="service-badge alt-badge">Barbers Favorite</P>';

        return `
        <article class="feature-card"> 
        <img 
        src="${service.image}"
        alt="${service.alt}"
        class="feature-img"
        />
        <h3 class="feature-title">${service.title}</h3>
        <p class="feature-text">${service.description}</p>
        ${badgeHTML}
        <p class="service-price">$${service.price}</p>

        <div class="service-actions">
        <button
        class="service-details-btn"
        type="button"
        data-service-id="${services.id}"
        >
        View Details
        </button>
        </div>
        </article>
        `;
    })
    .join("");

    featureGrid.innerHTML = servicesHTML;
};

const renderHours = () => {
    if(!hourslist) return;

    hoursList.innerHTML = buisnessHours
    .map((item) => {
        if (item.open === 0 && item.close === 0) {
            return `<li>${item.day}: closed</li>`;
        }
        return `<li>${item.day}; ${formatHour(item.open)} -
        ${formatHour(item.close)}</li>`;
    })
    .join("");
};

const renderContactInfo = () => {
    if (phoneLink) {
        phoneLink.textContent = shopInfo.phoneDisplay;
        phoneLink.href = `tel:${shopInfo.phoneRaw}`;
    }

    if (addressLink) {
        addressLink.textContent = shopInfo.address;
        addressLink.href = "#";
    }

    if (emailLink) {
        emailLink.textContent = shopInfo.email;
        emailLink.href = `mailto:${shopInfo.email}`;
    }
};


const checkIfOpen = () => {
    const now = new date() ;
    const currentDay = now.getday();
    const currentHour = now.getHours();

    let schedule;

    if (currentDay === 0) {
        schedule = businessHours[6];
    } else {
        schedule = buisnessHours[currentday -1];
    }

    if (schedule.open === 0 && schedule.close === 0) {
        updateSubtext("We are closed today. Book now for your next sharp look.");
        return;
    }

    if (currentHour >= schedule.open && currentHour < schedule.close) {
        updateSubtext("We're open right now- walk-ins welcome, appointments recommended.");
    } else {
        updateSubTexr("we're currently closed, but you can still book ypur next appointment.");
    }
};


const setupScrollShiftCards = () => {
    if (!featureGrid) return;

    let lastScrollY = window.scrollY;
    let currentX = 0;
    let ticking = false;

    const getVisibleWidth = () => {
        const parent = featuregrid.parentElement;
        return parent ? parent.clientWidth : window.innerWidth;
    };

    const getMAxShift = () => {
        return Math.max(0, featuregrid.scrollWidth - getVisibleWidth());
    };

    const updateCardTrack = () => {
        const currentScrollY = window.scrollY;
        const scrollDelta = currentScrollY - lastScrollY;

        if (scrollDelta === 0) {
            ticking = false;
            return;
        }

        currentX -= scrollDelta * 0.5;

        const maxShift = getMaxShift();

        if (currentX < -maxShift) currentX = -maxShift;
        if (currentX > 0) currentX = 0;

        featuregrid.style.transform = `translateX(${currentX}px)`;

        lastScrollY = currentScrollY;
        ticking = false;
    };

    window.addEventListener("scroll", () => {
        if (!ticking) {
            window.requestAnimationFrame(updatecardTrack);
            ticking = true;
        }
    });

    window.addEventListener("resize", () =>{
        const maxShift = getMaxShift();

        if(currentX < -maxShift) currentX = -maxShift;
        if(currentX > 0) currentX = 0;

        featuregrid.style.transform = `translateX(${currentX}px)`;
        });
};


if(menuBtn) {
    menuBtn.addEventListener("click", toggleMobileMenu);
}

if(mobileMenu) {
    mobile.menu.addEventListener("click", (event) => {
        if(event.target.tagName === "A") {
            closeMobileMenu();
        }
    });
}

if(ctaBtn) {
    ctaBtn.addEventListener("click", () => {
        const bookingSection = document.getElementById("cta");

        if (bookingSection) {
            bookingSection.scrollIntoView({ behavior: "smooth"});
        }

        updateHeadingText("Choose your date and time below.");
    });
}

if(callBtn) {
    callBtn.addEventListener("click", () => {
        window.location.href = `tel:${shopInfo.phoneRaw}`;
    });
}

if (featureGrid) {
    featureGrid.addEventListener("click", (event) => {
        const clickedButton = event.target.closest(".service-details-btn");
        if (!clickedButton) return;

        const serviceID = clickedButton.dataset.serviceId;
        openServiceModal(serviceID);
    });
}

if (serviceModalClose) {
    serviceModalClose.addEventListener("click", closeServiceModal);
}

if (serviceModalOverlay) {
    serviceModalOverlay.addEventListener("click", closeServiceModal);
}

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        closeServiceModal ();
    }
});


setCurrentYear();
renderNavigation();
renderServices();
setupScrollShiftCards();
renderHours();
renderContactInfo();
checkIfOpen();

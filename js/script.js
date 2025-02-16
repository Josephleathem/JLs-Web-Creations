/* ************************* Computer ************************* */

/* ************************* Tablets ************************* */

/* ************************* Phones ************************* */

/* ********** Navigation bar ********** */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navigationBar');

    // Ensure elements exist before adding event listeners
    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('visible');
        });

        // Close menu when clicking outside of it
        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('visible');
            }
        });
    }
});

/* ********** Footer ********** */

document.addEventListener('DOMContentLoaded', () => {
    // Define the media query for phones
    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const updateFooterForPhones = (e) => {
        const address = document.querySelector('footer address');
        if (!address) return; // Exit if no address element exists

        if (e.matches) {
            // For phones: Add <br> tags to the footer content
            address.innerHTML = `
                <span itemprop="name">JL's Web Creations</span> | 
                Phone: <a href="tel:+19375416094" itemprop="telephone">937-541-6094</a><br>
                Email: <a href="mailto:leathemjay@gmail.com" itemprop="email">leathemjay@gmail.com</a>
            `;
        } else {
            // For non-phones: Restore the original inline footer content
            address.innerHTML = `
                <span itemprop="name">JL's Web Creations</span> | 
                Phone: <a href="tel:+19375416094" itemprop="telephone">937-541-6094</a> | 
                Email: <a href="mailto:leathemjay@gmail.com" itemprop="email">leathemjay@gmail.com</a>
            `;
        }
    };

    // Listen for changes in the media query
    mediaQuery.addEventListener('change', updateFooterForPhones);

    // Run the function initially to apply the correct format on load
    updateFooterForPhones(mediaQuery);
});
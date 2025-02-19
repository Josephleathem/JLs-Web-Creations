/* ************************* All devices ************************* */
/* ********** Portfolio page ********** */

document.addEventListener("DOMContentLoaded", function () {
    const portfolioData = [
        {
            title: "Sequoia Wellness Center",
            image: "../images/sequoialogo.png",
            link: "https://sequoiawellness.net",
            testimonial: "JL's Web Creations has been an incredible partner in developing and maintaining our website. Their attention to detail and deep understanding of technology made the entire process seamless. They are highly reliable, responding quickly to any questions or requested changes. Thanks to their expertise, our website is fully operational, and we've received numerous compliments on its design and functionality. Knowing that JL's Web Creations is handling our website maintenance gives us confidence and peace of mind. Their pricing is fair, and I highly recommend them to anyone looking for a skilled and trustworthy web designer. - Sequoia Wellness Center Team"
        },
        {
            title: "Vosachee",
            image: "../images/placeholder.png", // Placeholder image, replace with actual screenshot when available
            link: "https://vosachee.com/",
            testimonial: "JL's Web Creations has been a game-changer for our business. Their expertise in web development, SEO, and platform optimization has significantly enhanced our online presence. They take the time to understand our needs and provide quick, effective solutions whenever challenges arise. Their innovative approach and strategic insights have played a key role in improving our digital visibility and engagement. We appreciate their dedication and professionalism and highly recommend them to anyone looking for a skilled and reliable web development partner. - Vosachee Team"
        }
    ];

    const portfolioGrid = document.getElementById("portfolioGrid");

    portfolioData.forEach(project => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("portfolio-item");

        projectElement.innerHTML = `
            <div class="portfolio-content">
                <div class="portfolio-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="portfolio-text">
                    <h3>${project.title}</h3>
                    <p class="testimonial">\"${project.testimonial}\"</p>
                    <a href="${project.link}" target="_blank">View Project</a>
                </div>
            </div>
        `;

        portfolioGrid.appendChild(projectElement); // Ensure projects are appended in order
        portfolioGrid.style.display = "flex";
        portfolioGrid.style.flexDirection = "column";
    });
});

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
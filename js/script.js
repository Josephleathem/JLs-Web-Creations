/* ************************* All devices ************************* */

/* ********** Portfolio Items ********** */
document.addEventListener("DOMContentLoaded", function () {
    const portfolioData = [
        {
            title: "Sequoia Wellness Center",
            image: "../images/sequoialogo.png",
            link: "https://sequoiawellness.net",
            testimonial: "One of the things that I have really appreciated about working with Jay is his attention to detail and understanding about technology. Jay is also very reliable and respond to any questions or changes to my website right away. I feel that he has helped me so much in getting my website up and running. I have received many compliments on the website and I do have an agreement with him to monitor and maintain the website moving forward, and I feel very confident, knowing that I am in very trustworthy hands regarding the maintenance of my website. Jay fees are also more than fair And I would highly recommend him to anyone looking for a website designer."
        },
        {
            title: "Vosachee",
            image: "../images/vosacheelogo.png", 
            link: "https://vosachee.com/",
            testimonial: "Working with Joseph (Jay) Leathem from JL Web Creations has been an absolute game-changer for our business. He has been a valuable partner, always going above and beyond to ensure our website and digital presence are thriving. Jay takes the time to truly understand our needs, and whenever we run into a challenge, he's quick to jump in with a solution. His expertise in web development, marketing, SEO, and platform optimization has been instrumental in helping us grow. Beyond his technical skills, he brings innovative ideas and strategic insights that have significantly improved our online visibility and engagement. We are incredibly grateful for his dedication, professionalism, and the genuine care he puts into our success. If you're looking for a web developer who is not only skilled but also invested in your business's growth, Jay is the one to call!"
        }
    ];

    const portfolioGrid = document.getElementById("portfolioGrid");

    portfolioData.forEach((project, index) => {
        const projectElement = document.createElement("div");
        projectElement.classList.add("portfolio-item");
        
        // Apply flipped class to every second item
        const flippedClass = index % 2 === 1 ? "flipped" : "";
        
        projectElement.innerHTML = `
            <div class="portfolio-content ${flippedClass}">
                <div class="portfolio-image">
                    <img src="${project.image}" alt="${project.title}">
                </div>
                <div class="portfolio-text">
                    <h3>${project.title}</h3>
                    <p class="testimonial">"${project.testimonial}"</p>
                    <a href="${project.link}" class="portfolio-button" target="_blank">View Project</a>
                </div>
            </div>
        `;

        portfolioGrid.appendChild(projectElement);
        portfolioGrid.style.display = "flex";
        portfolioGrid.style.flexDirection = "column";
    });
});

/* ************************* Phones ************************* */

/* ********** Navigation ********** */
document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.navigationBar');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('visible');
        });

        document.addEventListener('click', (e) => {
            if (!menuToggle.contains(e.target) && !navLinks.contains(e.target)) {
                navLinks.classList.remove('visible');
            }
        });
    }
});

/* ********** Footer ********** */
document.addEventListener('DOMContentLoaded', () => {
    const mediaQuery = window.matchMedia('(max-width: 480px)');

    const updateFooterForPhones = (e) => {
        const address = document.querySelector('footer address');
        if (!address) return;

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

    mediaQuery.addEventListener('change', updateFooterForPhones);
    updateFooterForPhones(mediaQuery);
});
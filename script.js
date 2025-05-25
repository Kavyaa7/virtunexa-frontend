window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll("nav ul li a");

    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop - 50;
        const sectionHeight = section.clientHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(current)) {
            link.classList.add("active");
        }
    });
});


document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});


document.querySelectorAll('.top_artist').forEach(artist => {
    const bioText = artist.innerHTML;
    if (bioText.length > 300) {
        artist.innerHTML = bioText.slice(0, 200) + '... <button class="read-more">Read More</button>';
        artist.querySelector('.read-more').addEventListener('click', () => {
            artist.innerHTML = bioText;
        });
    }
});


document.getElementById('copyright').textContent = `© ${new Date().getFullYear()} MusicVerse. All rights reserved.`;


const scrollBtn = document.createElement("button");
scrollBtn.innerText = "↑";
scrollBtn.id = "scrollTopBtn";
scrollBtn.style.position = "fixed";
scrollBtn.style.bottom = "20px";
scrollBtn.style.right = "20px";
scrollBtn.style.display = "block";
scrollBtn.style.padding = "10px";
scrollBtn.style.border = "none";
scrollBtn.style.borderRadius = "50%";
scrollBtn.style.backgroundColor = "#FFA726";
scrollBtn.style.color = "#121212";
scrollBtn.style.cursor = "pointer";
document.body.appendChild(scrollBtn);

scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});



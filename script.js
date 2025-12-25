let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    const name = this.name.value;
    const email = this.email.value;
    const phone = this.phone.value;
    const subject = this.subject.value;
    const message = this.message.value;
    const body = `Name: ${name}\nEmail: ${email}\nPhone: ${phone}\n\nMessage:\n${message}`;
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=abhigyanjaiswal14@gmail.com&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(gmailUrl, '_blank');
});
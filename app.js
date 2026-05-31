const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

// Create a custom cursor
const cursor = document.createElement('div');
cursor.classList.add('custom-cursor');
document.body.appendChild(cursor);

// Create cursor trail elements
const trailElements = [];
for (let i = 0; i < 5; i++) {
  const trail = document.createElement('div');
  trail.classList.add('cursor-trail');
  document.body.appendChild(trail);
  trailElements.push(trail);
}

// Move the custom cursor and trail with the mouse
document.addEventListener('mousemove', (e) => {
  const { clientX: x, clientY: y } = e; // Use clientX and clientY for screen-relative coordinates

  // Move the main cursor
  cursor.style.left = `${x}px`;
  cursor.style.top = `${y}px`;

  // Move the trail elements with a delay
  trailElements.forEach((trail, index) => {
    setTimeout(() => {
      trail.style.left = `${x}px`;
      trail.style.top = `${y}px`;
      trail.style.opacity = 1 - index * 0.2; // Fade out the trail
    }, index * 50); // Add delay for each trail element
  });
});

// Add hover effect for interactive elements
const hoverElements = document.querySelectorAll('a, button, .btn, .skill, .project');
hoverElements.forEach((element) => {
  element.addEventListener('mouseenter', () => {
    cursor.classList.add('hover');
    trailElements.forEach(trail => trail.classList.add('hover'));
  });
  element.addEventListener('mouseleave', () => {
    cursor.classList.remove('hover');
    trailElements.forEach(trail => trail.classList.remove('hover'));
  });
});

// Add click animation
document.addEventListener('click', (e) => {
  const clickEffect = document.createElement('div');
  clickEffect.classList.add('click-effect');
  clickEffect.style.left = `${e.clientX}px`;
  clickEffect.style.top = `${e.clientY}px`;
  document.body.appendChild(clickEffect);

  // Remove the effect after the animation ends
  setTimeout(() => {
    clickEffect.remove();
  }, 600);
});
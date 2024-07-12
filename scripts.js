function revealContainers() {
    const containers = document.querySelector('.hidden-containers');
    const image = document.querySelector('.work-image');
    if (containers.style.display === 'flex') {
        containers.style.display = 'none';
        image.style.transform = 'rotate(0deg)';
    } else {
        containers.style.display = 'flex'; /* Ensure correct display style */
        image.style.transform = 'rotate(360deg)';
    }
}


document.addEventListener('DOMContentLoaded', function () {
    const items = document.querySelectorAll('.item');
    
    items.forEach((item) => {
        item.style.backgroundImage = `url('${item.dataset.bg}')`;

        item.addEventListener('click', () => {
            if (item.classList.contains('expanded')) {
                gsap.to(item, { width: "10vw", height: "65vh", duration: 2, ease: "elastic(1, 0.3)" });
                item.classList.remove('expanded');
            } else {
                gsap.to(items, { width: "10vw", height: "65vh", duration: 2, ease: "elastic(1, 0.3)" });
                items.forEach(it => it.classList.remove('expanded'));
                gsap.to(item, { width: "30vw", height: "65vh", duration: 2, ease: "elastic(1, 0.3)" });
                item.classList.add('expanded');
            }
        });

        item.addEventListener('mouseover', () => {
            item.style.backgroundImage = `url('${item.dataset.bg}')`;
        });

        item.addEventListener('mouseout', () => {
            if (!item.classList.contains('expanded')) {
                item.style.backgroundImage = `url('${item.dataset.bg}')`;
            }
        });
    });
});


    const darkModeSwitch = document.getElementById('dark-mode');
    const body = document.body;

    darkModeSwitch.addEventListener('change', () => {
        if (darkModeSwitch.checked) {
            body.classList.add('dark-mode');
        } else {
            body.classList.remove('dark-mode');
        }
    });


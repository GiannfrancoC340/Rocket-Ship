// Generate random stars
const starsContainer = document.getElementById('stars');
for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    star.style.left = Math.random() * 100 + '%';
    star.style.top = Math.random() * 100 + '%';
    star.style.animationDelay = Math.random() * 3 + 's';
    starsContainer.appendChild(star);
}

// Launch functionality
const launchBtn = document.getElementById('launchBtn');
const rocketContainer = document.getElementById('rocketContainer');
const flames = document.getElementById('flames');
const countdownEl = document.getElementById('countdown');

launchBtn.addEventListener('click', () => {
    launchBtn.disabled = true;

    // Countdown sequence
    let count = 3;
    countdownEl.textContent = count;
    countdownEl.classList.add('active');

    const countdownInterval = setInterval(() => {
        count--;
        if (count > 0) {
            countdownEl.textContent = count;
            countdownEl.classList.remove('active');
            setTimeout(() => countdownEl.classList.add('active'), 10);
        } else {
            clearInterval(countdownInterval);
            countdownEl.textContent = 'LIFTOFF!';
            countdownEl.classList.remove('active');
            setTimeout(() => countdownEl.classList.add('active'), 10);

            // Launch the rocket
            setTimeout(() => {
                launch();
            }, 500);
        }
    }, 1000);
});

function descent() {
    // Activate flames for landing burn
    flames.classList.add('active');
    
    // Generate smoke during landing
    const descentSmokeInterval = setInterval(() => {
        createSmoke();
    }, 100);

    // Stop landing smoke and flames when rocket touches down
    setTimeout(() => {
        clearInterval(descentSmokeInterval);
        flames.classList.remove('active');
    }, 1350);

    // Reset after landing is complete
    setTimeout(() => {
        reset();
    }, 1500);
}

function launch() {
    // Activate flames
    flames.classList.add('active');

    // Generate smoke
    const smokeInterval = setInterval(() => {
        createSmoke();
    }, 100);

    // Start launch animation
    rocketContainer.classList.add('launching');

    // Stop ascent smoke and flames at peak
    setTimeout(() => {
        clearInterval(smokeInterval);
        flames.classList.remove('active');
    }, 1200);

    // Start descent phase
    setTimeout(() => {
        descent();
    }, 1550);
}

function createSmoke() {
    const rect = rocketContainer.getBoundingClientRect();
    
    // Create 2-3 smoke particles at once
    for (let i = 0; i < 6; i++) {
        const smoke = document.createElement('div');
        smoke.className = 'smoke';
        
        smoke.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 50 + 'px';
        smoke.style.top = rect.bottom + (Math.random() * 10) + 'px';  // Slight vertical variation
        smoke.style.position = 'fixed';
        
        document.body.appendChild(smoke);
        
        setTimeout(() => {
            smoke.remove();
        }, 2000);
    }
}

function reset() {
    rocketContainer.classList.remove('launching');
    flames.classList.remove('active');
    countdownEl.classList.remove('active');
    countdownEl.textContent = '';
    launchBtn.disabled = false;
}
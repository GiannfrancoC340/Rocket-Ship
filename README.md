# 🚀 Rocket Ship Launch Simulator

An interactive web-based rocket ship animation featuring realistic launch and landing sequences with visual effects.

## Features

### Visual Elements
- **Rocket Design**
  - Red nose cone
  - Metallic body with circular window
  - Red fins on both sides
  - Engine mount (upside-down trapezoid) at the base
  - Animated flames with flickering effect
  - Smoke particle system

- **Environment**
  - Starry night sky with 100 twinkling stars
  - Ground terrain with launchpad
  - Gradient sky background (deep space to purple)

### Launch Sequence
1. **Countdown**: 3-2-1 countdown with pulsing animation
2. **Ascent**: Rocket launches with active flames and smoke trail
3. **Peak**: Flames and smoke deactivate as rocket reaches maximum altitude
4. **Descent**: Landing burn activates with flames and smoke for controlled descent
5. **Landing**: Rocket lands safely back on the launchpad

### Interactive Controls
- **Launch Button**: Red button to initiate launch sequence
- **Auto-reset**: System automatically resets after landing for another launch

## Technical Implementation

### Technologies Used
- **HTML5**: Structure and layout
- **CSS3**: Styling, animations, and keyframes
- **Vanilla JavaScript**: Interactive functionality and timing control

### Key Components

#### CSS Animations
```css
@keyframes launch
```
- 0-40%: Rocket ascends to 150% screen height and scales down
- 40-45%: Rocket hovers at peak altitude
- 45-100%: Rocket descends back to launchpad and scales back up

#### JavaScript Functions

**`launch()`**
- Activates flames and smoke for ascent
- Controls timing for ascent phase (1200ms)
- Initiates descent sequence

**`descent()`**
- Activates landing burn flames and smoke
- Generates smoke particles during descent
- Controls landing timing (1550ms flame duration)
- Triggers system reset

**`createSmoke()`**
- Generates 6 smoke particles per call
- Uses `getBoundingClientRect()` to track rocket position in real-time
- Fixed positioning to follow rocket during animation
- Particles rise and fade over 2 seconds

**`reset()`**
- Deactivates all visual effects
- Removes animation classes
- Re-enables launch button for next launch

### Animation Timing
- **Total animation duration**: 3000ms (3 seconds)
- **Ascent phase**: 0-1200ms
- **Peak hover**: 1200-1350ms
- **Descent initiation**: 1350ms
- **Landing burn duration**: 1550ms
- **Total cycle time**: ~3000ms

### Smoke System
- Generates 6 particles every 100ms during powered flight
- Particles positioned using rocket's current screen coordinates
- Random horizontal dispersion (±20px from center)
- Slight vertical offset variation
- 2-second fade and rise animation

## Setup & Usage

1. **Download** the `rocket-ship.html` file
2. **Open** the file in any modern web browser
3. **Click** the "LAUNCH ROCKET" button
4. **Watch** the countdown and launch sequence
5. **Repeat** - the system auto-resets after landing

## Customization Options

### Adjust Launch Speed
Change animation duration in CSS:
```css
.rocket-container.launching {
    animation: launch 3s ease-in forwards;  /* Change 3s */
}
```

### Modify Smoke Density
Change particle count in `createSmoke()`:
```javascript
for (let i = 0; i < 6; i++) {  /* Change 6 to desired amount */
```

### Alter Smoke Frequency
Adjust interval timing:
```javascript
const smokeInterval = setInterval(() => {
    createSmoke();
}, 100);  /* Change 100ms */
```

### Alter Smoke horizontal spread
Change smoke spread:
```javascript
smoke.style.left = rect.left + rect.width / 2 + (Math.random() - 0.5) * 60 + 'px';  // Change 40 to 60
```

### Change Rocket Colors
Modify CSS variables:
- `.nose`: Nose cone color
- `.body`: Body gradient
- `.fin-left, .fin-right`: Fin colors
- `.mount`: Engine mount color

## Browser Compatibility
- Chrome/Edge (recommended)
- Firefox
- Safari
- Opera

Requires modern browser with CSS3 animation support.

## Future Enhancement Ideas
- Sound effects (countdown beeps, engine roar)
- Multiple rocket designs to choose from
- Fuel gauge display
- Altitude/speed meters
- Day/night cycle toggle
- Mobile touch controls
- Trajectory steering with arrow keys
- Mission score system

## Credits
Created as a simple visual animation project using HTML, CSS, and JavaScript.

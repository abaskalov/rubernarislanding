// Icon animations using Canvas for morphing effects
class IconAnimator {
    constructor(containerId, svgPaths) {
        this.container = document.getElementById(containerId);
        if (!this.container) return;

        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.svgPaths = svgPaths;
        this.currentVariant = 0;
        this.animationProgress = 0;
        this.animationSpeed = 0.01;

        this.init();
    }

    init() {
        // Set canvas size
        const containerRect = this.container.getBoundingClientRect();
        this.canvas.width = containerRect.width * window.devicePixelRatio;
        this.canvas.height = containerRect.height * window.devicePixelRatio;
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';

        // Replace img with canvas
        const img = this.container.querySelector('img');
        if (img) {
            this.container.removeChild(img);
        }
        this.container.appendChild(this.canvas);

        // Start animation loop
        this.animate();
    }

    animate() {
        this.animationProgress += this.animationSpeed;

        if (this.animationProgress >= 1) {
            this.animationProgress = 0;
            this.currentVariant = (this.currentVariant + 1) % this.svgPaths.length;
        }

        this.render();
        requestAnimationFrame(() => this.animate());
    }

    render() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        const currentPath = this.svgPaths[this.currentVariant];
        const nextPath = this.svgPaths[(this.currentVariant + 1) % this.svgPaths.length];

        // Interpolate between current and next variant
        this.drawMorphedPath(currentPath, nextPath, this.animationProgress);
    }

    drawMorphedPath(path1, path2, progress) {
        // Simple morphing by interpolating scale and rotation
        this.ctx.save();

        const centerX = this.canvas.width / 2;
        const centerY = this.canvas.height / 2;

        // Interpolate scale
        const scale1 = path1.scale || 1;
        const scale2 = path2.scale || 1;
        const scale = scale1 + (scale2 - scale1) * this.easeInOutCubic(progress);

        // Interpolate rotation
        const rotation1 = path1.rotation || 0;
        const rotation2 = path2.rotation || 0;
        const rotation = rotation1 + (rotation2 - rotation1) * this.easeInOutCubic(progress);

        // Apply transformations
        this.ctx.translate(centerX, centerY);
        this.ctx.rotate(rotation * Math.PI / 180);
        this.ctx.scale(scale, scale);
        this.ctx.translate(-centerX, -centerY);

        // Draw the path
        const path = new Path2D(path1.d);
        this.ctx.fillStyle = '#000000';
        this.ctx.fill(path);

        this.ctx.restore();
    }

    easeInOutCubic(t) {
        return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
    }
}

// Initialize animations when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    // Cloud icon animation (hero section)
    // Variants: Default (1x), Variant4 (0.87x smaller), Variant5 (1.27x larger + 180° rotation)
    const cloudPaths = [
        {
            d: 'M133.748 38.6674V112.68C90.5721 98.7449 48.5957 80.7493 5.97356 64.9686C3.85168 63.3998 1.08401 59.7084 0.622726 57.1244C-0.207575 52.787 -0.207575 14.4887 0.622726 10.2436C1.82205 4.15282 8.37221 0.922852 14.1843 0.830567L133.748 38.6674Z',
            scale: 1,
            rotation: 0
        },
        {
            d: 'M133.748 38.6674V112.68C90.5721 98.7449 48.5957 80.7493 5.97356 64.9686C3.85168 63.3998 1.08401 59.7084 0.622726 57.1244C-0.207575 52.787 -0.207575 14.4887 0.622726 10.2436C1.82205 4.15282 8.37221 0.922852 14.1843 0.830567L133.748 38.6674Z',
            scale: 0.87,
            rotation: 0
        },
        {
            d: 'M133.748 38.6674V112.68C90.5721 98.7449 48.5957 80.7493 5.97356 64.9686C3.85168 63.3998 1.08401 59.7084 0.622726 57.1244C-0.207575 52.787 -0.207575 14.4887 0.622726 10.2436C1.82205 4.15282 8.37221 0.922852 14.1843 0.830567L133.748 38.6674Z',
            scale: 1.27,
            rotation: 180
        }
    ];

    // Only initialize if the hero cloud container exists
    const heroCloud = document.querySelector('.hero__cloud');
    if (heroCloud && heroCloud.parentElement) {
        heroCloud.parentElement.id = 'hero-cloud-container';
        new IconAnimator('hero-cloud-container', cloudPaths);
    }
});

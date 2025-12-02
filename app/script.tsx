"use client";

import { useEffect } from 'react';

export default function Scripts() {
  useEffect(() => {
    // Load scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve, reject) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => {
          console.log(`✅ Loaded: ${src}`);
          resolve();
        };
        script.onerror = (error) => {
          console.warn(`⚠️ Failed to load: ${src}`, error);
          resolve(); // Resolve even on error to not block other scripts
        };

        document.body.appendChild(script);
      });
    };

    // Load scripts with optimized strategy
    const loadScripts = async () => {
      try {
        // jQuery must be loaded first (required by other scripts)
        await loadScript('/js/jquery.min.js');

        // Load independent scripts in parallel for faster loading
        const parallelScripts = [
          '/js/bootstrap.bundle.min.js',
          '/js/aos.js',
          '/js/odometer.js',
          '/js/tweenmax.min.js',
        ];

        // Load these in parallel
        await Promise.all(parallelScripts.map(src => loadScript(src)));

        // Load Owl Carousel FIRST (required by owl-thumb plugin)
        await loadScript('/js/owl.carousel.min.js');

        // Load jQuery-dependent scripts in parallel (after Owl Carousel is loaded)
        // Note: form-validator and contact-form-script are excluded as we use React for form handling
        const jqueryDependentScripts = [
          '/js/owl-thumb.min.js',  // Must load AFTER owl.carousel.min.js
          '/js/circle-progressbar.min.js',
          '/js/fancybox.min.js',
          '/js/jquery.appear.js',
        ];

        await Promise.all(jqueryDependentScripts.map(src => loadScript(src)));

        // Load main.js last (depends on all other scripts)
        await loadScript('/js/main.js');

      } catch (error) {
        console.error('Error in script loading process:', error);
      }
    };

    // Execute script loading
    loadScripts();
  }, []);

  return null;
}

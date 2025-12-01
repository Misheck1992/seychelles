"use client";

import { useEffect } from 'react';

export default function Scripts() {
  useEffect(() => {
    // Load scripts dynamically
    const loadScript = (src: string): Promise<void> => {
      return new Promise((resolve) => {
        // Check if script already exists
        const existingScript = document.querySelector(`script[src="${src}"]`);
        if (existingScript) {
          resolve();
          return;
        }

        const script = document.createElement('script');
        script.src = src;
        script.async = true;

        script.onload = () => resolve();
        script.onerror = () => resolve(); // Resolve even on error to not block other scripts

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

        // Load jQuery-dependent scripts in parallel
        const jqueryDependentScripts = [
          '/js/owl.carousel.min.js',
          '/js/owl-thumb.min.js',
          '/js/circle-progressbar.min.js',
          '/js/fancybox.min.js',
          '/js/jquery.appear.js',
          '/js/form-validator.min.js',
          '/js/contact-form-script.js',
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

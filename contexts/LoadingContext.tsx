'use client';

import React, { createContext, useContext, useState, ReactNode, useEffect, Suspense } from 'react';
import PageLoader from '@/components/PageLoader';
import NavigationLoader from '@/components/NavigationLoader';
import { usePathname, useSearchParams } from 'next/navigation';

interface LoadingContextType {
  isLoading: boolean;
  setLoading: (loading: boolean) => void;
  startLoading: () => void;
  stopLoading: () => void;
}

const LoadingContext = createContext<LoadingContextType | undefined>(undefined);

export const useLoading = () => {
  const context = useContext(LoadingContext);
  if (!context) {
    throw new Error('useLoading must be used within a LoadingProvider');
  }
  return context;
};

interface LoadingProviderProps {
  children: ReactNode;
}

// Create a separate component that uses searchParams
const LoadingProviderWithSearchParams: React.FC<LoadingProviderProps> = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [loadingCount, setLoadingCount] = useState(0);
  const pathname = usePathname();
  const searchParams = useSearchParams();

  // Use refs to track loading timeouts and component mount state
  const loadingTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const safetyTimeoutRef = React.useRef<NodeJS.Timeout | null>(null);
  const isMountedRef = React.useRef(true);
  const lastLoadingTimeRef = React.useRef<number>(0);

  // Debounce function to prevent rapid loading state changes
  const debounce = (fn: Function, ms = 300) => {
    let timeoutId: NodeJS.Timeout;
    return function(...args: any[]) {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => fn(...args), ms);
    };
  };

  // Debounced set loading function
  const debouncedSetIsLoading = React.useCallback(
    debounce((value: boolean) => {
      if (isMountedRef.current) {
        setIsLoading(value);
      }
    }, 100),
    []
  );

  const setLoading = React.useCallback((loading: boolean) => {
    // Clear any existing timeout
    if (loadingTimeoutRef.current) {
      clearTimeout(loadingTimeoutRef.current);
      loadingTimeoutRef.current = null;
    }

    // Prevent rapid toggling by enforcing a minimum time between state changes
    const now = Date.now();
    const timeSinceLastLoading = now - lastLoadingTimeRef.current;

    if (loading) {
      // Increment loading count
      setLoadingCount(prev => prev + 1);
      lastLoadingTimeRef.current = now;
      debouncedSetIsLoading(true);

      // Safety timeout - ensure loading state doesn't get stuck
      loadingTimeoutRef.current = setTimeout(() => {
        if (isMountedRef.current) {
          setLoadingCount(0);
          debouncedSetIsLoading(false);
        }
      }, 3000); // Maximum time to show loader before auto-hiding
    } else {
      // Only turn off loading if we're not in a rapid toggle situation
      if (timeSinceLastLoading > 500 || !isLoading) {
        // Decrement loading count
        setLoadingCount(prev => Math.max(0, prev - 1));

        // Small delay before turning off loading to prevent flickering
        setTimeout(() => {
          if (isMountedRef.current) {
            debouncedSetIsLoading(false);
          }
        }, 200); // Reduced from 300ms to 200ms
      }
    }
  }, [debouncedSetIsLoading, isLoading]);

  const startLoading = React.useCallback(() => {
    setLoading(true);
  }, [setLoading]);

  const stopLoading = React.useCallback(() => {
    setLoading(false);
  }, [setLoading]);

  // Set mounted flag and clean up on unmount
  React.useEffect(() => {
    isMountedRef.current = true;

    // Always set a global safety timeout to prevent stuck loading states
    safetyTimeoutRef.current = setTimeout(() => {
      if (isMountedRef.current && isLoading) {
        console.log('Safety timeout triggered - forcing loading state to false');
        setLoadingCount(0);
        debouncedSetIsLoading(false);
      }
    }, 5000); // Increased to 5 seconds to allow slower pages to load

    return () => {
      isMountedRef.current = false;
      if (loadingTimeoutRef.current) {
        clearTimeout(loadingTimeoutRef.current);
      }
      if (safetyTimeoutRef.current) {
        clearTimeout(safetyTimeoutRef.current);
      }
    };
  }, [isLoading, debouncedSetIsLoading]);

  // Effect to handle loading count changes
  React.useEffect(() => {
    if (loadingCount <= 0 && isLoading) {
      debouncedSetIsLoading(false);
    }
  }, [loadingCount, isLoading, debouncedSetIsLoading]);

  // Reset loading state on route change
  useEffect(() => {
    // Longer delay to allow page content to fully render
    const routeChangeTimeout = setTimeout(() => {
      if (isLoading) {
        console.log('Route changed - resetting loading state');
        setLoadingCount(0);
        debouncedSetIsLoading(false);
      }
    }, 1000); // Increased from 500ms to 1000ms to ensure content is rendered

    return () => clearTimeout(routeChangeTimeout);
  }, [pathname, searchParams, isLoading, debouncedSetIsLoading]);

  return (
    <LoadingContext.Provider value={{ isLoading, setLoading, startLoading, stopLoading }}>
      <NavigationLoader isVisible={isLoading} />
      {children}
    </LoadingContext.Provider>
  );
};

// Wrap the provider with a Suspense boundary
export const LoadingProvider: React.FC<LoadingProviderProps> = ({ children }) => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoadingProviderWithSearchParams>
        {children}
      </LoadingProviderWithSearchParams>
    </Suspense>
  );
};

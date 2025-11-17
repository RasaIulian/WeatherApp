import React, { useRef, useEffect } from "react";

// Custom hook for touch scrolling
export const useTouchScroll = (onSwipeLeft, onSwipeRight, threshold = 50) => {
  const ref = useRef(null);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  const touchEndX = useRef(0);
  const isDragging = useRef(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
      touchStartY.current = e.touches[0].clientY;
      touchEndX.current = e.touches[0].clientX;
      isDragging.current = true;
    };

    const handleTouchMove = (e) => {
      if (!isDragging.current) return;
      touchEndX.current = e.touches[0].clientX;
      const touchEndY = e.touches[0].clientY;
      const deltaX = Math.abs(touchStartX.current - touchEndX.current);
      const deltaY = Math.abs(touchStartY.current - touchEndY);

      // Only prevent vertical scrolling if horizontal movement is stronger
      if (deltaX > deltaY && e.cancelable) {
        e.preventDefault();
      }
    };

    const handleTouchEnd = (e) => {
      if (!isDragging.current) return;
      isDragging.current = false;

      const deltaX = touchStartX.current - touchEndX.current;

      // Check if swipe distance exceeds threshold
      if (Math.abs(deltaX) > threshold) {
        if (deltaX > 0) {
          e.preventDefault();
          // Swiped left (show next items)
          onSwipeLeft && onSwipeLeft();
        } else {
          // Swiped right (show previous items)
          onSwipeRight && onSwipeRight();
        }
      }

      // Reset values
      touchStartX.current = 0;
      touchEndX.current = 0;
    };

    // Add passive: false to prevent default behavior
    element.addEventListener("touchstart", handleTouchStart, {
      passive: false,
    });
    element.addEventListener("touchmove", handleTouchMove, { passive: false });
    element.addEventListener("touchend", handleTouchEnd, { passive: false });

    return () => {
      element.removeEventListener("touchstart", handleTouchStart);
      element.removeEventListener("touchmove", handleTouchMove);
      element.removeEventListener("touchend", handleTouchEnd);
    };
  }, [onSwipeLeft, onSwipeRight, threshold]);

  return ref;
};

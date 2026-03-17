import { useEffect, useRef, useState } from 'react';

/**
 * 뷰포트 진입 시 fade-in 애니메이션을 적용하는 커스텀 훅
 * @param {number} [threshold=0.15] - Intersection Observer threshold
 * @returns {{ ref: React.RefObject, isVisible: boolean }}
 */
const useFadeIn = (threshold = 0.15) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(node);
        }
      },
      { threshold }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, isVisible };
};

export default useFadeIn;

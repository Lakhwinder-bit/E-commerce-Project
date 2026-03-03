// src/utils/animateToCart.js

import gsap from "gsap";

export const animateToCart = (imgElement) => {
  const bag = document.getElementById("bag-icon");
  if (!imgElement || !bag) return;

  const imgRect = imgElement.getBoundingClientRect();
  const bagRect = bag.getBoundingClientRect();

  const clone = imgElement.cloneNode(true);
  document.body.appendChild(clone);

  gsap.set(clone, {
    position: "fixed",
    left: imgRect.left,
    top: imgRect.top,
    width: imgRect.width,
    height: imgRect.height,
    zIndex: 9999,
    borderRadius: "12px",
  });

  gsap.to(clone, {
    duration: 0.8,
    left: bagRect.left,
    top: bagRect.top,
    width: 20,
    height: 20,
    opacity: 0.5,
    ease: "power2.inOut",
    onComplete: () => clone.remove(),
  });

  gsap.fromTo(
    bag,
    { scale: 1 },
    { scale: 1.3, duration: 0.2, yoyo: true, repeat: 1 }
  );
};
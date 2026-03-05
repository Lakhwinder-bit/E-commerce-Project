import { gsap } from "gsap";

export const animateToWishlist = (element) => {
  if (!element) return;

  const rect = element.getBoundingClientRect();
  const clone = element.cloneNode(true);

  clone.style.position = "fixed";
  clone.style.left = rect.left + "px";
  clone.style.top = rect.top + "px";
  clone.style.width = rect.width + "px";
  clone.style.height = rect.height + "px";
  clone.style.zIndex = "9999";
  clone.style.pointerEvents = "none";
  clone.style.fill = "red";
  clone.style.stroke = "none";


  document.body.appendChild(clone);

  const target = document.querySelector("#wishlist-icon");

  if (!target) return;

  const targetRect = target.getBoundingClientRect();

const tl = gsap.timeline();

tl.fromTo(
  clone,
  { scale: 0 },
  { scale: 2, duration: 0.2, ease: "back.out(3)" }
).to(clone, {
  x: targetRect.left - rect.left,
  y: targetRect.top - rect.top,
  scale: 0.4,
  duration: 0.6,
  ease: "power2.inOut",
  onComplete: () => clone.remove(),
});
};
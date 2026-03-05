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
   


  });

  gsap.to(clone, {
    duration: 1.2,
     x: bagRect.left - imgRect.left,
     y: bagRect.top - imgRect.top,
    width: 20,
    height: 20,
    opacity: 0.4,
    ease: "power2.inOut",
    onComplete: () =>  
       {
      console.log("animation finished") 
      clone.remove()
    }
  });
    gsap.fromTo(
    bag,
    { scale: 1 },
    { scale: 1.2, duration: 0.5, yoyo: true, repeat: 1 }
  );

};

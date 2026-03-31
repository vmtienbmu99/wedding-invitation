const weddingData = {
  setText("heroVenue", weddingData.event.venue);
  setImage("heroImage", weddingData.hero.image);

  setText("groomRole", weddingData.groom.role);
  setText("groomName", weddingData.groom.name);
  setText("groomParents", weddingData.groom.parents);
  setText("groomHometown", weddingData.groom.hometown);
  setImage("groomImage", weddingData.groom.image);

  setText("brideRole", weddingData.bride.role);
  setText("brideName", weddingData.bride.name);
  setText("brideParents", weddingData.bride.parents);
  setText("brideHometown", weddingData.bride.hometown);
  setImage("brideImage", weddingData.bride.image);

  setText("eventTitle", weddingData.event.title);
  setText("eventTime", weddingData.event.time);
  setText("eventLunar", weddingData.event.lunar);
  setText("eventVenue", weddingData.event.venue);
  setText("eventAddress", weddingData.event.address);

  weddingData.gallery.forEach((src, index) => {
    setImage(`gallery${index + 1}`, src);
  });

  weddingData.story.forEach((item, index) => {
    setText(`storyYear${index + 1}`, item.year);
    setText(`storyTitle${index + 1}`, item.title);
    setText(`storyText${index + 1}`, item.text);
  });

  weddingData.gifts.forEach((item, index) => {
    setText(`giftRole${index + 1}`, item.role);
    setText(`giftName${index + 1}`, item.name);
    setText(`giftBank${index + 1}`, item.bank);
    setText(`giftAccount${index + 1}`, item.account);
  });
}

function createPetals() {
  const wrap = document.getElementById("petals");
  for (let i = 0; i < 18; i += 1) {
    const petal = document.createElement("span");
    petal.className = "petal";
    petal.style.left = `${Math.random() * 100}%`;
    petal.style.animationDuration = `${10 + Math.random() * 8}s`;
    petal.style.animationDelay = `${Math.random() * 5}s`;
    petal.style.setProperty("--x", `${-70 + Math.random() * 140}px`);
    petal.style.transform = `scale(${0.65 + Math.random() * 0.8}) rotate(${Math.random() * 45}deg)`;
    wrap.appendChild(petal);
  }
}

function setupOpeningEffect() {
  const openingScreen = document.getElementById("openingScreen");
  const inviteBook = document.getElementById("inviteBook");
  const openButton = document.getElementById("openButton");

  openButton.addEventListener("click", () => {
    inviteBook.classList.add("open");
    setTimeout(() => {
      openingScreen.classList.add("hidden");
      document.body.style.overflowY = "auto";
    }, 1650);
  });
}

function setupRevealAnimation() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, { threshold: 0.16 });

  document.querySelectorAll(".reveal").forEach((item) => observer.observe(item));
}

document.body.style.overflow = "hidden";
hydrateInvitation();
createPetals();
setupOpeningEffect();
setupRevealAnimation();

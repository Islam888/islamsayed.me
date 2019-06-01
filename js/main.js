window.onload = () => {
  //inside viewport
  var insideViewport = function (args) {
    window.onscroll = function () {
      for (const arg of args) {
        if (!Array.isArray(arg.classesNames)) {
          console.log("Error! classesNames must be an array.");
        } else if (arg.position >= 1 || arg.position < 0) {
          console.log(
            "Error! Position must be a number more than 0 and less than 1."
          );
        } else {
          if (arg.position === undefined) {
            arg.position = 0;
          }
          for (const className of arg.classesNames) {
            var elements = document.getElementsByClassName(className);
            if (elements.length === 0) {
              console.log("Error! Class(es) not found.");
            } else {
              for (const element of elements) {
                var bounding = element.getBoundingClientRect();
                if (
                  bounding.top >= 0 &&
                  bounding.left >= 0 &&
                  bounding.top <=
                  (window.innerHeight * (1 - arg.position) ||
                    document.documentElement.clientHeight *
                    (1 - arg.position)) &&
                  bounding.right <=
                  (window.innerWidth || document.documentElement.clientWidth)
                ) {
                  arg.action(element);
                }
              }
            }
          }
        }
      }
    };
  };
  if (window.innerWidth >= 576) {
    insideViewport([{
      classesNames: ["logo"],
      position: 0.05,
      action: function (elements) {
        elements.classList.add("fadeInRight");
      }
    }]);
  } else {
    insideViewport([{
      classesNames: ["logo"],
      position: 0.05,
      action: function (elements) {
        elements.classList.add("fadeIn");
      }
    }]);
  }

  const contactBtns = document.getElementsByClassName('contact-btn')
  let scrollToElementInterval;
  let contactForm = document.querySelector('.contact')
  for (const btn of contactBtns) {
    btn.addEventListener('click', e => {
      e.preventDefault()
      const scrollToElement = () => {
        document.body.scrollTop += 50; // For Safari
        document.documentElement.scrollTop += 50; // For Chrome, Firefox, IE and Opera
        if (contactForm.getBoundingClientRect().top < 30) {
          clearInterval(scrollToElementInterval)
        }
      }
      scrollToElementInterval = setInterval(scrollToElement, 10)
    })
  }

  const contactBottomBtn = document.querySelector('.contact-bottom-btn')
  let scrollToTopElementInterval;
  contactBottomBtn.addEventListener('click', e => {
    //e.preventDefault()
    const scrollToTopElement = () => {
      document.body.scrollTop -= 10; // For Safari
      document.documentElement.scrollTop -= 10; // For Chrome, Firefox, IE and Opera
      if (contactForm.getBoundingClientRect().top > 5) {
        clearInterval(scrollToTopElementInterval)
      }
    }
    scrollToTopElementInterval = setInterval(scrollToTopElement, 5)
  })

  const servicesBtn = document.querySelector('.services-btn')
  let scrollToServicesInterval;
  let services = document.querySelector('.services')
  servicesBtn.addEventListener('click', e => {
    //e.preventDefault()
    const scrollToServices = () => {
      document.body.scrollTop -= 50; // For Safari
      document.documentElement.scrollTop -= 50; // For Chrome, Firefox, IE and Opera
      if (services.getBoundingClientRect().top > 5) {
        clearInterval(scrollToServicesInterval)
      }
    }
    scrollToServicesInterval = setInterval(scrollToServices, 10)
  })

  //Snackbar
  /* const sendBtn = document.querySelector('.send-btn') 
  sendBtn.addEventListener('click', e => {
    e.preventDefault()
    const snackbar = document.getElementById('snackbar')
    snackbar.className = 'show'
    setTimeout(() => {
      snackbar.classList.remove('show')
    }, 3000)
  }) */
};
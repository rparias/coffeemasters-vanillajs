const Router = {
  init: () => {
    document.querySelectorAll("a.navlink").forEach((a) => {
      a.addEventListener("click", (event) => {
        event.preventDefault();
        const url = event.target.getAttribute("href");
        Router.go(url);
      })
    });
    // Event Handler for URL changes
    window.addEventListener("popstate", (event) => {
      Router.go(event.state.route, false);
    })

    // Check and load initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    console.log(`Going to ${route}`)
    if (addToHistory) {
      history.pushState({ route }, "", route)
    }

    // render content
    let pageElement = null;
    switch(route) {
      case "/":
        pageElement = document.createElement("menu-page"); // create custom webcomponent
        break;
      case "/order":
        pageElement = document.createElement("order-page"); // create custom webcomponent
        break;
      default:
        if(route.startsWith("/product-")) {
          pageElement = document.createElement("details-page"); // create custom webcomponent
          const paramId = route.substring(route.lastIndexOf("-") + 1);
          pageElement.dataset.id = paramId;
        }
    }
    if (pageElement) {
      const cache = document.querySelector("main");
      cache.innerHTML = "";
      cache.appendChild(pageElement);
      window.scrollX = 0;
      window.scrollY = 0;
    }
  }
}

export default Router;
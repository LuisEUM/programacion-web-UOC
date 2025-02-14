/**
 * Clase para la búsqueda y filtrado de cómics (ComicsSearch.js)
 * Esta clase maneja la funcionalidad de búsqueda y filtrado, incluyendo:
 * - Gestión de filtros por nombre, ID, héroe y precio
 * - Manejo de parámetros de URL para filtros iniciales
 * - Integración con sistema de badges para filtros activos
 * - Actualización dinámica de resultados
 */
class ComicsSearch {
  /**
   * Constructor de la clase ComicsSearch
   * @param {HTMLElement} filterBadgesContainer - Contenedor para los badges de filtros
   */
  constructor(filterBadgesContainer) {
    this.filterBadges = new FilterBadges(
      filterBadgesContainer,
      this.handleRemoveFilter.bind(this)
    );
    this.setupEventListeners();
    this.checkUrlParameters();
  }

  /**
   * Verifica y procesa los parámetros de URL para establecer filtros iniciales
   * Prioridad de procesamiento: ID > héroe > precio > nombres
   */
  async checkUrlParameters() {
    const urlParams = new URLSearchParams(window.location.search);
    const initialFilters = {};

    // Procesar ID (tiene prioridad)
    const id = urlParams.get("id");
    if (id) {
      initialFilters.id = { value: id, displayText: `ID: ${id}` };
      document.querySelector("#searchById").value = id;
    }
    // Si no hay ID, procesar héroe
    else if (urlParams.get("hero")) {
      const heroId = urlParams.get("hero");
      initialFilters.hero = { value: heroId, displayText: `Héroe: ${heroId}` };
      document.querySelector("#searchByHero").value = heroId;
    }
    // Si no hay ID ni héroe, procesar precio
    else {
      const price = urlParams.get("price");
      if (price) {
        initialFilters.price = {
          value: price,
          displayText: `Precio máximo: $${price}`,
        };
        document.querySelector("#priceFilter").value = price;
      }
    }

    // Procesar nombres (pueden ser múltiples)
    const names = urlParams.getAll("name");
    names.forEach((name) => {
      if (name && name.trim()) {
        const timestamp = Date.now();
        initialFilters[`name_${timestamp}`] = {
          value: name.trim(),
          displayText: `Nombre: ${name.trim()}`,
        };
      }
    });

    // Si hay filtros iniciales, aplicarlos
    if (Object.keys(initialFilters).length > 0) {
      Object.entries(initialFilters).forEach(([type, filter]) => {
        this.filterBadges.addFilter(type, filter.value, filter.displayText);
      });
      this.applyAllFilters();
    }
  }

  /**
   * Configura los event listeners para los botones de filtrado
   */
  setupEventListeners() {
    document
      .querySelector("#searchByNameBtn")
      .addEventListener("click", () => this.handleSearchByName());
    document
      .querySelector("#searchByIdBtn")
      .addEventListener("click", () => this.handleSearchById());
    document
      .querySelector("#searchByHeroBtn")
      .addEventListener("click", () => this.handleSearchByHero());
    document
      .querySelector("#filterByPriceBtn")
      .addEventListener("click", () => this.handlePriceFilter());
  }

  /**
   * Maneja la búsqueda por nombre
   * Elimina el filtro anterior si existe y añade el nuevo
   */
  handleSearchByName() {
    const searchInput = document.querySelector("#searchByName");
    const searchTerm = searchInput.value.trim();

    if (!searchTerm) {
      this.filterBadges.removeFilter("name");
      return;
    }

    this.filterBadges.removeFilter("name");
    this.filterBadges.addFilter("name", searchTerm, `Nombre: ${searchTerm}`);

    searchInput.value = "";
    this.applyAllFilters();
  }

  /**
   * Maneja la búsqueda por ID
   * Valida que el ID sea un número válido
   */
  handleSearchById() {
    const searchInput = document.querySelector("#searchById");
    const comicId = parseInt(searchInput.value);

    if (isNaN(comicId)) {
      showToast("Por favor ingresa un ID válido", "error");
      return;
    }

    this.filterBadges.addFilter("id", comicId, `ID: ${comicId}`);
    searchInput.value = "";
    this.applyAllFilters();
  }

  /**
   * Maneja el filtrado por precio máximo
   * Valida que el precio sea un número válido
   */
  handlePriceFilter() {
    const priceInput = document.querySelector("#priceFilter");
    const maxPrice = parseFloat(priceInput.value);

    if (isNaN(maxPrice)) {
      showToast("Por favor ingresa un precio válido", "error");
      return;
    }

    this.filterBadges.addFilter(
      "price",
      maxPrice,
      `Precio máximo: $${maxPrice}`
    );
    priceInput.value = "";
    this.applyAllFilters();
  }

  /**
   * Maneja la búsqueda por ID de héroe
   * Valida que el ID sea un número válido
   */
  handleSearchByHero() {
    const searchInput = document.querySelector("#searchByHero");
    const heroId = parseInt(searchInput.value);

    if (isNaN(heroId)) {
      showToast("Por favor ingresa un ID de héroe válido", "error");
      return;
    }

    this.filterBadges.addFilter("hero", heroId, `Héroe: ${heroId}`);
    searchInput.value = "";
    this.applyAllFilters();
  }

  /**
   * Maneja la eliminación de filtros
   * Si se eliminan todos los filtros, limpia todos los inputs
   * @param {string} type - Tipo de filtro a eliminar ('all' para todos)
   */
  handleRemoveFilter(type) {
    if (type === "all") {
      document.querySelector("#searchByName").value = "";
      document.querySelector("#searchById").value = "";
      document.querySelector("#searchByHero").value = "";
      document.querySelector("#priceFilter").value = "";
      document.dispatchEvent(
        new CustomEvent("filtersUpdated", { detail: { filters: [] } })
      );
    } else {
      this.applyAllFilters();
    }
  }

  /**
   * Aplica todos los filtros activos y actualiza la vista
   * Emite un evento con los resultados filtrados
   */
  applyAllFilters() {
    const activeFilters = this.filterBadges.getActiveFilters();

    // Enviar los filtros actualizados al grid
    window.comicsGrid.updateFilters(activeFilters);

    // Emitir evento con la cantidad de filtros activos
    document.dispatchEvent(
      new CustomEvent("filtersUpdated", {
        detail: {
          filters: activeFilters,
          resultCount: window.comicsGrid.filteredComics.length,
        },
      })
    );
  }
}

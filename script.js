const serviceCounties = [
  "Calhoun",
  "Clark",
  "Columbia",
  "Dallas",
  "Garland",
  "Hempstead",
  "Hot Spring",
  "Howard",
  "Lafayette",
  "Little River",
  "Miller",
  "Montgomery",
  "Nevada",
  "Ouachita",
  "Pike",
  "Saline",
  "Sevier",
  "Union"
];

const countyNeighbors = {
  Arkansas: ["Desha", "Jefferson", "Lincoln", "Lonoke", "Monroe", "Phillips", "Prairie"],
  Ashley: ["Bradley", "Chicot", "Drew", "Union"],
  Baxter: ["Fulton", "Izard", "Marion", "Searcy", "Stone"],
  Benton: ["Carroll", "Madison", "Washington"],
  Boone: ["Carroll", "Marion", "Newton", "Searcy"],
  Bradley: ["Ashley", "Calhoun", "Cleveland", "Drew", "Union"],
  Calhoun: ["Bradley", "Cleveland", "Dallas", "Ouachita", "Union"],
  Carroll: ["Benton", "Boone", "Madison", "Newton"],
  Chicot: ["Ashley", "Desha", "Drew"],
  Clark: ["Dallas", "Hot Spring", "Montgomery", "Nevada", "Ouachita", "Pike"],
  Clay: ["Greene", "Randolph"],
  Cleburne: ["Faulkner", "Independence", "Stone", "Van Buren", "White"],
  Cleveland: ["Bradley", "Calhoun", "Dallas", "Drew", "Grant", "Jefferson", "Lincoln"],
  Columbia: ["Lafayette", "Nevada", "Ouachita", "Union"],
  Conway: ["Faulkner", "Perry", "Pope", "Van Buren", "Yell"],
  Craighead: ["Greene", "Jackson", "Lawrence", "Mississippi", "Poinsett"],
  Crawford: ["Franklin", "Madison", "Sebastian", "Washington"],
  Crittenden: ["Cross", "Lee", "Mississippi", "Poinsett", "St. Francis"],
  Cross: ["Crittenden", "Jackson", "Poinsett", "St. Francis", "Woodruff"],
  Dallas: ["Calhoun", "Clark", "Cleveland", "Grant", "Hot Spring", "Ouachita"],
  Desha: ["Arkansas", "Chicot", "Drew", "Lincoln", "Phillips"],
  Drew: ["Ashley", "Bradley", "Chicot", "Cleveland", "Desha", "Lincoln"],
  Faulkner: ["Cleburne", "Conway", "Lonoke", "Perry", "Pulaski", "Van Buren", "White"],
  Franklin: ["Crawford", "Johnson", "Logan", "Madison", "Sebastian"],
  Fulton: ["Baxter", "Izard", "Sharp"],
  Garland: ["Hot Spring", "Montgomery", "Perry", "Saline", "Yell"],
  Grant: ["Cleveland", "Dallas", "Hot Spring", "Jefferson", "Pulaski", "Saline"],
  Greene: ["Clay", "Craighead", "Lawrence", "Randolph"],
  Hempstead: ["Howard", "Lafayette", "Little River", "Miller", "Nevada", "Pike"],
  "Hot Spring": ["Clark", "Dallas", "Garland", "Grant", "Montgomery", "Saline"],
  Howard: ["Hempstead", "Pike", "Polk", "Sevier"],
  Independence: ["Cleburne", "Izard", "Jackson", "Lawrence", "Sharp", "Stone", "White"],
  Izard: ["Baxter", "Fulton", "Independence", "Sharp", "Stone"],
  Jackson: ["Craighead", "Cross", "Independence", "Lawrence", "Poinsett", "White", "Woodruff"],
  Jefferson: ["Arkansas", "Cleveland", "Grant", "Lincoln", "Lonoke", "Pulaski"],
  Johnson: ["Franklin", "Logan", "Madison", "Newton", "Pope"],
  Lafayette: ["Columbia", "Hempstead", "Miller", "Nevada"],
  Lawrence: ["Craighead", "Greene", "Independence", "Jackson", "Randolph", "Sharp"],
  Lee: ["Crittenden", "Monroe", "Phillips", "St. Francis"],
  Lincoln: ["Arkansas", "Cleveland", "Desha", "Drew", "Jefferson"],
  "Little River": ["Hempstead", "Miller", "Sevier"],
  Logan: ["Franklin", "Johnson", "Pope", "Scott", "Sebastian", "Yell"],
  Lonoke: ["Arkansas", "Faulkner", "Jefferson", "Prairie", "Pulaski", "White"],
  Madison: ["Benton", "Carroll", "Crawford", "Franklin", "Johnson", "Newton", "Washington"],
  Marion: ["Baxter", "Boone", "Searcy"],
  Miller: ["Hempstead", "Lafayette", "Little River"],
  Mississippi: ["Craighead", "Crittenden", "Poinsett"],
  Monroe: ["Arkansas", "Lee", "Phillips", "Prairie", "St. Francis", "Woodruff"],
  Montgomery: ["Clark", "Garland", "Hot Spring", "Howard", "Pike", "Polk", "Scott", "Yell"],
  Nevada: ["Clark", "Columbia", "Hempstead", "Lafayette", "Ouachita", "Pike"],
  Newton: ["Boone", "Carroll", "Johnson", "Madison", "Pope", "Searcy"],
  Ouachita: ["Calhoun", "Clark", "Columbia", "Dallas", "Nevada", "Union"],
  Perry: ["Conway", "Faulkner", "Garland", "Pulaski", "Saline", "Yell"],
  Phillips: ["Arkansas", "Desha", "Lee", "Monroe"],
  Pike: ["Clark", "Hempstead", "Howard", "Montgomery", "Nevada"],
  Poinsett: ["Craighead", "Crittenden", "Cross", "Jackson", "Mississippi"],
  Polk: ["Howard", "Montgomery", "Scott", "Sevier"],
  Pope: ["Conway", "Johnson", "Logan", "Newton", "Searcy", "Van Buren", "Yell"],
  Prairie: ["Arkansas", "Lonoke", "Monroe", "White", "Woodruff"],
  Pulaski: ["Faulkner", "Grant", "Jefferson", "Lonoke", "Perry", "Saline"],
  Randolph: ["Clay", "Greene", "Lawrence", "Sharp"],
  Saline: ["Garland", "Grant", "Hot Spring", "Perry", "Pulaski"],
  Scott: ["Logan", "Montgomery", "Polk", "Sebastian", "Yell"],
  Searcy: ["Baxter", "Boone", "Marion", "Newton", "Pope", "Stone", "Van Buren"],
  Sebastian: ["Crawford", "Franklin", "Logan", "Scott"],
  Sevier: ["Howard", "Little River", "Polk"],
  Sharp: ["Fulton", "Independence", "Izard", "Lawrence", "Randolph"],
  "St. Francis": ["Crittenden", "Cross", "Lee", "Monroe", "Woodruff"],
  Stone: ["Baxter", "Cleburne", "Independence", "Izard", "Searcy", "Van Buren"],
  Union: ["Ashley", "Bradley", "Calhoun", "Columbia", "Ouachita"],
  "Van Buren": ["Cleburne", "Conway", "Faulkner", "Pope", "Searcy", "Stone"],
  Washington: ["Benton", "Crawford", "Madison"],
  White: ["Cleburne", "Faulkner", "Independence", "Jackson", "Lonoke", "Prairie", "Woodruff"],
  Woodruff: ["Cross", "Jackson", "Monroe", "Prairie", "St. Francis", "White"],
  Yell: ["Conway", "Garland", "Logan", "Montgomery", "Perry", "Pope", "Scott"]
};

// County relationships use a 1-mile minimum shared boundary so corner/sliver
// contacts do not count as practical county adjacency.
const borderCountyNeighbors = {
  "Adair, OK": ["Benton", "Crawford", "Washington"],
  "Barry, MO": ["Benton", "Carroll"],
  "Bolivar, MS": ["Chicot", "Desha"],
  "Bossier, LA": ["Lafayette"],
  "Bowie, TX": ["Little River", "Miller"],
  "Butler, MO": ["Clay"],
  "Caddo, LA": ["Lafayette", "Miller"],
  "Cass, TX": ["Miller"],
  "Claiborne, LA": ["Columbia", "Union"],
  "Coahoma, MS": ["Phillips"],
  "Delaware, OK": ["Benton"],
  "DeSoto, MS": ["Crittenden"],
  "Dunklin, MO": ["Clay", "Craighead", "Greene", "Mississippi"],
  "Dyer, TN": ["Mississippi"],
  "East Carroll, LA": ["Chicot"],
  "Howell, MO": ["Fulton"],
  "Lauderdale, TN": ["Mississippi"],
  "Le Flore, OK": ["Polk", "Scott", "Sebastian"],
  "McCurtain, OK": ["Little River", "Polk", "Sevier"],
  "McDonald, MO": ["Benton"],
  "Morehouse, LA": ["Ashley", "Chicot"],
  "Oregon, MO": ["Fulton", "Randolph", "Sharp"],
  "Ozark, MO": ["Baxter", "Fulton", "Marion"],
  "Pemiscot, MO": ["Mississippi"],
  "Ripley, MO": ["Clay", "Randolph"],
  "Sequoyah, OK": ["Crawford"],
  "Shelby, TN": ["Crittenden", "Mississippi"],
  "Stone, MO": ["Carroll"],
  "Taney, MO": ["Boone", "Carroll", "Marion"],
  "Tipton, TN": ["Crittenden", "Mississippi"],
  "Tunica, MS": ["Crittenden", "Lee", "Phillips"],
  "Union, LA": ["Union"],
  "Washington, MS": ["Chicot"],
  "Webster, LA": ["Columbia", "Lafayette"],
  "West Carroll, LA": ["Chicot"]
};

const noReferralExceptions = {
  Clark: ["Miller"],
  Columbia: ["Bowie, TX"],
  Hempstead: ["Garland", "Hot Spring"],
  Howard: ["Bowie, TX", "Garland"],
  "Little River": ["Clark"],
  Nevada: ["Bowie, TX", "Garland"],
  Ouachita: ["Garland"],
  Pike: ["Bowie, TX", "Saline"],
  Sevier: ["Clark"]
};

const arkansasCounties = Object.keys(countyNeighbors).sort((a, b) => a.localeCompare(b));

const map = document.getElementById("arkansasMap");
const mapSummary = document.getElementById("mapSummary");
const mapDescription = document.getElementById("mapDescription");
const eligibleCounties = document.getElementById("eligibleCounties");
const themeToggle = document.getElementById("themeToggle");
const themeText = themeToggle?.querySelector(".theme-text");
const zoomInButton = document.getElementById("zoomIn");
const zoomOutButton = document.getElementById("zoomOut");
const zoomResetButton = document.getElementById("zoomReset");
const countyPathElements = new Map();
const countyLabelElements = new Map();
const initialHomeCounty = serviceCounties[0];
const savedTheme = localStorage.getItem("cadc-referral-theme");
let baseViewBox = null;
let currentViewBox = null;
let panState = null;
let suppressNextCountyClick = false;
const compactLabelCounties = new Set([
  "Bowie, TX",
  "Cass, TX",
  "Bossier, LA",
  "Caddo, LA",
  "Webster, LA",
  "Union, LA",
  "Morehouse, LA",
  "East Carroll, LA",
  "West Carroll, LA",
  "Issaquena, MS",
  "Coahoma, MS",
  "Tunica, MS",
  "DeSoto, MS",
  "Shelby, TN",
  "Tipton, TN",
  "Dyer, TN",
  "Lauderdale, TN"
]);

function findShortestCountyPath(start, end) {
  const queue = [[start]];
  const visited = new Set([start]);

  while (queue.length > 0) {
    const path = queue.shift();
    const county = path[path.length - 1];

    if (county === end) {
      return path;
    }

    countyNeighbors[county].forEach((neighbor) => {
      if (!visited.has(neighbor)) {
        visited.add(neighbor);
        queue.push([...path, neighbor]);
      }
    });
  }

  return null;
}

function getNoReferralCounties(homeCounty) {
  const ruleBasedCounties = arkansasCounties.filter((county) => {
    const path = findShortestCountyPath(homeCounty, county);
    return path && path.length - 1 <= 2;
  });
  const arkansasExceptionCounties = getNoReferralExceptions(homeCounty)
    .filter((county) => arkansasCounties.includes(county));

  return [...new Set([...ruleBasedCounties, ...arkansasExceptionCounties])]
    .sort((a, b) => a.localeCompare(b));
}

function getNoReferralExceptions(homeCounty) {
  return noReferralExceptions[homeCounty] || [];
}

function getNoReferralGroups(homeCounty) {
  return getNoReferralCounties(homeCounty).reduce((groups, county) => {
    const path = findShortestCountyPath(homeCounty, county);
    const distance = path ? path.length - 1 : null;

    if (distance != null && distance <= 2) {
      groups[distance].push(county);
    }

    return groups;
  }, { 0: [], 1: [], 2: [] });
}

function getPossibleBorderCounties(homeCounty) {
  const borderExceptionSet = new Set(
    getNoReferralExceptions(homeCounty).filter((county) => county.includes(","))
  );

  return (arkansasCountyMap.borderCounties || []).filter(({ name }) => {
    if (borderExceptionSet.has(name)) {
      return true;
    }

    const neighboringArkansasCounties = borderCountyNeighbors[name] || [];
    return neighboringArkansasCounties.some((county) => {
      const path = findShortestCountyPath(homeCounty, county);
      return path && path.length - 1 <= 1;
    });
  });
}

function getVisibleNoReferralExceptions(homeCounty) {
  const exceptionSet = new Set(getNoReferralExceptions(homeCounty));
  const ruleBasedArkansasCounties = new Set(arkansasCounties.filter((county) => {
    const path = findShortestCountyPath(homeCounty, county);
    return path && path.length - 1 <= 2;
  }));
  const ruleBasedBorderCounties = new Set(getPossibleBorderCountiesWithoutExceptions(homeCounty).map(({ name }) => name));

  return [...exceptionSet].filter((county) => {
    if (arkansasCounties.includes(county)) {
      return !ruleBasedArkansasCounties.has(county);
    }

    return !ruleBasedBorderCounties.has(county);
  });
}

function getPossibleBorderCountiesWithoutExceptions(homeCounty) {
  return (arkansasCountyMap.borderCounties || []).filter(({ name }) => {
    const neighboringArkansasCounties = borderCountyNeighbors[name] || [];
    return neighboringArkansasCounties.some((county) => {
      const path = findShortestCountyPath(homeCounty, county);
      return path && path.length - 1 <= 1;
    });
  });
}

function getPathCenter(path) {
  const values = path.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const xs = [];
  const ys = [];

  for (let index = 0; index < values.length; index += 2) {
    xs.push(values[index]);
    ys.push(values[index + 1]);
  }

  return {
    x: (Math.min(...xs) + Math.max(...xs)) / 2,
    y: (Math.min(...ys) + Math.max(...ys)) / 2
  };
}

function getPathPoints(path) {
  const values = path.match(/-?\d+(?:\.\d+)?/g).map(Number);
  const points = [];

  for (let index = 0; index < values.length; index += 2) {
    points.push({ x: values[index], y: values[index + 1] });
  }

  return points;
}

function getCountySegments(path) {
  const points = getPathPoints(path);
  const segments = [];

  for (let index = 1; index < points.length; index += 1) {
    const start = points[index - 1];
    const end = points[index];

    if (start.x !== end.x || start.y !== end.y) {
      segments.push({ start, end });
    }
  }

  return segments;
}

function getPointToSegmentDistance(point, segment) {
  const dx = segment.end.x - segment.start.x;
  const dy = segment.end.y - segment.start.y;
  const lengthSquared = dx * dx + dy * dy;
  const rawT = lengthSquared
    ? ((point.x - segment.start.x) * dx + (point.y - segment.start.y) * dy) / lengthSquared
    : 0;
  const t = Math.max(0, Math.min(1, rawT));
  const x = segment.start.x + dx * t;
  const y = segment.start.y + dy * t;

  return Math.hypot(point.x - x, point.y - y);
}

function isPointNearSegments(point, segments, tolerance = 1.2) {
  return segments.some((segment) => getPointToSegmentDistance(point, segment) <= tolerance);
}

function isExteriorServiceSegment(segment, comparisonSegments) {
  const midPoint = {
    x: (segment.start.x + segment.end.x) / 2,
    y: (segment.start.y + segment.end.y) / 2
  };

  return !isPointNearSegments(midPoint, comparisonSegments);
}

function drawServiceRegionBorder() {
  const borderLayer = document.createElementNS("http://www.w3.org/2000/svg", "g");

  borderLayer.classList.add("service-region-border-layer");

  arkansasCountyMap.counties
    .filter(({ name }) => serviceCounties.includes(name))
    .forEach(({ path }) => {
      const border = document.createElementNS("http://www.w3.org/2000/svg", "path");
      border.setAttribute("d", path);
      border.classList.add("service-region-border");
      borderLayer.appendChild(border);
  });

  map.appendChild(borderLayer);
}

function createCountyLabel({ name, path, isBorderCounty }) {
  const { x, y } = getPathCenter(path);
  const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
  const words = name.split(" ");

  label.setAttribute("x", x);
  label.setAttribute("y", y);
  label.classList.add("county-label");
  label.dataset.county = name;

  if (compactLabelCounties.has(name)) {
    label.classList.add("is-compact-label");
  }

  if (!serviceCounties.includes(name)) {
    label.classList.add("is-secondary-label");
  }

  if (isBorderCounty) {
    label.classList.add("is-border-label");
  }

  if (words.length === 1) {
    label.textContent = name;
    return label;
  }

  words.forEach((word, index) => {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "tspan");
    line.setAttribute("x", x);
    line.setAttribute("dy", index === 0 ? "-0.35em" : "1.15em");
    line.textContent = word;
    label.appendChild(line);
  });

  return label;
}

function parseViewBox(viewBox) {
  const [x, y, width, height] = viewBox.split(" ").map(Number);
  return { x, y, width, height };
}

function setMapViewBox(viewBox) {
  currentViewBox = viewBox;
  map.setAttribute("viewBox", `${viewBox.x} ${viewBox.y} ${viewBox.width} ${viewBox.height}`);
}

function clampMapViewBox(viewBox) {
  if (!baseViewBox) {
    return viewBox;
  }

  const maxWidth = baseViewBox.width;
  const minWidth = baseViewBox.width * 0.22;
  const width = Math.max(minWidth, Math.min(maxWidth, viewBox.width));
  const height = width * (baseViewBox.height / baseViewBox.width);
  const maxX = baseViewBox.x + baseViewBox.width - width;
  const maxY = baseViewBox.y + baseViewBox.height - height;

  return {
    x: Math.max(baseViewBox.x, Math.min(maxX, viewBox.x)),
    y: Math.max(baseViewBox.y, Math.min(maxY, viewBox.y)),
    width,
    height
  };
}

function zoomMap(scale, clientX, clientY) {
  if (!map || !currentViewBox) {
    return;
  }

  const rect = map.getBoundingClientRect();
  const focusX = clientX == null ? rect.left + rect.width / 2 : clientX;
  const focusY = clientY == null ? rect.top + rect.height / 2 : clientY;
  const svgX = currentViewBox.x + ((focusX - rect.left) / rect.width) * currentViewBox.width;
  const svgY = currentViewBox.y + ((focusY - rect.top) / rect.height) * currentViewBox.height;
  const nextWidth = currentViewBox.width * scale;
  const nextHeight = currentViewBox.height * scale;
  const nextViewBox = {
    x: svgX - ((focusX - rect.left) / rect.width) * nextWidth,
    y: svgY - ((focusY - rect.top) / rect.height) * nextHeight,
    width: nextWidth,
    height: nextHeight
  };

  setMapViewBox(clampMapViewBox(nextViewBox));
}

function resetMapZoom() {
  if (baseViewBox) {
    setMapViewBox({ ...baseViewBox });
  }
}

function setupMapNavigation() {
  if (!map) {
    return;
  }

  zoomInButton?.addEventListener("click", () => zoomMap(0.78));
  zoomOutButton?.addEventListener("click", () => zoomMap(1.28));
  zoomResetButton?.addEventListener("click", resetMapZoom);

  map.addEventListener("wheel", (event) => {
    event.preventDefault();
    zoomMap(event.deltaY < 0 ? 0.88 : 1.14, event.clientX, event.clientY);
  }, { passive: false });

  map.addEventListener("pointerdown", (event) => {
    if (event.button !== 0 || !currentViewBox) {
      return;
    }

    panState = {
      pointerId: event.pointerId,
      startX: event.clientX,
      startY: event.clientY,
      startViewBox: { ...currentViewBox },
      targetCounty: event.target?.dataset?.county,
      hasMoved: false
    };
    map.setPointerCapture(event.pointerId);
    map.classList.add("is-panning");
  });

  map.addEventListener("pointermove", (event) => {
    if (!panState || panState.pointerId !== event.pointerId) {
      return;
    }

    const rect = map.getBoundingClientRect();
    const dx = ((event.clientX - panState.startX) / rect.width) * panState.startViewBox.width;
    const dy = ((event.clientY - panState.startY) / rect.height) * panState.startViewBox.height;

    if (Math.abs(event.clientX - panState.startX) > 4 || Math.abs(event.clientY - panState.startY) > 4) {
      panState.hasMoved = true;
    }

    setMapViewBox(clampMapViewBox({
      ...panState.startViewBox,
      x: panState.startViewBox.x - dx,
      y: panState.startViewBox.y - dy
    }));
  });

  map.addEventListener("pointerup", (event) => {
    if (!panState || panState.pointerId !== event.pointerId) {
      return;
    }

    if (!panState.hasMoved && serviceCounties.includes(panState.targetCounty)) {
      selectHomeCountyFromMap(panState.targetCounty);
    }

    suppressNextCountyClick = panState.hasMoved;
    window.setTimeout(() => {
      suppressNextCountyClick = false;
    }, 0);
    panState = null;
    map.classList.remove("is-panning");
  });

  map.addEventListener("pointercancel", () => {
    panState = null;
    map.classList.remove("is-panning");
  });
}

function renderCountyShape({ name, path, isBorderCounty }) {
    const county = document.createElementNS("http://www.w3.org/2000/svg", "path");
    county.setAttribute("d", path);
    county.dataset.county = name;
    county.classList.add("county");

    if (isBorderCounty) {
      county.classList.add("border-county");
    }

    if (serviceCounties.includes(name)) {
      county.classList.add("service-county");
      county.setAttribute("tabindex", "0");
      county.setAttribute("role", "button");
      county.setAttribute("aria-label", `Select ${name} County as home county`);
      county.addEventListener("click", () => {
        if (suppressNextCountyClick) {
          suppressNextCountyClick = false;
          return;
        }

        selectHomeCountyFromMap(name);
      });
      county.addEventListener("keydown", (event) => {
        if (event.key === "Enter" || event.key === " ") {
          event.preventDefault();
          selectHomeCountyFromMap(name);
        }
      });
    } else {
      county.setAttribute("aria-label", isBorderCounty ? `${name} border county` : `${name} County`);
    }

    const label = document.createElementNS("http://www.w3.org/2000/svg", "title");
    label.textContent = isBorderCounty ? `${name} border county` : `${name} County`;
    county.appendChild(label);

    map.appendChild(county);
    countyPathElements.set(name, county);
}

function renderCountyMap() {
  if (!map || typeof arkansasCountyMap === "undefined") {
    return;
  }

  map.setAttribute("viewBox", arkansasCountyMap.viewBox);
  baseViewBox = parseViewBox(arkansasCountyMap.viewBox);
  currentViewBox = { ...baseViewBox };
  map.innerHTML = "";
  countyPathElements.clear();
  countyLabelElements.clear();

  arkansasCountyMap.counties
    .filter(({ name }) => !serviceCounties.includes(name))
    .forEach(renderCountyShape);

  drawServiceRegionBorder();

  arkansasCountyMap.counties
    .filter(({ name }) => serviceCounties.includes(name))
    .forEach(renderCountyShape);

  arkansasCountyMap.counties.forEach((county) => {
    const label = createCountyLabel(county);
    map.appendChild(label);
    countyLabelElements.set(county.name, label);
  });
}

function updateMapForHomeCounty(homeCounty) {
  if (!map) {
    return;
  }

  const eligible = getNoReferralCounties(homeCounty);
  const eligibleSet = new Set(eligible);
  const possibleBorderCounties = getPossibleBorderCounties(homeCounty);
  const possibleBorderCountySet = new Set(possibleBorderCounties.map(({ name }) => name));
  const visibleExceptions = getVisibleNoReferralExceptions(homeCounty);

  countyPathElements.forEach((countyElement, county) => {
    countyElement.classList.toggle("is-home", county === homeCounty);
    countyElement.classList.toggle("is-eligible", eligibleSet.has(county) && county !== homeCounty);
    countyElement.classList.toggle("is-border-eligible", possibleBorderCountySet.has(county));
  });

  countyLabelElements.forEach((labelElement, county) => {
    labelElement.classList.toggle("is-eligible-label", eligibleSet.has(county) && county !== homeCounty);
    labelElement.classList.toggle("is-border-eligible-label", possibleBorderCountySet.has(county));
    labelElement.classList.toggle("is-home-label", county === homeCounty);
  });

  const groups = getNoReferralGroups(homeCounty);

  mapSummary.textContent = `${homeCounty} County selected`;
  mapDescription.textContent = "";
  eligibleCounties.innerHTML = `
    <div class="county-group">
      <h4>Home county</h4>
      ${groups[0].map((county) => `<span class="home-chip">${county}</span>`).join("")}
    </div>
    <div class="county-group">
      <h4>1 county away</h4>
      ${groups[1].map((county) => `<span>${county}</span>`).join("")}
    </div>
    <div class="county-group">
      <h4>2 counties away</h4>
      ${groups[2].map((county) => `<span>${county}</span>`).join("")}
    </div>
    ${visibleExceptions.length ? `
      <div class="county-group exception-group">
        <h4>Approved exceptions</h4>
        ${visibleExceptions.map((county) => `<span>${county}</span>`).join("")}
      </div>
    ` : ""}
    <div class="county-group border-group">
      <h4>Possible if within 50 miles</h4>
      <p>These out-of-state border counties still need the destination address checked against the 50-mile limit.</p>
      ${possibleBorderCounties.map(({ name }) => `<span>${name}</span>`).join("")}
    </div>
  `;
}

function selectHomeCountyFromMap(county) {
  updateMapForHomeCounty(county);
}

function setTheme(theme) {
  const isDark = theme === "dark";
  document.body.classList.toggle("dark-mode", isDark);

  if (themeToggle) {
    if (themeText) {
      themeText.textContent = isDark ? "Light mode" : "Dark mode";
    }
    themeToggle.setAttribute("aria-pressed", String(isDark));
  }

  localStorage.setItem("cadc-referral-theme", theme);
}

themeToggle?.addEventListener("click", () => {
  setTheme(document.body.classList.contains("dark-mode") ? "light" : "dark");
});

setTheme(savedTheme === "dark" ? "dark" : "light");
renderCountyMap();
setupMapNavigation();
updateMapForHomeCounty(initialHomeCounty);

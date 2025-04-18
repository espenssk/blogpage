
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("search-input");
  const results = document.getElementById("search-results");
  const data = [];

  fetch('/search.json')
    .then(res => res.json())
    .then(json => {
      const fuse = new Fuse(json, {
        keys: ['title', 'excerpt']
      });

      input.addEventListener("input", () => {
        const query = input.value;
        results.innerHTML = '';
        if (query.length > 2) {
          const output = fuse.search(query);
          output.forEach(({ item }) => {
            const li = document.createElement('li');
            li.innerHTML = `<a href="${item.url}" style="color: white">${item.title}</a>`;
            results.appendChild(li);
          });
        }
      });
    });
});

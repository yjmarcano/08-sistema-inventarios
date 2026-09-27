async function cargarInventario() {
  const res = await fetch('/api/inventario');
  const items = await res.json();
  const tbody = document.querySelector('#tablaInventario tbody');
  tbody.innerHTML = items.map(i => `<tr><td>${i.nombre}</td><td>${i.stock}</td><td>$${i.precio.toFixed(2)}</td></tr>`).join('');
}
async function agregarItem() {
  const nombre = document.getElementById('nombre').value;
  const stock = document.getElementById('stock').value;
  const precio = document.getElementById('precio').value;
  if(!nombre || !stock || !precio) return alert('Completa todos los campos');
  await fetch('/api/inventario', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ nombre, stock, precio })
  });
  document.getElementById('nombre').value = '';
  document.getElementById('stock').value = '';
  document.getElementById('precio').value = '';
  cargarInventario();
}
cargarInventario();
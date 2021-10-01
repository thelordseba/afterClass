class Producto {
  constructor(nombre, precio, comentarios = []) {
    this.nombre = nombre
    this.precio = precio
    this.comentarios = comentarios
  }

  getNombre () {
    return this.nombre
  }

  getPrecio () {
    return this.precio
  }

  setNombre (nuevoNombre) {
    this.nombre = nuevoNombre
  }

  addComentario (nuevoComentario) {
    this.comentarios.push(nuevoComentario)
  }

  getUsuarios () {
    return this.comentarios.map(elemento => elemento.usuario)
  }

  getComentarios () {
    const misComentarios = []
    this.comentarios.forEach(elemento => misComentarios.push(elemento.descripcion))
    return misComentarios
  }

  getCantComentarios () {
    return this.comentarios.length
  }
}


//-----------------------------------------------------------------------------------------------




const miProducto = new Producto('Heladera', 50000, [])

// console.log(`El precio del producto ${miProducto.getNombre()} es: $${miProducto.getPrecio()}`)

// miProducto.setNombre('Freezer')

// console.log(miProducto.getNombre())

miProducto.addComentario({
  usuario: 'Mara',
  descripcion: 'Muy buen producto'
})

miProducto.addComentario({
  usuario: 'Diego',
  descripcion: 'Muy malo el producto'
})

miProducto.addComentario({
  usuario: 'Julia',
  descripcion: 'Me encantó'
})

console.log(miProducto.getCantComentarios())


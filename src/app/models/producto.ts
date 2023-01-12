export interface Producto {
  id: number;
  nombre: string;
  precio: number;
  descripcion: string;
  imagen : string;
  marca: {
    id: number;
    nombre: string;
    fotoMarca : string;
  }
}

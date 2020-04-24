export interface Product {
  iD_PRODUCTO: number;
  codigO_PRODUCTO: string;
  nombrE_PRODUCTO: string;
  descripcion: string;
  imageN_PROD?: any;
  cantidaD_PRODUCTO: number;
  preciO_UNIDAD: number;
  iD_CATEGORIA: number;
  categoria: Categoria;
}

export interface Categoria {
  iD_CATEGORIA: number;
  nombrE_CATEGORIA: string;
}

export class Product {
  iD_PRODUCTO: number;
  codigO_PRODUCTO: string;
  nombrE_PRODUCTO: string;
  descripcion: string;
  imageN_PROD?: any;
  cantidaD_PRODUCTO: number;
  preciO_UNIDAD: number;
  iD_CATEGORIA: number;
  categoria: Categoria;
}

export interface Factura {
  iD_F_VENTA: number;
  documentO_C: string;
  nombrE_C: string;
  apellidO_C: string;
  telefonO_C: string;
  fecha: string;
  iD_PRODUCTO: number;
  cantidad: number;
  precio: number;
  subtotal: number;
  total: number;
  productos: Productos;
}

interface Productos {
  iD_PRODUCTO: number;
  codigO_PRODUCTO: string;
  nombrE_PRODUCTO: string;
  descripcion: string;
  imageN_PROD?: any;
  cantidaD_PRODUCTO: number;
  preciO_UNIDAD: number;
  iD_CATEGORIA: number;
  categoria?: any;
}

export class Factura {
  iD_F_VENTA: number;
  documentO_C: string;
  nombrE_C: string;
  apellidO_C: string;
  telefonO_C: string;
  fecha: string;
  iD_PRODUCTO: number;
  cantidad: number;
  precio: number;
  subtotal: number;
  total: number;
  productos: Productos;
}

/**
 * Catálogo base de marcas/modelos/años de vehículos para el buscador
 * de compatibilidad. Estructura pensada para ampliarse fácilmente:
 * agregar una marca es agregar una entrada al array `marcasVehiculo`.
 */
export interface ModeloVehiculo {
  modelo: string;
  anios: number[];
}

export interface MarcaVehiculo {
  marca: string;
  modelos: ModeloVehiculo[];
}

export const marcasVehiculo: MarcaVehiculo[] = [
  {
    marca: "Toyota",
    modelos: [
      { modelo: "Corolla", anios: [2015, 2016, 2017, 2018, 2019, 2020, 2021, 2022] },
      { modelo: "Hilux", anios: [2016, 2017, 2018, 2019, 2020, 2021, 2022] },
      { modelo: "RAV4", anios: [2017, 2018, 2019, 2020, 2021] },
    ],
  },
  {
    marca: "Nissan",
    modelos: [
      { modelo: "Sentra", anios: [2016, 2017, 2018, 2019, 2020, 2021] },
      { modelo: "X-Trail", anios: [2015, 2016, 2017, 2018, 2019] },
    ],
  },
  {
    marca: "Chevrolet",
    modelos: [
      { modelo: "Sail", anios: [2014, 2015, 2016, 2017, 2018, 2019] },
      { modelo: "Onix", anios: [2018, 2019, 2020, 2021, 2022] },
    ],
  },
  {
    marca: "Suzuki",
    modelos: [
      { modelo: "Vitara", anios: [2016, 2017, 2018, 2019, 2020] },
      { modelo: "Swift", anios: [2015, 2016, 2017, 2018, 2019, 2020] },
    ],
  },
];

export function getModelosPorMarca(marca: string): ModeloVehiculo[] {
  return marcasVehiculo.find((m) => m.marca === marca)?.modelos ?? [];
}

export function getAniosPorModelo(marca: string, modelo: string): number[] {
  return (
    getModelosPorMarca(marca).find((m) => m.modelo === modelo)?.anios ?? []
  );
}

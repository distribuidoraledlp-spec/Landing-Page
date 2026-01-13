import { useEffect, useState } from "react";
import { CheckCircle, ChevronLeft, ChevronRight } from "lucide-react";

const brands = [
  "ZELTA", "YAAR", "WIRE FLEX", "VR PLAST", "Viyilant", "VALCAR",
  "Tecnocom", "TBCIN", "Tacsa", "TAAD", "STARLIGHT", "SMARTFIX",
  "Sin par", "SILVER SHADOW", "Sica", "SERENA", "SCHAFER", "SANTORO",
  "SAN JUSTO", "SAMET", "ROMAX", "Richi", "REFLEX", "RAPIFIX",
  "Psf", "POLINAM", "PHILIPS", "PERCANPLAST", "NITANYL", "Mota",
  "Mig", "MH", "LUXOM", "LUMILAGRO", "LORENZETTI", "Light Tronic",
  "Kalop", "Jeluz", "ILUMINAR", "Igmaplast", "IGMA", "HELATODO",
  "Grilon", "Giny plast", "GINY PLAS", "GENROD", "GENESIS", "Gen rod",
  "GAMISOL", "FIBOSA", "FERROLUX", "F.S", "Eveready", "Energizer",
  "CORILUX", "CONOMETAL", "Candela", "BONOMINI", "BMB", "BLUMT",
  "ASC", "ARGENJAB", "ANTHAY", "ABB", "9 DE JULIO", "3M", "180° ILUMINACION"
];

const BrandsSection = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(12);

  // DETECTOR DE PANTALLA:
  // Móvil (< 768px) -> 6 marcas (2 columnas x 3 filas)
  // PC (>= 768px) -> 12 marcas (4 columnas x 3 filas)
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setItemsPerPage(6);
      } else {
        setItemsPerPage(12);
      }
    };

    // Ejecutar al inicio y al cambiar tamaño
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalPages = Math.ceil(brands.length / itemsPerPage);
  
  // Auto-rotate every 4 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentPage((prev) => (prev + 1) % totalPages);
    }, 4000);
    
    return () => clearInterval(timer);
  }, [totalPages]);
  
  const currentBrands = brands.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );
  
  const goToPrev = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };
  
  const goToNext = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  return (
    <section className="py-20 bg-concrete">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-

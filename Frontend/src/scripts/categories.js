import Diplomatico from "../assets/Diplomatico.png";
import Bolyki_egri_bikaver from "../assets/Bolyki_egri_bikaver.png";
import Pilsner from "../assets/Pilsner_urquell.png";
import Tequila_anejo from "../assets/Tequila_anejo.png";
import Bombay_sapphire from "../assets/Bombay_sapphire.png";
import El_dorado_15 from "../assets/El_dorado_15.png";
import Redbreast_12 from "../assets/Redbreast_12.png";
import Hennessy_vs_cognac from "../assets/Hennessy_vs_cognac.png";
import Martini_rosso from "../assets/Martini_rosso.png";
import Baileys from "../assets/Baileys.png";
import Krug_grande from "../assets/Krug_grande.png";
import Ciroc from "../assets/Ciroc.png";

let categories = [
  { category: "alkoholos_italok", subcategory: "Sör", image: Pilsner },
  { category: "alkoholos_italok", subcategory: "Bor", image: Bolyki_egri_bikaver },
  {
    category: "alkoholos_italok",
    subcategory: "Tequila",
    image: Tequila_anejo,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Gin",
    image: Bombay_sapphire,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Rum",
    image: El_dorado_15,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Whiskey",
    image: Redbreast_12,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Cognac",
    image: Hennessy_vs_cognac,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Likőr",
    image: Baileys,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Vodka",
    image: Ciroc,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Pezsgő",
    image: Krug_grande,
  },
  {
    category: "alkoholos_italok",
    subcategory: "Vermut",
    image: Martini_rosso,
  },
  {
    category: "uditok",
    subcategory: "Szénsavas",
    image: Diplomatico,
  },
  {
    category: "kiegeszitok",
    subcategory: "Eszközök",
    image: Diplomatico,
  },
];

export default categories;

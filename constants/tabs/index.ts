import DetailScreen from "@/app/screens/details";
import HomeScreen from "@/app/screens/home";
import ProductScreen from "@/app/screens/product";

export const exampleTabs = [
  {
    name: "Home",
    title: "Home",
    icon: "home",
    component: HomeScreen,
  },
  {
    name: "Dettagli",
    title: "Dettagli",
    icon: "sparkles",
    component: DetailScreen,
  },
  {
    name: "Prodotto",
    title: "Prodotto",
    icon: "image",
    component: ProductScreen,
  },
] as const;

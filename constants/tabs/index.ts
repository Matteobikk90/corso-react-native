import HomeScreen from "@/app/screens/home";
import ProductScreen from "@/app/screens/product";
import { DetailsStackNavigator } from "@/components/details-stack";

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
    component: DetailsStackNavigator,
  },
  {
    name: "Prodotto",
    title: "Prodotto",
    icon: "image",
    component: ProductScreen,
  },
] as const;

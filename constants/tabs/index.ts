import type { DrawerParamList } from "@/types/navigation";
import type { ComponentType } from "react";

import HomeScreen from "@/app/screens/home";
import ProductScreen from "@/app/screens/product";
import { DetailsStackNavigator } from "@/components/details-stack";

type DrawerRouteName = keyof DrawerParamList;

export const exampleTabs = [
  {
    name: "Home" as const,
    title: "Home",
    icon: "home" as const,
    component: HomeScreen as ComponentType,
  },
  {
    name: "Dettagli" as const,
    title: "Dettagli",
    icon: "sparkles" as const,
    component: DetailsStackNavigator as ComponentType,
  },
  {
    name: "Prodotto" as const,
    title: "Prodotto",
    icon: "image" as const,
    component: ProductScreen as ComponentType,
  },
] satisfies readonly {
  name: DrawerRouteName;
  title: string;
  icon: string;
  component: ComponentType;
}[];

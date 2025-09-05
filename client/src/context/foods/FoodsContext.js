import { createContext } from "react";
import { initialFoodsContext } from "./initialFoodsContext";

export const FoodsContext = createContext(initialFoodsContext);
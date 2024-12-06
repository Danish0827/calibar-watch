"use client";

import { store } from "@/store/store";
import React, { ReactNode } from "react";
import { Provider } from "react-redux";

interface AppproviderProps {
  children: ReactNode;
}

const Appprovider: React.FC<AppproviderProps> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default Appprovider;

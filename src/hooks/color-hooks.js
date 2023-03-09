import React, { createContext, useState, useContext } from 'react';
import { v4 } from 'uuid';
import colorData from '../data/color-data.json';

const ColorContext = createContext();
export const useColors = () => useContext(ColorContext);

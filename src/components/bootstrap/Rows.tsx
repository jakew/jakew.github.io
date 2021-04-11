import React from "react";

import { buildClass as bc, SizeClassInfix, classesFromSizes, withClass, mapSizes } from "./tools";

export type RowColumnScaler = 0 | 1 | 2 | 3 | 4 | 5 | 6;
export type RowColumnAuto = "auto";
export type RowColumnsSizeClass = {
  [key in SizeClassInfix]?: RowColumnScaler;
};
export type RowColumns = RowColumnScaler | RowColumnsSizeClass | RowColumnAuto;


export const rowColsPrefix = "row-cols";
export const classesFromRowColumns = (rowColumns: RowColumns) => {
  if (typeof rowColumns === "number" || rowColumns === "auto") {
    return bc(rowColsPrefix, rowColumns as number | string);
  }
  
  return classesFromSizes(rowColsPrefix, rowColumns);
};


// offsets go 0 to 11, col size is 1 to 12 and auto.
export type ColumnSizeScalar =  "auto" | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | undefined;
export type ColumnOffsetSizeScaler = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11;

export type ColumnSizeWithOffset = {
  size?: ColumnSizeScalar;
  offset?: ColumnOffsetSizeScaler;
};

export type ColumnSize = ColumnSizeScalar | ColumnSizeWithOffset;

export type ColumnOffsetSizeClasses = {
  [key in SizeClassInfix]?: ColumnSize;
};

export type ColumnSizes = ColumnSize | ColumnOffsetSizeClasses; 

const columnSizePrefix = "col";
const columnOffsetPrefix = "offset";
const classesFromColumnSize = (columns: ColumnSize, sizeClass?: SizeClassInfix): string => {
  if (typeof columns !== 'object' || columns === null) {
    return bc(columnSizePrefix, sizeClass, columns as ColumnSizeScalar);
  }

  var classes = [];
  if ("size" in columns) {
    classes.push(bc(columnSizePrefix, sizeClass, columns.size))
  }

  if ("offset" in columns) {
    classes.push(bc(columnOffsetPrefix, sizeClass, columns.offset))
  }

  return classes.join(" ");
};

export const colSizeClasses = (sizes: ColumnSizes): string => {
  if (typeof sizes !== 'object' || sizes === null) {
    return bc(columnSizePrefix, sizes as number | string | "auto");
  }

  if ("size" in sizes || "offset" in sizes) {
    return classesFromColumnSize(sizes);
  }

  return mapSizes(sizes as ColumnOffsetSizeClasses, (value: ColumnSize, size: SizeClassInfix) => {
    return classesFromColumnSize(value, size);
  }).join(" ");
};


export const Row = ({children, ...props}: React.HTMLProps<HTMLDivElement>) => (
  <div { ...withClass(props, "row")}>
    {children}
  </div>
);

export interface ColProps extends React.HTMLProps<HTMLDivElement> {
  columnSizes?: ColumnSizes;
};

export const Col = ({children, columnSizes, ...props}: ColProps) => (
  <div { ...withClass(props, colSizeClasses(columnSizes))}>
    {children}
  </div>
);

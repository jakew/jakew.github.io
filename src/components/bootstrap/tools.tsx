import React, { ReactNode as Node, Fragment } from "react";

// Bootstrap Common Values
export type SizeClassInfix = "" | "sm" | "md" | "lg" | "xl" | "xxl";
export type SizeClassSet<V> = { 
  [key in SizeClassInfix]?: V
};

export const sizeClassesFromSet = <V extends unknown>(set: SizeClassSet<V>): SizeClassInfix[] => {
  return Object.keys(set) as SizeClassInfix[];
};

export const mapSizes = <V extends unknown, U extends unknown>(
  set: SizeClassSet<V>, 
  fn: (value: V, size: SizeClassInfix) => U
): U[] => {
  return sizeClassesFromSet(set)
    .map((size: SizeClassInfix) => {
      return fn(set[size] as V, size);
    });
};


// Columns
export type ColumnSize = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

// Padding and Margin
export type MPSides = "t" | "e" | "b" | "s" | "x" | "y" | "" | undefined;
export type MPScaler = 0 | 1 | 2 | 3 | 4 | 5 | "auto";
export type MPType = "m" | "p";

type ClassComponent = (string | number | null | undefined);
export const buildClass = (...values: ClassComponent[]): string => {
  return values.filter(e => e != null && e != "").join("-");
};

const bc = buildClass;

export const infix = (value: string | number | undefined): string => {
  return value ? "-" + value + "-" : "-";
};

export const classesFromSizes = <V extends ClassComponent>(prefix: string, values: SizeClassSet<V>): string => {
  return mapSizes(values, (value, size) => bc(prefix, size, value)).join(" ");
};

export interface ClassNamed {
  className?: string;
}

type ClassOrNot = string | undefined;
export const mergeClasses = (...classes: ClassOrNot[]): string => {
  return classes.filter(e => e != null && e != "").join(" ");
};


// withClass adds in the extra classes into the object provided using a shallow copy.
export const withClass = <T extends ClassNamed>(object: T, ...newClassNames: string[]): T => {
  return { 
    ...object, 
    className: mergeClasses(object.className, ...newClassNames)
  };
};



// Join take an array of elements and creates an array where each node inside of
// the array is spaced by the spacer, which is a space by default. This is super
// helpful for rendering multiple joining text pieces.
//
// Example: ["<p>A</p>", "<p>B</p>"] becomes ["<p>A</p>", " ", "<p>B</p>"];
//
export const join = (nodes: Node[], spacer: Node = " ") => (
  <>
    {nodes.shift()}
    {nodes.map(((node: Node, key: number) => <Fragment key={key}>{spacer}{node}</Fragment>))}
  </>
);
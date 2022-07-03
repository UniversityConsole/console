import React from "react";

export interface Props<T> {
  readonly columnDefinitions: ColumnDefinition<T>[];
  readonly isLoading: boolean;
  readonly showHeading: boolean;
}

export interface ColumnDefinition<T> {
  readonly id: string;
  readonly head: React.ReactNode;
  readonly cell: (item: T) => React.ReactNode;
}
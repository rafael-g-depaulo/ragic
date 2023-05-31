import React, { FC } from 'react';
import { Routes } from './types';

export interface RouterProps {
  routes: Routes;
}

export const Router: FC<RouterProps> = (props) => {
  // TODO: actually implement routes
  return <div>routes here</div>;
};

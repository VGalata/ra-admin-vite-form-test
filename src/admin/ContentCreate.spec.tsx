import { render, screen } from '@testing-library/react';
import { AdminContext, testDataProvider, ResourceContextProvider, ResourceContextValue } from 'react-admin';
import {ContentCreate} from "./ContentCreate";

import { FC, ReactElement } from 'react';


function withResource(value: ResourceContextValue): FC<{ children: ReactElement }> {
  return ({ children }) => <ResourceContextProvider value={value}>{children}</ResourceContextProvider>;
}

describe('ContentCreate', () => {
  it('drop-down', async () => {
    const WithResource = withResource('options');
    render(
      <AdminContext dataProvider={testDataProvider()}>
        <WithResource>
          <ContentCreate />
        </WithResource>
      </AdminContext>
    );

    const inputLabel = await screen.findByLabelText();
    expect(inputLabel).toBeVisible();
  });
})

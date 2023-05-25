import { render } from '@testing-library/react';

import RagicLib from './ragic-lib';

describe('RagicLib', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<RagicLib />);
    expect(baseElement).toBeTruthy();
  });
});

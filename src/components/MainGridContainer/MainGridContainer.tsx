import { ReactNode } from 'react';
import { GridContainer } from '@trussworks/react-uswds';

// import * as styles from './MainGridContainer.module.scss';

export interface IMainGridContainerProps {
  children: ReactNode;
  fullWidth?: boolean;
  className?: string;
  dataCy?: string;
}

const MainGridContainer = ({
  children,
  fullWidth = false,
  className = ``,
  dataCy,
}: IMainGridContainerProps) => {
  return fullWidth ? (
    <div className={className}>{children}</div>
  ) : (
    <GridContainer
      containerSize={`desktop-lg`}
      className={className}
      data-cy={dataCy}
    >
      {children}
    </GridContainer>
  );
};

export default MainGridContainer;

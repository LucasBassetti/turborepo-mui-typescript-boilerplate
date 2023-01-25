import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

import * as S from './styles';

export type MainProps = {
  title?: string;
  description?: string;
  buttonLabel?: string;
};

const Main = ({
  title = 'Turborepo MUI Boileplate',
  description = 'Turborepo, MUI, NextJS, TypeScript and ReactJS',
  buttonLabel = 'Check it now',
}: MainProps) => {
  const onButtonClick = () => {
    window.open('', '_blank');
  };

  return (
    <S.Wrapper>
      <Typography variant="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="body1" gutterBottom>
        {description}
      </Typography>
      <Button onClick={onButtonClick} sx={{ mt: 2 }} variant="contained">
        {buttonLabel}
      </Button>
    </S.Wrapper>
  );
};

export default Main;

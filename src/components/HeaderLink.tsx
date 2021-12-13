import { useCallback } from 'react';
import { useNavigate } from 'react-router';
import { IButtonProps, Button } from 'native-base';

export interface HeaderLinkProps extends IButtonProps {
    path: string,
    name: string,
}

export const useNavigateOnPress = (path: string) => {
  const navigate = useNavigate();
  return useCallback(() => navigate(path), [navigate, path]);
}

export const HeaderLink: React.FC<HeaderLinkProps> = (props) => {

  const { path, name } = props;

  const handleNavigate = useNavigateOnPress(path);

  return (
    <Button 
      _hover={{ color: 'lightblue' }} 
      _text={{ color: 'white' }} 
      variant='ghost' 
      onPress={handleNavigate}
      {...props}
    >
      {name}
    </Button>
  );
}

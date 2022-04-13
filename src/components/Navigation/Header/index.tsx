import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { FlexCenter } from '../../../styles/common';

const menuTree = [
  { title: 'home', path: '/' },
  { title: 'News', path: '/news' },
  { title: 'etc', path: '/etc' },
];

const Header = () => {
  const navigate = useNavigate();

  const handleClickMenu = (path: string) => {
    navigate(path);
  };
  return (
    <HeaderWrapper>
      <HomeIcon />
      <MenuWrapper>
        {menuTree.map((menu) => {
          return (
            <MenuItem
              key={menu.title}
              onClick={() => handleClickMenu(menu.path)}
            >
              {menu.title}
            </MenuItem>
          );
        })}
      </MenuWrapper>
    </HeaderWrapper>
  );
};

export default Header;

const HeaderWrapper = styled.header`
  width: 100%;
  height: 50px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
`;

const HomeIcon = styled.div``;

const MenuWrapper = styled.span`
  width: 60%;
  max-width: 500px;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 50px;
  cursor: pointer;
`;

const MenuItem = styled(FlexCenter)`
  font-weight: 600;
`;

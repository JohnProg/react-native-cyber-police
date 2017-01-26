/**
 * Navbar Menu Button
 * 首页 顶部 左侧 MENU 图标点击事件
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React, { PropTypes } from 'react';
import { TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

/* Component ==================================================================== */
const NavbarMenuButton = ({ toggleSideMenu }) => (
  <TouchableOpacity
    onPress={toggleSideMenu}
    activeOpacity={0.7}
    style={{ top: 2 }}
    hitSlop={{ top: 7, right: 7, bottom: 7, left: 7 }}
  >
    <Icon name={'menu'} size={32} color={'#FFF'} />
  </TouchableOpacity>
);

NavbarMenuButton.propTypes = {
  toggleSideMenu: PropTypes.func.isRequired,
};

/* Export Component ==================================================================== */
export default NavbarMenuButton;

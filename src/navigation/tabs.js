/**
 * Tabs Scenes
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import React from 'react';
import { Scene } from 'react-native-router-flux';

// Consts and Libs
import { AppConfig } from '@constants/';
import { AppStyles, AppSizes } from '@theme/';

// Components
import { TabIcon } from '@ui/';
import { NavbarMenuButton } from '@containers/ui/NavbarMenuButton/NavbarMenuButtonContainer';

// Scenes
import Placeholder from '@components/general/Placeholder';
import StyleGuide from '@containers/StyleGuideView';
import Recipes from '@containers/recipes/Browse/BrowseContainer';
import RecipeView from '@containers/recipes/RecipeView';

//Police业务
import Home from '@police/home/HomeContainer';


const navbarPropsTabs = {
  ...AppConfig.navbarProps,
  renderLeftButton: () => <NavbarMenuButton />,
  sceneStyle: {
    ...AppConfig.navbarProps.sceneStyle,
    paddingBottom: AppSizes.tabbarHeight,
  },
};

/* Routes ==================================================================== */
const scenes = (
  <Scene key={'tabBar'} tabs tabBarIconContainerStyle={AppStyles.tabbar} pressOpacity={0.95}>
      {/*======Police业务=========*/}

      {/*首页*/}
      <Scene
          key={'firstPage'}
          {...navbarPropsTabs}
          title={'首页'}
          component={Home}
          icon={props => TabIcon({ ...props, icon: 'home' })}
          analyticsDesc={'首页: Coming Soon'}
      />






      <Scene
          key={'timeline'}
          {...navbarPropsTabs}
          title={'数据警规'}
          component={Placeholder}
          icon={props => TabIcon({ ...props, icon: 'timeline' })}
          analyticsDesc={'数据警规: 建设中'}
      />

      <Scene
          key={'syncstate'}
          {...navbarPropsTabs}
          title={'上传状态'}
          component={Placeholder}
          icon={props => TabIcon({ ...props, icon: 'backup' })}
          analyticsDesc={'上传状态: 建设中'}
      />

      <Scene
          key={'message'}
          {...navbarPropsTabs}
          title={'警务对话'}
          component={Placeholder}
          icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}
          analyticsDesc={'警务对话: 建设中'}
      />

      {/*======Start Kit框架示例=========*/}

      {/*<Scene*/}
          {/*{...navbarPropsTabs}*/}
          {/*key={'recipes'}*/}
          {/*title={'Recipes'}*/}
          {/*icon={props => TabIcon({ ...props, icon: 'search' })}*/}
      {/*>*/}
          {/*<Scene*/}
              {/*{...navbarPropsTabs}*/}
              {/*key={'recipesListing'}*/}
              {/*component={Recipes}*/}
              {/*title={AppConfig.appName}*/}
              {/*analyticsDesc={'Recipes: Browse Recipes'}*/}
          {/*/>*/}
          {/*<Scene*/}
              {/*{...AppConfig.navbarProps}*/}
              {/*key={'recipeView'}*/}
              {/*component={RecipeView}*/}
              {/*getTitle={props => ((props.title) ? props.title : 'View Recipe')}*/}
              {/*analyticsDesc={'RecipeView: View Recipe'}*/}
          {/*/>*/}
      {/*</Scene>*/}

    {/*<Scene*/}
      {/*key={'styleGuide'}*/}
      {/*{...navbarPropsTabs}*/}
      {/*title={'Style Guide'}*/}
      {/*component={StyleGuide}*/}
      {/*icon={props => TabIcon({ ...props, icon: 'speaker-notes' })}*/}
      {/*analyticsDesc={'StyleGuide: Style Guide'}*/}
    {/*/>*/}
  </Scene>
);

export default scenes;

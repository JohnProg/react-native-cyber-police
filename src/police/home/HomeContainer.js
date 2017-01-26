/**
 * Home Screen Container
 * 首页
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { connect } from 'react-redux';

// Actions
import * as UserActions from '@redux/user/actions';

// The component we're mapping to
import AppHomeRender from './HomeView';

// What data from the store shall we send to the component?
const mapStateToProps = () => ({
});

// Any actions to map to the component?
const mapDispatchToProps = {
    notice: UserActions.notice,
};

export default connect(mapStateToProps, mapDispatchToProps)(AppHomeRender);

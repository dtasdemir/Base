import { createNavigationContainerRef } from "@react-navigation/native";
import { CommonActions } from "@react-navigation/native";

export const navigationRef = createNavigationContainerRef();

export const navigate = ({ NavigatorName }) => {
    if( navigationRef.isReady() ) {
        navigationRef.dispatch(
            CommonActions.navigate(NavigatorName)
        );
    } else {
        navigationRef.addListener('state', () => {
            navigationRef.dispatch(
                CommonActions.navigate(NavigatorName)
            )
        });
    }
};
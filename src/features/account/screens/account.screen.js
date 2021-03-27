import React from "react";

import {
  AccountBackground,
  AccountContainer,
  AccountCover,
  AuthButton,
} from "../components/account.styles";

export const AccountScreen = () => {
  return (
    <AccountBackground>
      <AccountCover />
      <AccountContainer>
        <AuthButton
          icon="lock-open-outline"
          color="black"
          mode="contained"
          onPress={() => console.log("Pressed")}
        >
          Login
        </AuthButton>
      </AccountContainer>
    </AccountBackground>
  );
};

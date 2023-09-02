import ProtectedHoC from "@/components/ProtectedHoC";
import { FC, PropsWithChildren } from "react";

const ProfilePage: FC<PropsWithChildren> = ({ children }) => {
  return <ProtectedHoC>{children}</ProtectedHoC>;
};

export default ProfilePage;

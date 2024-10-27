
import { Box } from "@chakra-ui/react";
import { UserInfo } from "./UserInfo";
import { Directions } from "./Directions";

export const Profile = () => {

    return(
        <Box my={12} p={6} maxW='1000px' mx='auto'>
            <UserInfo />
            <Directions />
        </Box>
    )
}
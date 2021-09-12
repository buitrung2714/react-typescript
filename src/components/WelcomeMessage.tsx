import { Box } from "@material-ui/core";

interface WelcomeMessageProps {
  position: string;
  country?: string;
  username: string;
}

const WelcomeMessage = ({
  position,
  username,
  country = "Vietnam",
}: WelcomeMessageProps) => {
  return (
    <Box>
      Welcome {username} - {position} from {country}
    </Box>
  );
};

export default WelcomeMessage;

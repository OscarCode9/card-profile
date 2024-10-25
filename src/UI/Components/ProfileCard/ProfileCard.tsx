import { Box, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ShareIcon from "@mui/icons-material/Share";
import EditIcon from "@mui/icons-material/Edit";
import { Replay } from "@mui/icons-material";
import profile1 from "../../../assets/1.png";
import profile2 from "../../../assets/2.png";
import profile3 from "../../../assets/3.png";
import {
  ActionButton,
  AnalyzeButton,
  Card,
  CardWrapper,
  DetailItem,
  DetailLabel,
  DetailValue,
  EditButton,
  PhotoContainer,
  ProfileAvatar,
  ReplayButton,
  styles,
} from "./ProfileCard.style";

const ProfileCard = () => {
  const profile = {
    initials: "AS",
    name: "Alex Smith",
    nickname: "Alex. S",
    age: 24,
    sex: "Male",
    ethnicity: "Belarusian",
    country: "Germany",
    position: "Manager",
    photos: [profile1, profile2, profile3],
  };

  return (
    <CardWrapper>
      <Card>
        <div>
          <Box sx={styles.headerContainer}>
            <Typography variant="h6" sx={styles.headerTitle}>
              Profile Card
            </Typography>
            <IconButton size="small" sx={styles.closeButton}>
              <CloseIcon />
            </IconButton>
          </Box>

          <Box sx={styles.mainContentContainer}>
            <Box sx={styles.profileSection}>
              <ProfileAvatar>{profile.initials}</ProfileAvatar>
              <Typography variant="h6" sx={styles.profileName}>
                {profile.nickname}
              </Typography>
            </Box>

              <Box sx={styles.detailsGrid}>
                {[
                  { label: "Name", value: profile.name },
                  { label: "Ethnicity", value: profile.ethnicity },
                  { label: "Sex", value: profile.sex },
                  { label: "Country", value: profile.country },
                  { label: "Age", value: profile.age },
                  { label: "Position", value: profile.position },
                ].map((detail, index) => (
                  <DetailItem key={index}>
                    <DetailLabel>{detail.label}:</DetailLabel>
                    <DetailValue>{detail.value}</DetailValue>
                  </DetailItem>
                ))}
              </Box>

            <Box sx={styles.rightColumn}>
              <div style={styles.editButtonsContainer}>
                <div style={styles.replayButtonContainer}>
                  <ReplayButton startIcon={<Replay />} />
                </div>
                <EditButton startIcon={<EditIcon />}>Edit profile</EditButton>
              </div>

              <Box sx={styles.photosContainer}>
                {profile.photos.map((photo, index) => (
                  <PhotoContainer key={index}>
                    <img src={photo} alt={`Profile ${index + 1}`} />
                  </PhotoContainer>
                ))}
              </Box>
            </Box>
          </Box>

          <Typography sx={styles.analysisText}>
            The analysis has not yet been formed
          </Typography>
        </div>

        <Box sx={styles.bottomActionsContainer}>
          <ActionButton startIcon={<ArrowBackIcon />}>Back</ActionButton>
          <Box sx={styles.rightButtonsContainer}>
            <ActionButton width={"56px"}>
              <ShareIcon />
            </ActionButton>
            <AnalyzeButton>Make a new analysis</AnalyzeButton>
          </Box>
        </Box>
      </Card>
    </CardWrapper>
  );
};

export default ProfileCard;

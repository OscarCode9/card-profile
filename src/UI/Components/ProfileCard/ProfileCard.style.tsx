import { Box, Typography, Button } from "@mui/material";
import styled from "@emotion/styled";

// Styled Components
export const CardWrapper = styled(Box)`
  width: 100vw;
  height: 100vh;
  padding: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Roboto", sans-serif;
  backdrop-filter: blur(15px);
`;

export const Card = styled(Box)`
  width: 100%;
  height: 100%;
  flex-direction: column;
  display: flex;
  justify-content: space-between;
  max-width: 1280px;
  max-height: 538px;
  background-color: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 2rem;
  color: white;
  border: 1px solid #ffffff1c;
`;

export const ProfileAvatar = styled(Box)`
  width: 64px;
  height: 64px;
  background-color: #2563eb;
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
  font-size: 1.25rem;
`;

export const DetailItem = styled(Box)`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

export const DetailLabel = styled(Typography)`
  font-weight: 600;
  color: white;
`;

export const DetailValue = styled(Typography)`
  color: #ffffffca;
`;

export const EditButton = styled(Button)`
  border: 1px solid rgba(75, 85, 99, 0.6);
  color: white;
  border-radius: 9999px;
  text-transform: none;
  padding: 8px 24px;
  width: 180px;
  height: 48px;
  &:hover {
    border-color: rgba(156, 163, 175, 0.6);
  }
`;

export const ReplayButton = styled(Button)`
  border: 1px solid rgba(75, 85, 99, 0.6);
  color: white;
  border-radius: 50%;
  text-transform: none;
  padding: 8px 24px;
  width: 48px;
  height: 48px;
  min-width: auto;
  &:hover {
    border-color: rgba(156, 163, 175, 0.6);
  }
  span {
    margin-right: 0;
    margin-left: -0;
  }
`;

interface ActionButtonI {
  width?: string;
}

export const ActionButton = styled(Button)<ActionButtonI>`
  color: white;
  border: 1px solid rgba(75, 85, 99, 0.6);
  border-radius: 9999px;
  text-transform: none;
  width: ${(props) => props.width || "180px"};
  height: 56px;
  padding: 8px 24px;
  min-width: auto;
  &:hover {
    border-color: rgba(156, 163, 175, 0.6);
  }
`;

export const AnalyzeButton = styled(Button)`
  background: linear-gradient(90deg, #e96e02, #ffb326);
  color: white;
  border-radius: 9999px;
  text-transform: none;
  padding: 8px 24px;
  width: 280px;
  height: 56px;
  &:hover {
    background: linear-gradient(60deg, #e96e02, #ffb326);
  }
  transition: 1s;
`;

export const PhotoContainer = styled(Box)`
  width: 64px;
  height: 64px;
  border-radius: 8px;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  justify-content: center;
`;

// Sx Styles Constants
export const styles = {
  headerContainer: {
    display: "flex",
    alignItems: "center",
    position: "relative",
    mb: 3,
    width: "100%",
  },

  headerTitle: {
    flex: 1,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
    lineHeight: 2.4,
  },

  closeButton: {
    position: "absolute",
    color: "white",
    bottom: "35px",
    right: "-25px"
  },

  mainContentContainer: {
    display: "flex",
    flexDirection: { xs: "column", lg: "row" },
    gap: 4,
    border: "1px solid #ffffff1c",
    padding: "2rem",
    borderRadius: "15px",
    justifyContent: "space-between",
  },

  profileSection: {
    display: "flex",
    alignItems: "center",
    gap: 2,
    width: { lg: "25%" },
  },

  profileName: {
    color: "white",
    fontWeight: "bold",
    fontSize: "40px",
  },

  detailsGrid: {
    display: "grid",
    gridTemplateColumns: "repeat(2, 1fr)",
    gap: "16px 50px",
  },

  rightColumn: {
    width: { lg: "25%" },
    display: "flex",
    flexDirection: "column",
    gap: 2,
  },

  replayButtonContainer: {
    width: "48px",
    height: "48px",
    marginRight: "12px",
  },

  editButtonsContainer: {
    display: "flex",
    justifyContent: "center",
  },

  photosContainer: {
    display: "flex",
    gap: 1,
    justifyContent: "center",
  },

  analysisText: {
    textAlign: "center",
    color: "with",
    fontWeight: 400,
    fontSize: "18px",
    my: 4,
  },

  bottomActionsContainer: {
    display: "flex",
    flexDirection: { xs: "column", sm: "row" },
    justifyContent: "space-between",
    gap: 2,
  },

  rightButtonsContainer: {
    display: "flex",
    gap: 2,
  },
};

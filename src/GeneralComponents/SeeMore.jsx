import React, { useState } from "react";
import { Box, Button, Collapse } from "@mui/material";
import { useTranslation } from "react-i18next";

const SeeMore = ({ collapsedContent, expandedContent, fullWidthButton = false }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const { t } = useTranslation();
  const handleToggle = () => setIsExpanded(!isExpanded);

  return (
    <Box>
      {!isExpanded && collapsedContent}
      <Collapse in={isExpanded}>{expandedContent}</Collapse>
      <Button onClick={handleToggle} variant="contained" sx={{
        mt: 2, width: fullWidthButton ? "100%" : "fit-content",
        display: fullWidthButton ? "block" : "inline-block", alignSelf: fullWidthButton ? "center" : "flex-start",
        padding: "6px 16px", fontSize: "0.875rem", textTransform: "none", borderRadius: "8px"
      }}>
        {isExpanded ? t("seemore.less") : t("seemore.more")}
      </Button>
    </Box>
  );
};

export default SeeMore;

import React from "react";
import { Box, Typography, Divider } from "@mui/material";
import { STYLE } from "../../nonview/constants";
import { Lang } from "../../nonview/utils";
import { DocMetadataView, ReturnToSearchButton } from "../atoms";
import DocRemoteMetadataView from "./DocRemoteMetadataView";

function DocRemoteTxtView({ doc, lang }) {
  const [remoteTxt, setRemoteTxt] = React.useState("");

  React.useEffect(() => {
    async function fetchRemoteTxt() {
      const remoteTxt = await doc.getRemoteTxt(lang.code);
      setRemoteTxt(remoteTxt);
    }
    fetchRemoteTxt();
  }, [doc, lang]);

  if (!remoteTxt) {
    return null;
  }

  const lines = remoteTxt.split("\n");

  return (
    <Box>
      <Typography variant="h5" color={lang.color} sx={{ mt: 2 }}>
        {lang.name} Raw-Text
      </Typography>
      {lines.map(function (line, iLine) {
        if (line.startsWith("<!-- page ") && line.endsWith(" -->")) {
          const pageNum = line.substring(10, line.length - 4);
          return (
            <Box key={iLine + "-page"}>
              <Divider />
              <Typography variant="caption" color={STYLE.COLOR.LIGHTER}>
                {"(Page " + pageNum + ")"}
              </Typography>
            </Box>
          );
        }
        return (
          <Typography key={iLine} variant="body2" sx={{ p: 1 }}>
            {line}
          </Typography>
        );
      })}
    </Box>
  );
}

function DocRemoteDataView({ doc }) {
  return (
    <Box>
      {Lang.listAll().map(function (lang) {
        return <DocRemoteTxtView key={lang.code} doc={doc} lang={lang} />;
      })}
    </Box>
  );
}

export default function DocView({ doc }) {
  return (
    <Box sx={{ m: 1, p: 1 }}>
      <ReturnToSearchButton />
      <Box sx={{ m: 1 }}>
        <DocMetadataView doc={doc} largeTitle={true} />
        <DocRemoteMetadataView doc={doc} />
        <DocRemoteDataView doc={doc} />
      </Box>
    </Box>
  );
}

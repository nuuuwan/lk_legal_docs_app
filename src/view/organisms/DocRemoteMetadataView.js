import { CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";
import { LangSourcesView } from "../molecules";

export default function DocRemoteMetadataView({ doc }) {
  const [remoteMetadata, setRemoteMetadata] = useState(null);

  useEffect(() => {
    async function fetchRemoteMetadata() {
      const metadata = await doc.getRemoteMetadata();
      setRemoteMetadata(metadata);
    }
    fetchRemoteMetadata();
  }, [doc]);

  if (!remoteMetadata) {
    return <CircularProgress />;
  }

  const sourceUrlIDPrefix = doc.remoteMetadataURL.substring(
    0,
    doc.remoteMetadataURL.length - 12,
  );

  return (
    <LangSourcesView
      doc={doc}
      langCodeToSourceUrl={{
        en: sourceUrlIDPrefix + "-en/doc.pdf",
        si: sourceUrlIDPrefix + "-si/doc.pdf",
        ta: sourceUrlIDPrefix + "-ta/doc.pdf",
      }}
    />
  );
}

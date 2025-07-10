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

  return (
    <LangSourcesView
      langCodeToSourceUrl={remoteMetadata["lang_to_source_url"]}
    />
  );
}

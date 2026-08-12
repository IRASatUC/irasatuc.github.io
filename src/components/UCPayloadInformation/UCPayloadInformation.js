import React, { useState, useEffect } from "react";
import "./UCPayloadInformation.css";

const S3_BASE = "https://ucpayload-iras-lab.s3.amazonaws.com/UC%20Payload%20Information/";

function UCPayloadInformation() {
  const [files, setFiles] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch(S3_BASE + "files.json").then((res) => res.json()).then(setFiles).catch((err) => setError(err.message));
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-6 py-10">
      <h1 className="text-3xl md:text-4xl font-bold text-base-blue mb-2">UC Payload Information</h1>
      <p className="text-gray-600 mb-8">Videos and documents shared by the IRAS Lab.</p>
      {error && <p className="text-red-600">Error loading files: {error}</p>}
      {!error && files.length === 0 && <p className="text-gray-500">Loading...</p>}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {files.map((f) => (
          <a key={f.name} href={S3_BASE + encodeURIComponent(f.name)} target="_blank" rel="noopener noreferrer" className="block p-5 rounded-lg border border-gray-200 hover:border-base-blue hover:shadow-md transition bg-white">
            <div className="text-xs uppercase text-gray-400 mb-2">{f.name.split(".").pop()}</div>
            <div className="font-semibold text-gray-900 mb-1 break-words">{f.name}</div>
            {f.description && <div className="text-sm text-gray-600">{f.description}</div>}
          </a>
        ))}
      </div>
    </div>
  );
}

export default UCPayloadInformation;